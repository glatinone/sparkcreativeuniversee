'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import { motion } from 'framer-motion'

const portfolioItems = [
  {
    id: 1,
    slug: 'branding-social-media-batam-food-festival',
    title: 'Branding & Social Media - Batam Food Festival',
    category: 'Branding',
    image: '/portfolio/images/batam-food-fest.jpg.jpg',
    description: 'Pengembangan brand identity dan pengelolaan social media untuk festival kuliner terbesar di Batam.',
    services: ['Brand Identity', 'Social Media Management', 'Content Creation']
  },
  {
    id: 2,
    slug: 'digital-marketing-batam-tourism',
    title: 'Digital Marketing - Batam Tourism',
    category: 'Digital Marketing',
    image: '/portfolio/batam-tourism.jpg',
    description: 'Strategi digital marketing untuk meningkatkan awareness destinasi wisata Batam.',
    services: ['Content Strategy', 'Social Media', 'SEO']
  },
  {
    id: 3,
    slug: 'website-development-batam-mall',
    title: 'Website Development - Batam Mall',
    category: 'Web Development',
    image: '/portfolio/batam-mall.jpg',
    description: 'Pengembangan website modern untuk pusat perbelanjaan terbesar di Batam.',
    services: ['Web Design', 'E-commerce', 'UI/UX']
  },
  {
    id: 4,
    slug: 'video-production-batam-industrial-park',
    title: 'Video Production - Batam Industrial Park',
    category: 'Video Production',
    image: '/portfolio/industrial-park.jpg',
    description: 'Pembuatan video promosi untuk kawasan industri Batam.',
    services: ['Video Production', 'Drone Photography', 'Motion Graphics']
  },
  {
    id: 5,
    slug: 'social-media-batam-fashion-week',
    title: 'Social Media - Batam Fashion Week',
    category: 'Social Media',
    image: '/portfolio/fashion-week.jpg',
    description: 'Pengelolaan social media dan content creation untuk event fashion terbesar di Batam.',
    services: ['Social Media', 'Content Creation', 'Event Coverage']
  },
  {
    id: 6,
    slug: 'branding-batam-creative-hub',
    title: 'Branding - Batam Creative Hub',
    category: 'Branding',
    image: '/portfolio/creative-hub.jpg',
    description: 'Pengembangan brand identity untuk pusat kreativitas di Batam.',
    services: ['Brand Identity', 'Visual Design', 'Brand Strategy']
  },
  {
    id: 7,
    slug: 'digital-campaign-batam-startup-week',
    title: 'Digital Campaign - Batam Startup Week',
    category: 'Digital Marketing',
    image: '/portfolio/startup-week.jpg',
    description: 'Kampanye digital untuk event startup terbesar di Batam.',
    services: ['Digital Campaign', 'Social Media', 'Content Strategy']
  },
  {
    id: 8,
    slug: 'photography-batam-property-expo',
    title: 'Photography - Batam Property Expo',
    category: 'Photography',
    image: '/portfolio/property-expo.jpg',
    description: 'Dokumentasi dan fotografi untuk pameran properti terbesar di Batam.',
    services: ['Event Photography', 'Product Photography', 'Drone Shots']
  },
  {
    id: 9,
    slug: 'video-content-batam-culinary',
    title: 'Video Content - Batam Culinary Festival',
    category: 'Video Production',
    image: '/portfolio/culinary-fest.jpg',
    description: 'Pembuatan konten video untuk festival kuliner Batam.',
    services: ['Video Production', 'Food Photography', 'Social Media']
  }
]

const PortfolioPage = () => {
  return (
    <main className="min-h-screen bg-secondary">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Portofolio Kami
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Beberapa proyek terbaik kami yang telah membantu brand berkembang di era digital.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary-light rounded-lg overflow-hidden group hover:bg-secondary-lighter transition-colors"
              >
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-sm text-neon-purple font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <Link href={`/portfolio/${item.slug}`}>
                    <h2 className="text-xl font-display font-bold mb-3 group-hover:text-neon-purple transition-colors">
                      {item.title}
                    </h2>
                  </Link>
                  <p className="text-gray-300 mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="text-sm bg-neon-purple/10 text-neon-purple px-3 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default PortfolioPage 