"use client";
import { DynamicWidget } from "@/lib/dynamic";
import DynamicMethods from "@/components/Methods";
import { useDarkMode } from "@/lib/useDarkMode";
import Image from "next/image";
import Link from "next/link";

export default function Main() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`min-h-screen bg-gradient-to-b from-background to-background/80 ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              className="h-8 w-auto"
              src={isDarkMode ? "/logo-light.png" : "/logo-dark.png"}
              alt="MCBuse"
              width={120}
              height={32}
              priority
            />
          </Link>
          <div className="flex items-center space-x-4">
            <a
              href="https://docs.dynamic.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Docs
            </a>
            <a
              href="https://app.dynamic.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Auth Widget */}
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

            {/* Right Column - Image */}
            <div className="hidden md:block relative h-[500px]">
              <Image
                src={isDarkMode ? "/image-dark.png" : "/image-light.png"}
                alt="MCBuse Platform"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} MCBuse. All rights reserved.
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
