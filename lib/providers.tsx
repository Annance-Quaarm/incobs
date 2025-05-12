'use client';

import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";


export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {

  

  return (
   <DynamicContextProvider
      theme="auto"
      settings={{
        environmentId:
          // replace with your own environment ID
          process.env.NEXT_PUBLIC_DYNAMIC_ENV_ID ||
          "91beb333-bf77-4173-af2a-fa3af097ce9f",
        walletConnectors: [SolanaWalletConnectors],
      }}
    >
      {children}
    </DynamicContextProvider>
  );
}