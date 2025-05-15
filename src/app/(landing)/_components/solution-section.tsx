'use client'

import { motion } from 'framer-motion'
import { Users, Wallet, Shield, ArrowRight } from 'lucide-react'

export function SolutionSection() {
    return (
        <section className="py-32 bg-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(17,24,39,0.8)_0%,rgba(17,24,39,0)_100%)]" />
            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white mb-6">
                        Group-Powered Banking
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-8" />
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="group flex flex-col p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-gray-600 transition-all duration-300"
                    >
                        <div className="p-4 bg-purple-500/10 rounded-full mb-6 group-hover:bg-purple-500/20 transition-all duration-300">
                            <Users className="h-8 w-8 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Community First</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Build financial trust through verified community groups and shared responsibility.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="group flex flex-col p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-gray-600 transition-all duration-300"
                    >
                        <div className="p-4 bg-indigo-500/10 rounded-full mb-6 group-hover:bg-indigo-500/20 transition-all duration-300">
                            <Wallet className="h-8 w-8 text-indigo-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Flexible Accounts</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Individual and group wallets with seamless integration between personal and shared finances.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="group flex flex-col p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-gray-600 transition-all duration-300"
                    >
                        <div className="p-4 bg-teal-500/10 rounded-full mb-6 group-hover:bg-teal-500/20 transition-all duration-300">
                            <ArrowRight className="h-8 w-8 text-teal-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Easy Payments</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Frictionless P2P, C2B, and B2C transactions with minimal fees and maximum convenience.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="group flex flex-col p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl hover:border-gray-600 transition-all duration-300"
                    >
                        <div className="p-4 bg-purple-500/10 rounded-full mb-6 group-hover:bg-purple-500/20 transition-all duration-300">
                            <Shield className="h-8 w-8 text-purple-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Secure Identity</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Digital identity verification through community trust and blockchain technology.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 