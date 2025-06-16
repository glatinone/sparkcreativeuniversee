'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    title: 'Cara Membangun Personal Brand yang Kuat di Era Digital',
    slug: 'personal-brand-digital-era',
    date: '1 April 2025',
    readTime: '15 menit baca',
    category: 'Personal Branding',
    description: 'Pelajari strategi dan tips untuk membangun personal brand yang memorable dan autentik di platform digital.',
    image: '/blog/images/personal-brand-digital-era/personal-brand.jpg',
    tags: ['Personal Branding', 'Digital Marketing', 'Social Media']
  },
  {
    title: 'Panduan Lengkap Membuat Konten Viral di Instagram',
    slug: 'konten-viral-instagram',
    date: '15 April 2025',
    readTime: '10 menit baca',
    category: 'Content Creation',
    description: 'Temukan formula rahasia untuk membuat konten yang viral dan meningkatkan engagement di Instagram.',
    image: '/blog/instagram-viral.jpg',
    tags: ['Instagram', 'Content Creation', 'Social Media']
  },
  {
    title: 'Strategi SEO untuk Meningkatkan Visibilitas Online',
    slug: 'strategi-seo-visibilitas',
    date: '1 Mei 2025',
    readTime: '12 menit baca',
    category: 'Digital Marketing',
    description: 'Optimalkan website dan konten Anda dengan teknik SEO terbaru untuk meningkatkan peringkat di mesin pencari.',
    image: '/blog/seo-strategy.jpg',
    tags: ['SEO', 'Digital Marketing', 'Web Optimization']
  },
  {
    title: 'Tips Fotografi Produk untuk E-commerce',
    slug: 'fotografi-produk-ecommerce',
    date: '15 Mei 2025',
    readTime: '6 menit baca',
    category: 'Photography',
    description: 'Pelajari teknik fotografi produk yang profesional untuk meningkatkan penjualan di platform e-commerce.',
    image: '/blog/product-photography.jpg',
    tags: ['Photography', 'E-commerce', 'Product Marketing']
  },
  {
    title: 'Cara Membuat Video Marketing yang Efektif',
    slug: 'video-marketing-efektif',
    date: '1 Juni 2025',
    readTime: '9 menit baca',
    category: 'Video Production',
    description: 'Temukan cara membuat video marketing yang menarik dan efektif untuk meningkatkan konversi.',
    image: '/blog/video-marketing.jpg',
    tags: ['Video Marketing', 'Content Creation', 'Digital Marketing']
  },
  {
    title: 'Strategi Social Media Marketing untuk Bisnis Lokal',
    slug: 'social-media-bisnis-lokal',
    date: '15 Juni 2025',
    readTime: '7 menit baca',
    category: 'Social Media',
    description: 'Pelajari cara mengoptimalkan social media untuk meningkatkan awareness bisnis lokal Anda.',
    image: '/blog/local-social-media.jpg',
    tags: ['Social Media', 'Local Business', 'Digital Marketing']
  }
]

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-neon-purple mb-8">
                Blog
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${post.slug}`} className="block group">
                      <article className="bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 group-hover:transform group-hover:scale-105">
                        <div className="relative aspect-video">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center space-x-4 text-gray-400 text-sm mb-3">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                            <span>•</span>
                            <span>{post.category}</span>
                          </div>
                          <h2 className="text-xl font-bold text-neon-purple mb-3 group-hover:text-neon-purple/80 transition-colors">
                            {post.title}
                          </h2>
                          <p className="text-gray-400 mb-4">
                            {post.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </article>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default BlogPage