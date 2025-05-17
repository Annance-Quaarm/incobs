// import * as anchor from '@coral-xyz/anchor';
// import { PublicKey, Connection, Transaction, Keypair } from '@solana/web3.js';
// import { isSolanaWallet } from '@dynamic-labs/solana';
// import { DynamicContext } from '@dynamic-labs/sdk-react-core';

// // Import the IDL for our smart contract
// import { McbuseWallets, McbuseWalletsIDL } from '@project/anchor';

// // Smart contract program ID
// const PROGRAM_ID = process.env.NEXT_PUBLIC_PROGRAM_ID || '7V3amFUk7nFV2rt8ucrupRA3nGGEmGTu4CXqiVfFqt9U';

// /**
//  * A utility for Solana smart contract interactions
//  */
// export class SolanaContractUtils {
//   private connection: Connection;
//   private dynamicContext: typeof DynamicContext | null;
//   private programId: PublicKey;

//   constructor(dynamicContext: typeof DynamicContext | null) {
//     const rpcUrl = process.env.NEXT_PUBLIC_SOLANA_RPC_URL || 'https://api.devnet.solana.com';
//     this.connection = new Connection(rpcUrl, 'confirmed');
//     this.dynamicContext = dynamicContext;
//     this.programId = new PublicKey(PROGRAM_ID);
//   }

//   /**
//    * Initialize a program instance for the smart contract
//    */
//   private async getProgram() {
//     if (!this.dynamicContext?.primaryWallet || !isSolanaWallet(this.dynamicContext.primaryWallet)) {
//       throw new Error("Solana wallet not connected");
//     }

//     // Get connection from the wallet
//     const walletConnection = await this.dynamicContext.primaryWallet.getConnection();
//     // Use the connection from the wallet if available
//     this.connection = walletConnection || this.connection;

//     // Get the wallet's signer
//     const signer = await this.dynamicContext.primaryWallet.getSigner();
//     if (!signer) {
//       throw new Error("Could not get wallet signer");
//     }

//     // Create a wallet adapter for Anchor
//     const wallet = {
//       publicKey: new PublicKey(this.dynamicContext.primaryWallet.address),
//       signTransaction: async (tx: Transaction) => {
//         // Use Dynamic's wallet to sign the transaction
//         return await this.dynamicContext!.primaryWallet!.signTransaction(tx);
//       },
//       signAllTransactions: async (txs: Transaction[]) => {
//         // Use Dynamic's wallet to sign multiple transactions
//         return await Promise.all(txs.map(tx => this.dynamicContext!.primaryWallet!.signTransaction(tx)));
//       }
//     };

//     // Create provider
//     const provider = new anchor.AnchorProvider(
//       this.connection,
//       wallet as any,
//       { commitment: 'confirmed' }
//     );

//     // Create and return the program
//     return new anchor.Program(McbuseWalletsIDL as any, provider);
//   }

//   /**
//    * Initialize a new reserve wallet on the blockchain
//    * @param name The name of the reserve wallet
//    * @param threshold The threshold amount in lamports
//    * @returns The reserve wallet public key
//    */
//   async initializeReserveWallet(name: string, threshold: number): Promise<string> {
//     try {
//       const program = await this.getProgram();

//       // Calculate PDA for the reserve wallet
//       const [reserveWalletPda, bump] = PublicKey.findProgramAddressSync(
//         [Buffer.from("reserve_wallet"), Buffer.from(name)],
//         this.programId
//       );

//       // Call the initialize_reserve_wallet function on the smart contract
//       const tx = await program.methods
//         .initializeReserveWallet(name, new anchor.BN(threshold), bump)
//         .accounts({
//           reserveWallet: reserveWalletPda,
//           firstUser: program.provider.publicKey,
//           payer: program.provider.publicKey,
//           systemProgram: anchor.web3.SystemProgram.programId,
//         })
//         .rpc();

//       console.log("Transaction signature:", tx);
//       return reserveWalletPda.toString();
//     } catch (error) {
//       console.error("Error initializing reserve wallet:", error);
//       throw new Error(`Failed to initialize reserve wallet: ${error.message}`);
//     }
//   }

//   /**
//    * Join an existing reserve wallet
//    * @param reserveWalletId The ID of the reserve wallet to join
//    * @returns Transaction signature
//    */
//   async joinReserveWallet(reserveWalletId: string): Promise<string> {
//     try {
//       const program = await this.getProgram();
//       const reserveWalletPubkey = new PublicKey(reserveWalletId);

//       // Get the reserve wallet account to extract the name
//       const reserveWalletAccount = await program.account.reserveWallet.fetch(reserveWalletPubkey);
//       const walletName = reserveWalletAccount.name;

//       // Calculate PDA for the reserve wallet - this should match the provided ID
//       const [reserveWalletPda] = PublicKey.findProgramAddressSync(
//         [Buffer.from("reserve_wallet"), Buffer.from(walletName)],
//         this.programId
//       );

//       // Call the join_reserve_wallet function on the smart contract
//       const tx = await program.methods
//         .joinReserveWallet()
//         .accounts({
//           reserveWallet: reserveWalletPda,
//           newUser: program.provider.publicKey,
//         })
//         .rpc();

//       console.log("Transaction signature:", tx);
//       return tx;
//     } catch (error) {
//       console.error("Error joining reserve wallet:", error);
//       throw new Error(`Failed to join reserve wallet: ${error.message}`);
//     }
//   }

//   /**
//    * Deposit funds to a reserve wallet
//    * @param reserveWalletId The ID of the reserve wallet
//    * @param amount The amount in lamports to deposit
//    * @returns Transaction signature
//    */
//   async deposit(reserveWalletId: string, amount: number): Promise<string> {
//     try {
//       const program = await this.getProgram();
//       const reserveWalletPubkey = new PublicKey(reserveWalletId);

//       // Call the deposit function on the smart contract
//       const tx = await program.methods
//         .deposit(new anchor.BN(amount))
//         .accounts({
//           reserveWallet: reserveWalletPubkey,
//           depositor: program.provider.publicKey,
//           systemProgram: anchor.web3.SystemProgram.programId,
//         })
//         .rpc();

//       console.log("Transaction signature:", tx);
//       return tx;
//     } catch (error) {
//       console.error("Error depositing to reserve wallet:", error);
//       throw new Error(`Failed to deposit to reserve wallet: ${error.message}`);
//     }
//   }

//   /**
//    * Approve bank account creation for a reserve wallet
//    * @param reserveWalletId The ID of the reserve wallet
//    * @returns Transaction signature
//    */
//   async approveAccountCreation(reserveWalletId: string): Promise<string> {
//     try {
//       const program = await this.getProgram();
//       const reserveWalletPubkey = new PublicKey(reserveWalletId);

//       // Call the approve_bank_account_creation function on the smart contract
//       const tx = await program.methods
//         .approveBankAccountCreation()
//         .accounts({
//           reserveWallet: reserveWalletPubkey,
//           approver: program.provider.publicKey,
//         })
//         .rpc();

//       console.log("Transaction signature:", tx);
//       return tx;
//     } catch (error) {
//       console.error("Error approving bank account creation:", error);
//       throw new Error(`Failed to approve bank account creation: ${error.message}`);
//     }
//   }

//   /**
//    * Set a reserve wallet's bank account as created
//    * @param reserveWalletId The ID of the reserve wallet
//    * @param bankAccountAddress The address of the bank account
//    * @returns Transaction signature
//    */
//   async setBankAccountCreated(reserveWalletId: string, bankAccountAddress: string): Promise<string> {
//     try {
//       const program = await this.getProgram();
//       const reserveWalletPubkey = new PublicKey(reserveWalletId);
//       const bankAccountPubkey = new PublicKey(bankAccountAddress);

//       // Call the set_bank_account_created function on the smart contract
//       const tx = await program.methods
//         .setBankAccountCreated(bankAccountPubkey)
//         .accounts({
//           reserveWallet: reserveWalletPubkey,
//           bankWallet: bankAccountPubkey,
//           systemProgram: anchor.web3.SystemProgram.programId,
//         })
//         .rpc();

//       console.log("Transaction signature:", tx);
//       return tx;
//     } catch (error) {
//       console.error("Error setting bank account created:", error);
//       throw new Error(`Failed to set bank account created: ${error.message}`);
//     }
//   }

//   /**
//    * Withdraw funds from reserve wallet to user wallet
//    * @param reserveWalletId The ID of the reserve wallet
//    * @param amount The amount in lamports to withdraw
//    * @returns Transaction signature
//    */
//   async withdrawFunds(reserveWalletId: string, amount: number): Promise<string> {
//     try {
//       const program = await this.getProgram();
//       const reserveWalletPubkey = new PublicKey(reserveWalletId);

//       // Call the withdraw_funds function on the smart contract
//       const tx = await program.methods
//         .withdrawFunds(new anchor.BN(amount))
//         .accounts({
//           reserveWallet: reserveWalletPubkey,
//           withdrawer: program.provider.publicKey,
//           systemProgram: anchor.web3.SystemProgram.programId,
//         })
//         .rpc();

//       console.log("Transaction signature:", tx);
//       return tx;
//     } catch (error) {
//       console.error("Error withdrawing funds:", error);
//       throw new Error(`Failed to withdraw funds: ${error.message}`);
//     }
//   }

//   /**
//    * Transfer funds from bank account to user wallet
//    * @param reserveWalletId The ID of the reserve wallet
//    * @param bankAccountAddress The address of the bank account
//    * @param amount The amount in lamports to transfer
//    * @returns Transaction signature
//    */
//   async transferFromBankToWallet(
//     reserveWalletId: string,
//     bankAccountAddress: string,
//     amount: number
//   ): Promise<string> {
//     try {
//       const program = await this.getProgram();
//       const reserveWalletPubkey = new PublicKey(reserveWalletId);
//       const bankAccountPubkey = new PublicKey(bankAccountAddress);

//       // The bank account must sign this transaction
//       // In a real implementation, this would be handled by a separate signer
//       // For now, we'll simulate it by using the same signer

//       // Call the transfer_from_bank_to_wallet function on the smart contract
//       const tx = await program.methods
//         .transferFromBankToWallet(new anchor.BN(amount))
//         .accounts({
//           reserveWallet: reserveWalletPubkey,
//           bankWallet: bankAccountPubkey,
//           userWallet: program.provider.publicKey,
//           systemProgram: anchor.web3.SystemProgram.programId,
//         })
//         .rpc();

//       console.log("Transaction signature:", tx);
//       return tx;
//     } catch (error) {
//       console.error("Error transferring from bank to wallet:", error);
//       throw new Error(`Failed to transfer from bank to wallet: ${error.message}`);
//     }
//   }
// }