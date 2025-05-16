// services/blockchain-listener.ts
import { Connection, PublicKey } from '@solana/web3.js';
import { db } from '@/lib/prisma';
import { generateAccountNumber, generateIBAN } from '@/lib/mockBanks';

const SOLANA_RPC_URL = process.env.SOLANA_RPC_URL || 'https://api.devnet.solana.com';
const connection = new Connection(SOLANA_RPC_URL);

export async function startSolanaListener(programId: string) {
  console.log('Starting Solana listener for program:', programId);
  
  connection.onLogs(
    new PublicKey(programId),
    async (logs) => {
      try {
        // Process bank account creation events
        if (logs.logs.some(log => log.includes('BANK_ACCOUNT_CREATED'))) {
          await handleBankAccountCreation(logs.logs);
        }
        
        // Process bank withdrawal events
        if (logs.logs.some(log => log.includes('BANK_WITHDRAWAL'))) {
          await handleBankWithdrawal(logs.logs);
        }
        
        // Process direct deposit events
        if (logs.logs.some(log => log.includes('DIRECT_DEPOSIT'))) {
          await handleDirectDeposit(logs.logs);
        }

        // Process approve bank account events
        if (logs.logs.some(log => log.includes('APPROVE_BANK_ACCOUNT'))) {
          await handleApproveBank(logs.logs);
        }
      } catch (error) {
        console.error('Error processing transaction logs:', error);
      }
    },
    'confirmed'
  );
  
  console.log('Solana listener started successfully');
}

async function handleBankAccountCreation(logs: string[]) {
  const creationLog = logs.find(log => log.includes('BANK_ACCOUNT_CREATED'));
  if (!creationLog) return;
  
  // Parse log format: BANK_ACCOUNT_CREATED:wallet_name:bank_account_address:amount
  const [_, walletName, bankAccountAddress, amountStr] = creationLog.split(':');
  const amount = BigInt(amountStr);
  
  console.log(`Processing bank account creation: ${walletName}, ${bankAccountAddress}, ${amount}`);
  
  // Find the reserve wallet in our database
  const reserveWallet = await db.reserveWallet.findFirst({
    where: { name: walletName },
    include: { members: true }
  });
  
  if (!reserveWallet) {
    console.error(`Reserve wallet not found: ${walletName}`);
    return;
  }
  
  // Get the first available bank
  const bank = await db.bank.findFirst({
    orderBy: { id: 'asc' }
  });
  
  if (!bank) {
    console.error('No banks found in database');
    return;
  }
  
  // Create bank account in our database
  const bankAccount = await db.bankAccount.create({
    data: {
      id: bankAccountAddress,
      accountNumber: await generateAccountNumber(),
      bankId: bank.id,
      reserveWalletId: reserveWallet.id,
      balance: amount,
    },
  });
  
  // Create virtual IBANs for each member
  for (const member of reserveWallet.members) {
    const iban = generateIBAN(bank.code, member.walletAddress);
    
    await db.virtualIban.create({
      data: {
        iban,
        bankAccountId: bankAccount.id,
        walletAddress: member.walletAddress,
      },
    });
  }
  
  // Update reserve wallet
  await db.reserveWallet.update({
    where: { id: reserveWallet.id },
    data: {
      bankAccountCreated: true,
      balance: 0, // Reset balance as it's now in the bank account
    },
  });
  
  console.log(`Bank account created for ${walletName}: ${bankAccountAddress}`);
}

async function handleBankWithdrawal(logs: string[]) {
  const withdrawalLog = logs.find(log => log.includes('BANK_WITHDRAWAL'));
  if (!withdrawalLog) return;
  
  // Parse log format: BANK_WITHDRAWAL:bank_account_address:receiver:amount
  const parts = withdrawalLog.split(':');
  if (parts.length < 4) {
    console.error(`Invalid BANK_WITHDRAWAL log format: ${withdrawalLog}`);
    return;
  }
  
  const [_, bankAccountId, receiverAddress, amountStr] = parts;
  const amount = BigInt(amountStr);
  
  console.log(`Processing bank withdrawal: ${bankAccountId}, ${receiverAddress}, ${amount}`);
  
  // Find the bank account in our database
  const bankAccount = await db.bankAccount.findUnique({
    where: { id: bankAccountId },
    include: { virtualIbans: true },
  });
  
  if (!bankAccount) {
    console.error(`Bank account not found: ${bankAccountId}`);
    return;
  }
  
  // Find the virtual IBAN for this receiver
  const virtualIban = bankAccount.virtualIbans.find(
    viban => viban.walletAddress === receiverAddress
  );
  
  if (!virtualIban) {
    console.error(`Virtual IBAN not found for receiver: ${receiverAddress}`);
    return;
  }
  
  // Check if bank account has sufficient balance
  if (bankAccount.balance < amount) {
    console.error(`Insufficient balance for withdrawal from bank account ${bankAccountId}`);
    return;
  }
  
  // Create a bank transaction
  const bankTransaction = await db.bankTransaction.create({
    data: {
      amount,
      direction: 'OUTGOING',
      description: 'Transfer to wallet initiated from blockchain',
      bankAccountId: bankAccount.id,
      virtualIbanId: virtualIban.id,
    },
  });
  
  // Create a wallet transaction
  const walletTransaction = await db.walletTransaction.create({
    data: {
      amount,
      description: 'Transfer from bank account to wallet',
      walletAddress: receiverAddress,
      bankTransactionId: bankTransaction.id,
    },
  });
  
  // Update the bank account balance
  await db.bankAccount.update({
    where: { id: bankAccount.id },
    data: {
      balance: {
        decrement: amount,
      },
    },
  });
  
  console.log(`Withdrawal of ${amount} processed from bank account ${bankAccountId} to wallet ${receiverAddress}`);
}

async function handleDirectDeposit(logs: string[]) {
  const depositLog = logs.find(log => log.includes('DIRECT_DEPOSIT'));
  if (!depositLog) return;
  
  // Parse log format: DIRECT_DEPOSIT:bank_account_address:depositor:amount
  const parts = depositLog.split(':');
  if (parts.length < 4) {
    console.error(`Invalid DIRECT_DEPOSIT log format: ${depositLog}`);
    return;
  }
  
  const [_, bankAccountId, depositorAddress, amountStr] = parts;
  const amount = BigInt(amountStr);
  
  // Check if bankAccountId is valid
  if (!bankAccountId || bankAccountId === "undefined") {
    console.error(`Invalid bank account address in direct deposit`);
    return;
  }
  
  console.log(`Processing direct deposit: ${bankAccountId}, ${depositorAddress}, ${amount}`);
  
  // Find the bank account
  const bankAccount = await db.bankAccount.findUnique({
    where: { id: bankAccountId },
    include: { virtualIbans: true },
  });
  
  if (!bankAccount) {
    console.error(`Bank account not found: ${bankAccountId}`);
    return;
  }
  
  // Find the virtual IBAN for this depositor
  const virtualIban = bankAccount.virtualIbans.find(
    viban => viban.walletAddress === depositorAddress
  );
  
  if (!virtualIban) {
    console.error(`Virtual IBAN not found for depositor: ${depositorAddress}`);
    return;
  }
  
  // Create a bank transaction
  const transaction = await db.bankTransaction.create({
    data: {
      amount,
      direction: 'INCOMING',
      description: 'Direct deposit from blockchain',
      senderName: depositorAddress,
      bankAccountId,
      virtualIbanId: virtualIban.id,
    },
  });
  
  // Update the bank account balance
  await db.bankAccount.update({
    where: { id: bankAccountId },
    data: {
      balance: {
        increment: amount,
      },
    },
  });
  
  console.log(`Direct deposit of ${amount} processed from ${depositorAddress} to bank account ${bankAccountId}`);
}

// Updated function to handle approve bank account events
async function handleApproveBank(logs: string[]) {
  const approveLog = logs.find(log => log.includes('APPROVE_BANK_ACCOUNT'));
  if (!approveLog) return;
  
  // Parse log format: APPROVE_BANK_ACCOUNT:wallet_name:approver:approvals_count:total_users
  const [_, walletName, approver, approvalsCountStr, totalUsersStr] = approveLog.split(':');
  
  console.log(`Processing bank account approval: ${walletName}, ${approver}`);
  
  // Find the reserve wallet in our database
  const reserveWallet = await db.reserveWallet.findFirst({
    where: { name: walletName },
  });
  
  if (!reserveWallet) {
    console.error(`Reserve wallet not found: ${walletName}`);
    return;
  }
  
  // Update the approval status for the specific member
  try {
    await db.reserveWalletMember.updateMany({
      where: { 
        reserveWalletId: reserveWallet.id,
        walletAddress: approver
      },
      data: {
        hasApproved: true
      }
    });
    
    console.log(`Updated approval status for ${approver} in wallet ${walletName}`);
  } catch (error) {
    console.error(`Error updating approval status: ${error}`);
  }
}