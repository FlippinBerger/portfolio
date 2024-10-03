import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Local Beans',
  description: 'This is a page to show off a concept for a local coffee shop',
}

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <section className=''>{children}</section>
}
