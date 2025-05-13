'use client';
import { useState, useEffect } from 'react';
import { useDynamicContext, useIsLoggedIn, useUserWallets } from "@dynamic-labs/sdk-react-core";
import { isSolanaWallet } from '@dynamic-labs/solana'

import UserTransactions from './UserTransactions';
import { Button } from './ui/button';

interface DynamicMethodsProps {
  isDarkMode: boolean;
  initialMethod?: string; 
}

export default function DynamicMethods({ isDarkMode, initialMethod }: DynamicMethodsProps) {
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

  useEffect(() => {
    if (initialMethod && !isLoading) {
      switch(initialMethod) {
        case 'user':
          showUser();
          break;
        case 'wallets':
          showUserWallets();
          break;
        case 'connection':
          fetchConnection();
          break;
        case 'signer':
          fetchSigner();
          break;
        case 'transactions':
          showUserTransactions();
          break;
      }
    }
  }, [initialMethod, isLoading]);

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
        <div className="dynamic-methods flex flex-col justify-center gap-5" data-theme={isDarkMode ? 'dark' : 'light'}>
          {result && (
            <div 
              className={`results-container overflow-auto max-h-[500px] border rounded-lg p-4 bg-card ${
                isDarkMode ? 'dark-scrollbar scroll' : ''
              }`}
              style={isDarkMode ? {
                scrollbarWidth: 'thin',
                scrollbarColor: '#4B5563 #1F2937'
              } : {}}
            >
              {typeof result === 'string' ? (
                <pre className="results-text whitespace-pre-wrap break-words">{result}</pre>
              ) : (
                result
              )}
            </div>
          )}
          {result && (
            <Button onClick={clearResult}>Clear</Button>
          )}
        </div>
      )}
    </>
  );
}