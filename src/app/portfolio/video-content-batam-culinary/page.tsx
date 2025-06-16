import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Video Content - Batam Culinary Festival | Food Video Production | Sparks Creative Universe',
  description: 'Video content yang memukau untuk festival kuliner terbesar di Batam. Tingkatkan engagement 300% dengan storytelling visual yang menggugah selera.',
  openGraph: {
    title: 'Video Content - Batam Culinary Festival',
    description: 'Video content yang memukau untuk festival kuliner terbesar di Batam.',
    images: ['/portfolio/batam-culinary.jpg'],
  },
}

const BatamCulinary = () => {
  return (
    <main className="min-h-screen bg-secondary">
      <Header />
      
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="relative h-[70vh] mb-16 rounded-2xl overflow-hidden">
            <Image
              src="/portfolio/batam-culinary.jpg"
              alt="Batam Culinary Festival - Video Content yang Memukau"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-secondary/50" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="max-w-4xl mx-auto">
                <span className="text-neon-purple font-medium mb-4 block tracking-wider uppercase text-sm">
                  Video Content Production
                </span>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">
                  Batam Culinary Festival
                </h1>
                <p className="text-xl text-gray-200 font-light">
                  Menggugah Selera dengan Visual Storytelling yang Memukau
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-4xl mx-auto">
            {/* Overview Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-6">Tentang Proyek</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  Batam Culinary Festival adalah festival kuliner terbesar di Batam yang membutuhkan video content yang menarik untuk mempromosikan event dan kuliner lokal. Sebagai agensi video production, kami menyediakan layanan video content yang komprehensif termasuk food videography, event coverage, dan social media content.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  Proyek ini mencakup pembuatan berbagai jenis video content, dari behind-the-scenes hingga highlight reels. Hasilnya, kami berhasil meningkatkan engagement sebesar 300% dan membantu meningkatkan jumlah pengunjung event sebesar 250%.
                </p>
              </div>
            </section>

            {/* Challenge & Solution Section */}
            <section className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4">Tantangan</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Menangkap estetika makanan dengan sempurna</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Mengelola multiple shooting locations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Mengoptimalkan lighting untuk setiap lokasi</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4">Solusi</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Implementasi teknik food videography profesional</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Penggunaan lighting setup khusus makanan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Tim produksi terlatih dengan peralatan canggih</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Results Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-6">Hasil & Pencapaian</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Metrik Konten</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">50+ video content</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">100+ food videography shots</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Coverage 24/7 selama event</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">5 highlight reels</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Dampak Bisnis</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Peningkatan engagement sebesar 300%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Peningkatan pengunjung event 250%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Pertumbuhan followers sebesar 200%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-6">Layanan Video Content</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Food Videography</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300">Food Showcase</li>
                    <li className="text-gray-300">Cooking Process</li>
                    <li className="text-gray-300">Chef Interviews</li>
                  </ul>
                </div>
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Event Coverage</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300">Opening Ceremony</li>
                    <li className="text-gray-300">Cooking Demo</li>
                    <li className="text-gray-300">Behind the Scenes</li>
                  </ul>
                </div>
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Social Media Content</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300">Reels & Stories</li>
                    <li className="text-gray-300">Highlight Reels</li>
                    <li className="text-gray-300">Teaser Videos</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Equipment Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-6">Equipment & Technology</h2>
              <div className="flex flex-wrap gap-3">
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Sony A7S III
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  DJI RS 3 Pro
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Aputure Lighting
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Adobe Premiere Pro
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  DaVinci Resolve
                </span>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <h2 className="text-3xl font-display font-bold mb-6">Siap Menggugah Selera dengan Video Content?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Mari kita diskusikan bagaimana video content dapat membantu mengoptimalkan visual brand Anda.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-neon-purple text-white px-8 py-4 rounded-full font-medium hover:bg-neon-purple/90 transition-colors"
              >
                Konsultasi Proyek Anda
              </Link>
            </section>
          </div>
        </div>
      </article>
    </main>
  )
}

export default BatamCulinary 