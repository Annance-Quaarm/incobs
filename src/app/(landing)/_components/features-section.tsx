'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Wallet, Users, PiggyBank, Handshake, Fingerprint } from 'lucide-react'

const features = [
    {
        title: 'Individual & Group Wallets',
        description: 'Manage personal and shared finances with separate, secure wallets for different needs.',
        icon: Wallet,
    },
    {
        title: 'Single & Shared Payments',
        description: 'Make individual payments or set up recurring group payments with ease.',
        icon: Users,
    },
    {
        title: 'Community Savings Pools',
        description: 'Create and join savings groups with flexible contribution rules and automated tracking.',
        icon: PiggyBank,
    },
    {
        title: 'Micro-Crowdfunding Gateway',
        description: 'Launch and support community projects through transparent crowdfunding.',
        icon: Handshake,
    },
    {
        title: 'Financial Identity',
        description: 'Build your financial reputation through verified transactions and community trust.',
        icon: Fingerprint,
    },
]

export function FeaturesSection() {
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
                        Core Features
                    </h2>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <feature.icon className="h-6 w-6 text-gray-200" />
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
} 