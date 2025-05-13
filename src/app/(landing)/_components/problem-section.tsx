'use client'

import { motion } from 'framer-motion'
import { Users, Globe, CreditCard } from 'lucide-react'

export function ProblemSection() {
    return (
        <section className="py-24 bg-white dark:bg-gray-900 flex items-center justify-center">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        2 Billion People Are Still Unbanked
                    </h2>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-3">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center p-6 bg-blue-50 dark:bg-gray-800 rounded-lg"
                    >
                        <Users className="h-12 w-12 text-blue-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Limited Access</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-center">
                            Traditional banking systems exclude billions, especially in informal economies and rural areas.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center p-6 bg-blue-50 dark:bg-gray-800 rounded-lg"
                    >
                        <Globe className="h-12 w-12 text-blue-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Global Challenge</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-center">
                            Financial exclusion affects economic growth and individual prosperity worldwide.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center p-6 bg-blue-50 dark:bg-gray-800 rounded-lg"
                    >
                        <CreditCard className="h-12 w-12 text-blue-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">High Barriers</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-center">
                            Complex requirements and high fees prevent many from accessing basic financial services.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 