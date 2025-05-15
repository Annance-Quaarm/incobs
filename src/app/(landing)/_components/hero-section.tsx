'use client'

import { motion } from 'framer-motion'
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowRight, Wallet } from 'lucide-react'
import { BackgroundBeams } from '@/components/aceternity/background-beams'
import Link from 'next/link'

export function HeroSection() {
    return (
        <>
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(17,24,39,0.8)_0%,rgba(17,24,39,0)_100%)]" />
                <BackgroundBeams />
                <div className="container px-4 md:px-6 relative z-10">
                    <div className="flex flex-col items-center space-y-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="space-y-4"
                        >
                            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white">
                                Banking Without Banks
                            </h1>
                            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                            className="max-w-2xl"
                        >
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                Save, Pay, and Grow Together — A community-driven financial platform for the unbanked and sharing economy.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <Link href="/login" className={buttonVariants({ variant: "default", className: "gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-none shadow-lg hover:shadow-xl transition-all duration-300" })}>
                                Join today!
                                <ArrowRight className="h-4 w-4" />

                            </Link>
                            <Button
                                size="lg"
                                variant="outline"
                                className="gap-2 border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white transition-all duration-300"
                            >
                                See Demo
                                <Wallet className="h-4 w-4" />
                            </Button>
                        </motion.div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent" />
            </section>
        </>
    )
} 