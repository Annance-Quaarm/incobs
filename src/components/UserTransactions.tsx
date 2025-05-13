import React, { useState, useEffect } from 'react';
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { Connection, PublicKey, ParsedInstruction } from '@solana/web3.js';

function UserDashboard() {
  const { user, primaryWallet } = useDynamicContext();
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchTransactions() {
      if (!primaryWallet?.address) return;

      setIsLoading(true);
      const connection = new Connection('https://api.devnet.solana.com/');
      const publicKey = new PublicKey(primaryWallet.address);

      try {
        const signatures = await connection.getSignaturesForAddress(publicKey, { limit: 5 });

        const txDetails = await Promise.all(
          signatures.map(async ({ signature, blockTime }) => {
            const tx = await connection.getParsedTransaction(signature, { commitment: 'confirmed' });

            let recipient = null;

            tx?.transaction.message.instructions.forEach((ix) => {
              const parsedInstruction = ix as ParsedInstruction;
              if (
                parsedInstruction.program === 'system' &&
                parsedInstruction.parsed?.type === 'transfer'
              ) {
                recipient = parsedInstruction.parsed.info.destination;
              }
            });

            return {
              signature,
              timestamp: blockTime,
              status: tx?.meta?.err ? 'Failed' : 'Success',
              recipient,
            };
          })
        );

        setTransactions(txDetails as any);
      } catch (_) {
        setTransactions([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTransactions();
  }, [primaryWallet]);

  if (!user) return <p>Please log in to see your dashboard</p>;

  return (
    <div>
      <h2>Recent Transactions</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : transactions.length ? (
        <ul>
          {transactions.map(({ signature, timestamp, status, recipient }) => (
            <li key={signature}>
              {recipient ? <div>To: {recipient}</div> : <div>To: Unknown</div>}
              <div>Signature: {signature}...</div>
              {timestamp && (
                <div>Time: {new Date(timestamp * 1000).toLocaleString()}</div>
              )}
              <div>Status: {status}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No transactions found</p>
      )}
    </div>
  );
}

export default UserDashboard;
