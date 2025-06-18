import React from 'react'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Sora } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})
const sora = Sora({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-sora',
})

export const metadata: Metadata = {
  title: 'SPARKS CREATIVE UNIVERSE - Digital Agency',
  description: 'Membangun Branding yang Memukau, Menghadirkan Solusi Digital yang Menginspirasi.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable} ${sora.variable}`}>
      <body className="font-sans bg-black text-white">
        {children}
        <WhatsAppButton />
        <footer className="py-6 text-center text-gray-400 border-t border-neon-purple/20">
          <p>Developed by @Nova</p>
        </footer>
      </body>
    </html>
  )
} 