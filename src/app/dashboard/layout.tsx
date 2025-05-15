"use client"

import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from '@/components/navigation/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { redirect, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { Separator } from '@/components/ui/separator';
import { DynamicBreadcrumbs } from './_components/breadcrumbs';
import { ProgressBar } from '@/components/custom/progress-bar';
import { methods } from '@/constants/methods';
import { Button } from '@/components/ui/button';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { isSolanaWallet } from '@dynamic-labs/solana';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {




    const { primaryWallet, user, handleLogOut, } = useDynamicContext();
    const router = useRouter();

    const [activeMethod, setActiveMethod] = useState<string | null>(null);
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    if (!user) {

    }

    return (
        <ProgressBar className="fixed top-0 h-1 bg-primary">
            <SidebarProvider>
                {user && (
                    <AppSidebar
                        user={user}
                        handleLogOut={handleLogOut}
                    />
                )}
                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center gap-2">
                        <div className="flex w-full justify-between">
                            <div className="flex items-center gap-2 px-4">
                                <SidebarTrigger className="-ml-1" />
                                <Separator orientation="vertical" className="mr-2 h-4" />
                                <DynamicBreadcrumbs />
                            </div>

                            {/* <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/40">
                                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <h1 className="text-xl font-bold cursor-pointer" onClick={() => router.push("/")}>MCBuse</h1>
                                    </div> */}

                            {/* Method buttons in header */}
                            {/* <div className="flex items-center space-x-2 overflow-x-auto">
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
                                    </div> */}
                            {/* </div>
                            </header> */}
                        </div>


                    </header>
                    <div className="container mx-auto px-4">
                        {children}
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </ProgressBar>
    )
}

export default DashboardLayout