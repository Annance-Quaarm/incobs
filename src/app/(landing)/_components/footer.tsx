'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Github, Twitter, Linkedin } from 'lucide-react'

const navigation = {
    main: [
        { name: 'About', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
        { name: 'Contact', href: '#' },
    ],
    social: [
        {
            name: 'GitHub',
            href: '#',
            icon: Github,
        },
        {
            name: 'Twitter',
            href: '#',
            icon: Twitter,
        },
        {
            name: 'LinkedIn',
            href: '#',
            icon: Linkedin,
        },
    ],
}

export function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                    {navigation.main.map((item) => (
                        <div key={item.name} className="pb-6">
                            <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                                {item.name}
                            </Link>
                        </div>
                    ))}
                </nav>
                <div className="mt-10 flex justify-center space-x-10">
                    {navigation.social.map((item) => (
                        <Button
                            key={item.name}
                            variant="ghost"
                            size="icon"
                            asChild
                        >
                            <Link href={item.href} className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                            </Link>
                        </Button>
                    ))}
                </div>
                <p className="mt-10 text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
                    &copy; {new Date().getFullYear()} MCBuse. All rights reserved.
                </p>
            </div>
        </footer>
    )
} 