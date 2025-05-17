'use client';
import { useEffect, useState } from 'react';
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, Wallet, Activity, Coins, Shield } from "lucide-react";
import { useBankAccount } from '@/hooks/useBankAccount';
import { getProgramBalance } from '@/lib/solana';

export default function DashboardPage() {
  const [activeMethod, setActiveMethod] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { primaryWallet } = useDynamicContext();
  const [isLoading, setIsLoading] = useState(false);

  const { getBanks, loading: isBanksLoading, getReserveWalletDetails, loading: isReserveWalletsLoading, error: reserveWalletsError, getUserReserveWallets } = useBankAccount();

  useEffect(() => {
    // getBanks();

    getProgramBalance(process.env.NEXT_PUBLIC_PROGRAM_ID || "");
    // getUserReserveWallets();
    // getReserveWalletDetails(primaryWallet?.address || "");
  }, []);

  // Mock data - replace with real data from dynamic/backend
  const portfolioValue = "1,234.56";
  const portfolioChange = "+12.34%";
  const isPositive = true;

  const assets = [
    { name: "SOL", balance: "12.34", value: "1,234.56" },
    { name: "USDC", balance: "1,000.00", value: "1,000.00" },
  ];

  const recentTransactions = [
    { type: "Deposit", amount: "+1.5 SOL", timestamp: "2 hours ago" },
    { type: "Swap", amount: "SOL → USDC", timestamp: "5 hours ago" },
  ];

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Header with methods */}


      {/* Main content */}
      <main className="container mx-auto px-4 pt-24 pb-20 flex-grow">
        <div className="max-w-4xl mx-auto">
          {/* Custom method display based on selected method */}
          {/* {activeMethod && (
            <div className="bg-card rounded-lg shadow-sm border p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">
                {methods.find(m => m.id === activeMethod)?.label}
              </h2>
              <DynamicMethodDisplay method={activeMethod} isDarkMode={isDarkMode} />
            </div>
          )} */}

          {!activeMethod && (
            <div className="grid gap-6">
              <h2 className="text-2xl font-bold">Welcome to your Dashboard</h2>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
                    <Wallet className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${portfolioValue}</div>
                    <p className={`text-xs ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                      {portfolioChange}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">24h Volume</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$456.78</div>
                    <p className="text-xs text-muted-foreground">+23.45% from yesterday</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Positions</CardTitle>
                    <Coins className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground">Across 2 protocols</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Security Score</CardTitle>
                    <Shield className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">85%</div>
                    <p className="text-xs text-muted-foreground">2FA enabled</p>
                  </CardContent>
                </Card>
              </div>

              {/* Assets and Recent Activity */}
              <div className="grid gap-4 md:grid-cols-2">
                {/* Assets */}
                <Card>
                  <CardHeader>
                    <CardTitle>Your Assets</CardTitle>
                    <CardDescription>Current holdings and their values</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {assets.map((asset) => (
                        <div key={asset.name} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{asset.name}</p>
                            <p className="text-sm text-muted-foreground">{asset.balance}</p>
                          </div>
                          <p className="font-medium">${asset.value}</p>
                        </div>
                      ))}
                      <Button variant="outline" className="w-full">
                        View All Assets
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your latest transactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentTransactions.map((tx, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{tx.type}</p>
                            <p className="text-sm text-muted-foreground">{tx.timestamp}</p>
                          </div>
                          <p className="font-medium">{tx.amount}</p>
                        </div>
                      ))}
                      <Button variant="outline" className="w-full">
                        View All Transactions
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common operations you might need</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
                      <ArrowUpRight className="h-4 w-4" />
                      <span>Deposit</span>
                    </Button>
                    <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
                      <ArrowDownRight className="h-4 w-4" />
                      <span>Withdraw</span>
                    </Button>
                    <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
                      <Coins className="h-4 w-4" />
                      <span>Send</span>
                    </Button>
                    {/* <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
                      <Activity className="h-4 w-4" />
                      <span>Stake</span>
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

// // Component to display method results
// function DynamicMethodDisplay({ method, isDarkMode }: { method: string, isDarkMode: boolean }) {
//   return (
//     <div className="dynamic-method-display">
//       <DynamicMethods
//         isDarkMode={isDarkMode}
//         initialMethod={method}
//       />
//     </div>
//   );
// }