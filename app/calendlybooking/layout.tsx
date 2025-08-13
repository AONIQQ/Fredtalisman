import React from 'react'

export const metadata = {
  title: 'Schedule a Free Consultation with Fred Talisman MFT',
  description: 'Book your free consultation with Fred Talisman MFT to save your relationship',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://fredtalisman.com'),
  openGraph: {
    title: 'Schedule a Free Consultation with Fred Talisman, MFT',
    description: 'Book your free consultation with Fred Talisman MFT to save your relationship',
    images: [
      {
        url: '/api/og/facebook',
        width: 1200,
        height: 630,
        alt: 'Fred Talisman MFT',
      },
    ],
  },
}

export default function BookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
} 