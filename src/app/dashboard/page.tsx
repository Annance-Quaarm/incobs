'use client';
import { useState } from 'react';
import { Footer } from "../(landing)/_components/footer";
import DynamicMethods from "@/components/Methods";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { isSolanaWallet } from '@dynamic-labs/solana';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [activeMethod, setActiveMethod] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { primaryWallet } = useDynamicContext();
  const router = useRouter();
  
  const methods = [
    { id: 'user', label: 'User Details' },
    { id: 'wallets', label: 'Wallets' },
    { id: 'connection', label: 'Connection', requiresSolana: true },
    { id: 'signer', label: 'Signer', requiresSolana: true },
    { id: 'transactions', label: 'Transactions', requiresSolana: true },
  ];

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Header with methods */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold cursor-pointer" onClick={() => router.push("/")}>MCBuse</h1>
          </div>
          
          {/* Method buttons in header */}
          <div className="flex items-center space-x-2 overflow-x-auto">
            {methods.map(method => (
              ((method.requiresSolana && primaryWallet && isSolanaWallet(primaryWallet)) || !method.requiresSolana) && (
                <Button 
                  key={method.id}
                  variant={activeMethod === method.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveMethod(method.id)}
                >
                  {method.label}
                </Button>
              )
            ))}
            <Button onClick={toggleDarkMode} variant="ghost" size="sm">
              {isDarkMode ? '☀️' : '🌙'}
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 pt-24 pb-20 flex-grow">
        <div className="max-w-4xl mx-auto">
          {/* Custom method display based on selected method */}
          {activeMethod && (
            <div className="bg-card rounded-lg shadow-sm border p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">
                {methods.find(m => m.id === activeMethod)?.label}
              </h2>
              <DynamicMethodDisplay method={activeMethod} isDarkMode={isDarkMode} />
            </div>
          )}

          {!activeMethod && (
            <div className="grid gap-6">
              <h2 className="text-2xl font-bold">Welcome to your Dashboard</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-card rounded-lg shadow-sm border p-6">
                  <h3 className="text-lg font-medium mb-2">Account Overview</h3>
                  <p className="text-muted-foreground">
                    View your connected wallets and account details by selecting 
                    "User Details" or "Wallets" from the header.
                  </p>
                </div>
                <div className="bg-card rounded-lg shadow-sm border p-6">
                  <h3 className="text-lg font-medium mb-2">Solana Features</h3>
                  <p className="text-muted-foreground">
                    If you've connected a Solana wallet, you can explore connections, 
                    transactions, and more from the header options.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Component to display method results
function DynamicMethodDisplay({ method, isDarkMode }: { method: string, isDarkMode: boolean }) {
  return (
    <div className="dynamic-method-display">
      <DynamicMethods 
        isDarkMode={isDarkMode} 
        initialMethod={method} 
      />
    </div>
  );
}