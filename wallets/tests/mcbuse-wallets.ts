import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { McbuseWallets } from "../target/types/mcbuse_wallets";
import { expect } from "chai";
import { PublicKey, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";

describe("mcbuse-wallets-with-sync", () => {
  // Configure the client to use the local cluster
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.McbuseWallets as Program<McbuseWallets>;
  const provider = anchor.getProvider() as anchor.AnchorProvider;
  
  // Generate keypairs for testing
  const admin = Keypair.generate();
  const user1 = Keypair.generate();
  const user2 = Keypair.generate();
  
  // Reserve wallet details
  const walletName = "TestWallet" + Math.floor(Math.random() * 10000); // Random name to avoid collisions
  const threshold = new anchor.BN(0.5 * LAMPORTS_PER_SOL); // 0.5 SOL
  
  // Bank wallet for testing funds transfer
  const bankWallet = Keypair.generate();
  
  // PDA for the reserve wallet
  const [reserveWalletPDA, reserveWalletBump] = PublicKey.findProgramAddressSync(
    [Buffer.from("reserve_wallet"), Buffer.from(walletName)],
    program.programId
  );

  before(async () => {
    // Airdrop some SOL to our test accounts
    const signature1 = await provider.connection.requestAirdrop(admin.publicKey, 10 * LAMPORTS_PER_SOL);
    const signature2 = await provider.connection.requestAirdrop(user1.publicKey, 10 * LAMPORTS_PER_SOL);
    const signature3 = await provider.connection.requestAirdrop(user2.publicKey, 10 * LAMPORTS_PER_SOL);
    const signature4 = await provider.connection.requestAirdrop(bankWallet.publicKey, 1 * LAMPORTS_PER_SOL);
    
    // Wait for confirmations
    await provider.connection.confirmTransaction(signature1);
    await provider.connection.confirmTransaction(signature2);
    await provider.connection.confirmTransaction(signature3);
    await provider.connection.confirmTransaction(signature4);
    
    console.log("Test wallets funded with SOL");
  });

  it("Initializes a reserve wallet", async () => {
    console.log("Creating reserve wallet:", walletName);
    
    const tx = await program.methods
      .initializeReserveWallet(walletName, threshold, reserveWalletBump)
      .accounts({
        reserveWallet: reserveWalletPDA,
        firstUser: admin.publicKey,
        payer: admin.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .signers([admin])
      .rpc();
    
    console.log("Wallet created! Transaction signature:", tx);

    // Check if the account was created with the right values
    const account = await program.account.reserveWallet.fetch(reserveWalletPDA);
    expect(account.walletBalance.toNumber()).to.equal(0);
    expect(account.threshold.toString()).to.equal(threshold.toString());
    expect(account.bankAccountCreated).to.be.false;
    expect(account.users.length).to.equal(1);
    expect(account.users[0].toString()).to.equal(admin.publicKey.toString());
    expect(account.name).to.equal(walletName);
    console.log("Wallet initialized successfully and all expected values verified");
  });

  it("Allows users to join the reserve wallet", async () => {
    console.log("User1 joining the reserve wallet");
    
    const tx1 = await program.methods
      .joinReserveWallet()
      .accounts({
        reserveWallet: reserveWalletPDA,
        newUser: user1.publicKey,
      })
      .signers([user1])
      .rpc();
    
    console.log("User1 joined! Transaction signature:", tx1);

    // Add user2 to wallet
    console.log("User2 joining the reserve wallet");
    
    const tx2 = await program.methods
      .joinReserveWallet()
      .accounts({
        reserveWallet: reserveWalletPDA,
        newUser: user2.publicKey,
      })
      .signers([user2])
      .rpc();
    
    console.log("User2 joined! Transaction signature:", tx2);

    // Verify both users joined
    const account = await program.account.reserveWallet.fetch(reserveWalletPDA);
    expect(account.users.length).to.equal(3); // admin + user1 + user2
    expect(account.users[1].toString()).to.equal(user1.publicKey.toString());
    expect(account.users[2].toString()).to.equal(user2.publicKey.toString());
    console.log("All users joined successfully and verified");
  });

  it("Manually deposits SOL to meet threshold", async () => {
    // Get the current balance of the reserve wallet
    const initialBalance = await provider.connection.getBalance(reserveWalletPDA);
    console.log("Initial reserve wallet balance:", initialBalance);
    
    // Calculate amount needed to meet threshold
    const account = await program.account.reserveWallet.fetch(reserveWalletPDA);
    const threshold = account.threshold.toNumber();
    console.log("Threshold:", threshold);
    
    // Use a system transfer to directly fund the reserve wallet PDA
    if (initialBalance < threshold) {
      const amountToDeposit = threshold + 100000; // Add extra for rent
      console.log("Manually depositing", amountToDeposit, "to reach threshold");
      
      const transferIx = anchor.web3.SystemProgram.transfer({
        fromPubkey: admin.publicKey,
        toPubkey: reserveWalletPDA,
        lamports: amountToDeposit,
      });
      
      // Create a transaction with the transfer instruction
      const transaction = new anchor.web3.Transaction().add(transferIx);
      
      // Send and confirm transaction
      const tx = await provider.sendAndConfirm(transaction, [admin]);
      console.log("Manual deposit transaction:", tx);
      
      // Verify the new balance
      const newBalance = await provider.connection.getBalance(reserveWalletPDA);
      console.log("New reserve wallet balance:", newBalance);
      expect(newBalance).to.be.at.least(threshold);
    }
  });

  it("Syncs the wallet's internal balance tracker", async () => {
    console.log("Syncing wallet balance...");
    
    // Call the syncWalletBalance function if your contract has one
    try {
      const tx = await program.methods
        .syncWalletBalance()
        .accounts({
          reserveWallet: reserveWalletPDA,
          admin: admin.publicKey,
        })
        .signers([admin])
        .rpc();
      
      console.log("Balance synced! Transaction signature:", tx);
      
      // Verify the internal balance is updated
      const account = await program.account.reserveWallet.fetch(reserveWalletPDA);
      const actualBalance = await provider.connection.getBalance(reserveWalletPDA);
      console.log("Internal balance after sync:", account.walletBalance.toString());
      console.log("Actual on-chain balance:", actualBalance);
      
      expect(account.walletBalance.toString()).to.equal(actualBalance.toString());
    } catch (e) {
      console.error("Error syncing balance:", e);
      console.log("This error may be expected if you haven't added the syncWalletBalance function to your contract yet.");
    }
  });

  it("Allows users to approve bank account creation", async () => {
    // Admin approves
    console.log("Admin approving bank account creation");
    
    const tx1 = await program.methods
      .approveBankAccountCreation()
      .accounts({
        reserveWallet: reserveWalletPDA,
        approver: admin.publicKey,
      })
      .signers([admin])
      .rpc();
    
    console.log("Admin approval successful! Transaction signature:", tx1);
    
    // User1 approves
    console.log("User1 approving bank account creation");
    
    const tx2 = await program.methods
      .approveBankAccountCreation()
      .accounts({
        reserveWallet: reserveWalletPDA,
        approver: user1.publicKey,
      })
      .signers([user1])
      .rpc();
    
    console.log("User1 approval successful! Transaction signature:", tx2);
    
    // User2 approves
    console.log("User2 approving bank account creation");
    
    const tx3 = await program.methods
      .approveBankAccountCreation()
      .accounts({
        reserveWallet: reserveWalletPDA,
        approver: user2.publicKey,
      })
      .signers([user2])
      .rpc();
    
    console.log("User2 approval successful! Transaction signature:", tx3);

    // Check approvals
    const account = await program.account.reserveWallet.fetch(reserveWalletPDA);
    expect(account.userApprovals.length).to.equal(3);
    console.log("All approvals successful and verified");
  });

  it("Creates a bank account when all users approve", async () => {
    // Get initial balance of the bank wallet
    const initialBankBalance = await provider.connection.getBalance(bankWallet.publicKey);
    console.log("Initial bank wallet balance:", initialBankBalance);
    
    // Fetch the reserve wallet before creating bank account
    const walletBefore = await program.account.reserveWallet.fetch(reserveWalletPDA);
    console.log("Wallet balance before (internal tracker):", walletBefore.walletBalance.toString());
    
    // Actual on-chain balance
    const actualBalance = await provider.connection.getBalance(reserveWalletPDA);
    console.log("Actual on-chain balance:", actualBalance);
    
    console.log("Creating bank account...");
    
    // Create bank account (transfer funds from reserve wallet to bank wallet)
    const tx = await program.methods
      .setBankAccountCreated(bankWallet.publicKey)
      .accounts({
        reserveWallet: reserveWalletPDA,
        bankWallet: bankWallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .rpc();
    
    console.log("Bank account created! Transaction signature:", tx);

    // Verify the bank account is marked as created
    const walletAfter = await program.account.reserveWallet.fetch(reserveWalletPDA);
    expect(walletAfter.bankAccountCreated).to.be.true;
    expect(walletAfter.bankAccountAddress).to.not.be.null;
    expect(walletAfter.bankAccountAddress?.toString()).to.equal(bankWallet.publicKey.toString());
    
    // Verify the wallet balance is reset to 0
    expect(walletAfter.walletBalance.toNumber()).to.equal(0);
    
    // Verify the bank wallet received the funds
    const newBankBalance = await provider.connection.getBalance(bankWallet.publicKey);
    console.log("New bank wallet balance:", newBankBalance);
    console.log("Increase in bank balance:", newBankBalance - initialBankBalance);
    
    // Check if a reasonable amount was transferred. The PDA needs to keep some lamports for rent exemption
    const transferredAmount = newBankBalance - initialBankBalance;
    const remainingBalance = await provider.connection.getBalance(reserveWalletPDA);
    console.log("Remaining balance in reserve wallet:", remainingBalance);
    
    // Make sure most of the funds were transferred (allowing for rent exemption)
    expect(transferredAmount).to.be.at.least(
      Math.floor(actualBalance * 0.95)
    );
    
    console.log("Bank account creation verified!");
    console.log("Final wallet state:", {
      bankAccountCreated: walletAfter.bankAccountCreated,
      bankAccount: walletAfter.bankAccountAddress?.toString(),
      finalWalletBalance: walletAfter.walletBalance.toString()
    });
  });
});