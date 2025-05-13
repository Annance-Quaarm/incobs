'use client'

import { motion } from 'framer-motion'
import { Users, Wallet, Shield, ArrowRight } from 'lucide-react'

export function SolutionSection() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Group-Powered Banking
                    </h2>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm"
                    >
                        <Users className="h-8 w-8 text-blue-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Community First</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Build financial trust through verified community groups and shared responsibility.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex flex-col p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm"
                    >
                        <Wallet className="h-8 w-8 text-blue-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Flexible Accounts</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Individual and group wallets with seamless integration between personal and shared finances.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-col p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm"
                    >
                        <ArrowRight className="h-8 w-8 text-blue-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Easy Payments</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Frictionless P2P, C2B, and B2C transactions with minimal fees and maximum convenience.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm"
                    >
                        <Shield className="h-8 w-8 text-blue-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Secure Identity</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Digital identity verification through community trust and blockchain technology.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 