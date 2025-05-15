'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Globe, Smartphone, Shield, Rocket } from 'lucide-react'

const milestones = [
    {
        title: 'Global Expansion',
        description: 'Extend our reach to underserved communities worldwide through strategic partnerships.',
        icon: Globe,
    },
    {
        title: 'Mobile Integration',
        description: 'Launch mobile apps with offline capabilities for areas with limited internet access.',
        icon: Smartphone,
    },
    {
        title: 'Enhanced Security',
        description: 'Implement advanced security features and decentralized identity solutions.',
        icon: Shield,
    },
    {
        title: 'Innovation Hub',
        description: 'Create an open platform for financial innovation and community-driven development.',
        icon: Rocket,
    },
]

export function VisionSection() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Beyond the Hackathon
                    </h2>
                    <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-[700px] mx-auto">
                        Our vision extends far beyond this prototype. We&apos;re building a comprehensive digital finance platform that empowers communities worldwide.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={milestone.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <milestone.icon className="h-6 w-6 text-gray-200" />
                                        {milestone.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        {milestone.description}
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