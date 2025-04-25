import { ReactQueryProvider } from '../react-query-provider'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'

export const metadata = {
  title: 'Incobs - Banking Without Banks',
  description: 'A community-driven financial platform for the unbanked and sharing economy.',
}

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <ThemeToggle />
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
