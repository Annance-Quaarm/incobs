'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Wallet } from 'lucide-react'
import { BackgroundBeams } from '@/components/aceternity/background-beams'

export function HeroSection() {
    return (
        <>
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
                <BackgroundBeams />
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                                Banking Without Banks
                            </h1>

                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                Save, Pay, and Grow Together — A community-driven financial platform for the unbanked and sharing economy.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Button size="lg" className="gap-2">
                                Join the Mission
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                            <Button size="lg" variant="outline" className="gap-2">
                                See Demo
                                <Wallet className="h-4 w-4" />
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
} 