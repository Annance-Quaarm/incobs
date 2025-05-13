'use client';
import { useState, useEffect } from 'react';
import { useDynamicContext, useIsLoggedIn, useUserWallets } from "@dynamic-labs/sdk-react-core";
import { isSolanaWallet } from '@dynamic-labs/solana'

import UserTransactions from './UserTransactions';
import { Button } from './ui/button';

interface DynamicMethodsProps {
  isDarkMode: boolean;
}

export default function DynamicMethods({ isDarkMode }: DynamicMethodsProps) {
  const isLoggedIn = useIsLoggedIn();
  const { sdkHasLoaded, primaryWallet, user } = useDynamicContext();
  const userWallets = useUserWallets();
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<string | JSX.Element>('');


  const safeStringify = (obj: unknown): string => {
    const seen = new WeakSet();
    return JSON.stringify(
      obj,
      (key, value) => {
        if (typeof value === "object" && value !== null) {
          if (seen.has(value)) {
            return "[Circular]";
          }
          seen.add(value);
        }
        return value;
      },
      2
    );
  };


  useEffect(() => {
    if (sdkHasLoaded && isLoggedIn && primaryWallet) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [sdkHasLoaded, isLoggedIn, primaryWallet]);

  function clearResult() {
    setResult('');
  }

  function showUser() {
    setResult(safeStringify(user));
  }

  function showUserWallets() {
    setResult(safeStringify(userWallets));
  }

  function showUserTransactions() {
    setResult(<UserTransactions />);
  }

  async function fetchConnection() {
    if (!primaryWallet || !isSolanaWallet(primaryWallet)) return;

    const connection = await primaryWallet.getConnection();
    setResult(safeStringify(connection));
  }

  async function fetchSigner() {
    if (!primaryWallet || !isSolanaWallet(primaryWallet)) return;

    const signer = await primaryWallet.getSigner();
    setResult(safeStringify(signer));
  }

  async function signSolanaMessage() {
    if (!primaryWallet || !isSolanaWallet(primaryWallet)) return;

    const signature = await primaryWallet.signMessage("Hello World");

    if (typeof signature !== "string") {
      setResult("No signature returned");
      return;
    }
    setResult(signature);
  }



  return (
    <>
      {!isLoading && (
        <div className="dynamic-methods" data-theme={isDarkMode ? 'dark' : 'light'}>
          <div className="methods-container flex gap-5">
            <Button onClick={showUser}>User Details</Button>
            <Button onClick={showUserWallets}>User Wallets</Button>

            {primaryWallet && isSolanaWallet(primaryWallet) && (
              <>
                <Button onClick={fetchConnection}>Fetch Connection</Button>
                <Button onClick={fetchSigner}>Fetch Signer</Button>
                <Button onClick={showUserTransactions}>Recent Transactions</Button>
                {/* <button className="btn btn-primary" onClick={signSolanaMessage}>
        Sign &quot;Hello World&quot; on Solana
      </button> */}
              </>
            )}

          </div>
          {result && (
            <div className="results-container">
              {typeof result === 'string' ? (
                <pre className="results-text">{result}</pre>
              ) : (
                result
              )}
            </div>
          )}
          {result && (
            <div className="clear-container">
              <button className="btn btn-primary" onClick={clearResult}>Clear</button>
            </div>
          )}
        </div>
      )}
    </>
  );
}