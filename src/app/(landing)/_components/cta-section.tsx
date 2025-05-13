'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'

export function CTASection() {
    return (
        <section className="py-24 bg-blue-600 dark:bg-blue-900 flex items-center justify-center">   
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                        Build With Us
                    </h2>
                    <p className="mt-4 text-xl text-blue-100 max-w-[700px] mx-auto">
                        Join our mission to create a more inclusive financial future. Whether you&apos;re a developer, partner, or supporter, we&apos;d love to hear from you.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="max-w-md mx-auto"
                >
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                            />
                        </div>
                        <Button size="lg" className="gap-2">
                            Join the Waitlist
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>
                    <p className="mt-4 text-sm text-blue-100 text-center">
                        By joining, you agree to our Privacy Policy and Terms of Service.
                    </p>
                </motion.div>
            </div>
        </section>
    )
} 