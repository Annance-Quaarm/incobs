"use client";
import { DynamicWidget, useIsLoggedIn } from "@/lib/dynamic";
import DynamicMethods from "@/components/Methods";
import { useDarkMode } from "@/lib/useDarkMode";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Main() {
  const { isDarkMode } = useDarkMode();
  const isLoggedIn = useIsLoggedIn();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/dashboard");
    }
  }, [isLoggedIn, router]);


  return (
    <main className="container mx-auto">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Welcome to MCBuse</h1>
          <p className="text-muted-foreground">
            Connect your wallet and start your journey with us
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <DynamicWidget />
        </div>
        <DynamicMethods isDarkMode={isDarkMode} />
      </div>

    </main>
  );
}
