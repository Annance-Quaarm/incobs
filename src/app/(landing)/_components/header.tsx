"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDynamicContext, useIsLoggedIn } from "@/lib/dynamic";
import Link from "next/link";

export function Header() {
    const isLoggedIn = useIsLoggedIn();
    const { handleLogOut } = useDynamicContext();
    
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-white">MCBuse</span>
                    </div>
                    <div className="flex items-center gap-4">
                        {isLoggedIn ? (
                            <div className="flex items-center gap-2">
                                <Link
                                    href="/dashboard"
                                    className={cn(
                                        buttonVariants({ variant: "default" }),
                                        "hover:!bg-white/90"
                                    )}
                                >
                                    Dashboard
                                </Link>
                                <button
                                    onClick={async () => await handleLogOut()}
                                    className={cn(
                                        buttonVariants({ variant: "default" }),
                                        "hover:!bg-white/90"
                                    )}
                                >
                                    Sign Out
                                </button>
                            </div>
                        ) : (
                            <Link
                                href="/login"
                                className={cn(
                                    buttonVariants({ variant: "default" }),
                                    "hover:!bg-white/90"
                                )}
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 -z-10 backdrop-blur-md bg-black/20 border-b border-white/10" />
        </header>
    );
}