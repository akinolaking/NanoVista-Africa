import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "NanoVista Africa | Indestructible Children's Eyewear — Nigeria & West Africa",
  description:
    'NanoVista Africa is the official NanoVista franchise for Nigeria and West Africa. Stop replacing broken frames — discover indestructible, flexible eyewear for babies, children and teenagers aged 0 to 16.',
  keywords: [
    'children glasses Nigeria',
    'kids eyewear West Africa',
    'NanoVista Africa',
    'indestructible glasses children',
    'flexible kids frames Lagos Abuja Accra',
    'Siliflex children eyewear',
  ],
  openGraph: {
    title: "NanoVista Africa | Indestructible Children's Eyewear",
    description:
      "The only children's eyewear that bends, stretches and always comes back. Now available across Nigeria and West Africa.",
    url: 'https://nanovista.africa',
    siteName: 'NanoVista Africa',
    images: [{ url: '/images/slide-1-clip.jpg', width: 1920, height: 560 }],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "NanoVista Africa | Indestructible Children's Eyewear",
    description: "The only children's eyewear that bends, stretches and always comes back.",
    images: ['/images/slide-1-clip.jpg'],
  },
  icons: {
    icon: '/images/logo.svg',
    shortcut: '/images/logo.svg',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
