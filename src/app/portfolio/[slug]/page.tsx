import React from 'react'
import Header from '@/components/Header'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PortfolioContent } from './PortfolioContent'

// Import the portfolio items data
const portfolioItems = [
  {
    id: 1,
    slug: 'branding-social-media-batam-food-festival',
    title: 'Branding & Social Media - Batam Food Festival',
    category: 'Branding',
    image: '/portfolio/batam-food-fest.jpg',
    description: 'Pengembangan brand identity dan pengelolaan social media untuk festival kuliner terbesar di Batam.',
    services: ['Brand Identity', 'Social Media Management', 'Content Creation'],
    fullDescription: `Batam Food Festival adalah festival kuliner terbesar di Batam yang menghadirkan berbagai hidangan lokal dan internasional. Sebagai agensi kreatif, kami bertanggung jawab untuk mengembangkan identitas merek yang kuat dan mengelola kehadiran digital festival ini.

Proyek ini mencakup pengembangan logo, panduan merek, dan strategi konten yang komprehensif untuk platform media sosial. Kami berhasil meningkatkan engagement sebesar 200% dan mencapai lebih dari 50,000 pengunjung selama periode festival.`,
    results: [
      'Peningkatan engagement media sosial sebesar 200%',
      'Mencapai 50,000+ pengunjung festival',
      'Peningkatan brand awareness sebesar 150%',
      'Mendapatkan coverage media nasional'
    ],
    client: 'Batam Food Festival Committee',
    duration: '3 Bulan',
    tools: ['Adobe Creative Suite', 'Social Media Analytics', 'Content Calendar']
  },
  // ... Add similar detailed data for other portfolio items
]

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const portfolio = portfolioItems.find(item => item.slug === params.slug)
  
  if (!portfolio) {
    return {
      title: 'Portfolio Not Found',
      description: 'The requested portfolio item could not be found.'
    }
  }

  return {
    title: `${portfolio.title} | Sparks Creative Universe`,
    description: portfolio.description,
    openGraph: {
      title: portfolio.title,
      description: portfolio.description,
      images: [portfolio.image],
    },
  }
}

export default function PortfolioDetail({ params }: { params: { slug: string } }) {
  const project = portfolioItems.find(item => item.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-secondary">
      <Header />
      <PortfolioContent project={project} />
    </main>
  )
}