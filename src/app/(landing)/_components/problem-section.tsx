'use client'

import { motion } from 'framer-motion'
import { Users, Globe, CreditCard } from 'lucide-react'

export function ProblemSection() {
    return (
        <section className="py-32 bg-gray-950 relative overflow-hidden">
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
                        2 Billion People Are Still Unbanked
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-8" />
                </motion.div>

                <div className="grid gap-8 md:grid-cols-3">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="group flex flex-col items-center p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-gray-700 transition-all duration-300"
                    >
                        <div className="p-4 bg-purple-500/10 rounded-full mb-6 group-hover:bg-purple-500/20 transition-all duration-300">
                            <Users className="h-12 w-12 text-purple-400" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-white">Limited Access</h3>
                        <p className="text-gray-400 text-center leading-relaxed">
                            Traditional banking systems exclude billions, especially in informal economies and rural areas.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="group flex flex-col items-center p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-gray-700 transition-all duration-300"
                    >
                        <div className="p-4 bg-indigo-500/10 rounded-full mb-6 group-hover:bg-indigo-500/20 transition-all duration-300">
                            <Globe className="h-12 w-12 text-indigo-400" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-white">Global Challenge</h3>
                        <p className="text-gray-400 text-center leading-relaxed">
                            Financial exclusion affects economic growth and individual prosperity worldwide.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="group flex flex-col items-center p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-gray-700 transition-all duration-300"
                    >
                        <div className="p-4 bg-teal-500/10 rounded-full mb-6 group-hover:bg-teal-500/20 transition-all duration-300">
                            <CreditCard className="h-12 w-12 text-teal-400" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-white">High Barriers</h3>
                        <p className="text-gray-400 text-center leading-relaxed">
                            Complex requirements and high fees prevent many from accessing basic financial services.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 