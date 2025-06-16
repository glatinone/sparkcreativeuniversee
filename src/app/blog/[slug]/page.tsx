'use client'

import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Image from 'next/image'
import { useParams } from 'next/navigation'

// This would typically come from a database or CMS
const blogPosts = {
  'post-1': {
    title: 'Blog Post 1',
    date: 'March 15, 2024',
    author: 'Author Name',
    category: 'Technology',
    content: `
      <p>This is the main content of the blog post. It can include multiple paragraphs and rich text formatting.</p>
      <h2>Subheading</h2>
      <p>More content here...</p>
    `,
    image: '/blog/post1.jpg',
    tags: ['Web Development', 'React', 'Next.js'],
    relatedPosts: [
      {
        title: 'Related Post 1',
        slug: 'related-post-1',
        image: '/blog/related1.jpg'
      },
      {
        title: 'Related Post 2',
        slug: 'related-post-2',
        image: '/blog/related2.jpg'
      }
    ]
  },
  // Add more blog posts here
}

// Dynamic import of blog post components
const blogComponents: { [key: string]: React.LazyExoticComponent<React.ComponentType<any>> } = {
  'personal-brand-digital-era': React.lazy(() => import('@/app/blog/personal-brand-digital-era/personal-brand-digital-era')),
  'konten-viral-instagram': React.lazy(() => import('@/app/blog/konten-viral-instagram/konten-viral-instagram')),
  'strategi-seo-visibilitas': React.lazy(() => import('@/app/blog/strategi-seo-visibilitas/strategi-seo-visibilitas')),
  'fotografi-produk-ecommerce': React.lazy(() => import('@/app/blog/fotografi-produk-ecommerce/fotografi-produk-ecommerce')),
  'video-marketing-efektif': React.lazy(() => import('@/app/blog/video-marketing-efektif/video-marketing-efektif')),
  'social-media-bisnis-lokal': React.lazy(() => import('@/app/blog/social-media-bisnis-lokal/social-media-bisnis-lokal')),
}

const BlogPost = () => {
  const params = useParams()
  const slug = params.slug as string

  const SpecificBlogPost = blogComponents[slug]

  if (!SpecificBlogPost) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neon-purple">Post Not Found</h1>
            <p className="text-gray-400 mt-4">Maaf, artikel yang Anda cari tidak ditemukan.</p>
          </div>
        </main>
      </div>
    )
  }

  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-neon-purple text-xl">Loading Content...</p>
      </div>
    }>
      <SpecificBlogPost />
    </Suspense>
  )
}

export default BlogPost