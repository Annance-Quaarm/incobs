import { Header } from "./_components/header";

// export const metadata = {
//   title: 'Incobs - Banking Without Banks',
//   description: 'A community-driven financial platform for the unbanked and sharing economy.',
// }

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="pt-16">
        {children}
      </main>
    </>
  )
}
