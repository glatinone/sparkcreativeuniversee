import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Social Media - Batam Fashion Week | Fashion Event Marketing | Sparks Creative Universe',
  description: 'Strategi social media untuk event fashion terbesar di Batam. Tingkatkan engagement 300% dan capai 2M+ reach dengan konten yang viral dan trendsetting.',
  openGraph: {
    title: 'Social Media - Batam Fashion Week',
    description: 'Strategi social media untuk event fashion terbesar di Batam.',
    images: ['/portfolio/batam-fashion.jpg'],
  },
}

const BatamFashion = () => {
  return (
    <main className="min-h-screen bg-secondary">
      <Header />
      
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="relative h-[70vh] mb-16 rounded-2xl overflow-hidden">
            <Image
              src="/portfolio/batam-fashion.jpg"
              alt="Batam Fashion Week - Event Fashion Terbesar dengan Strategi Social Media yang Viral"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-secondary/50" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="max-w-4xl mx-auto">
                <span className="text-neon-purple font-medium mb-4 block tracking-wider uppercase text-sm">
                  Social Media & Event Marketing
                </span>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">
                  Batam Fashion Week
                </h1>
                <p className="text-xl text-gray-200 font-light">
                  Mengubah Event Fashion Menjadi Trending Topic dengan Strategi Social Media yang Viral
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
                  Batam Fashion Week adalah event fashion terbesar di Batam yang membutuhkan strategi social media yang powerful untuk meningkatkan awareness dan engagement. Sebagai agensi social media, kami mengembangkan strategi konten yang menggabungkan trend fashion dengan storytelling yang menarik.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  Proyek ini mencakup pengelolaan social media, content creation, influencer marketing, dan live coverage event. Hasilnya, kami berhasil meningkatkan engagement sebesar 300% dan mencapai 2M+ reach di platform social media.
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
                      <span className="text-gray-300">Menciptakan konten yang viral dan trendsetting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Mengelola multiple platform social media secara real-time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Mengoptimalkan engagement di tengah persaingan konten fashion</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4">Solusi</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Pengembangan strategi konten multi-platform yang terintegrasi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Implementasi live streaming dan real-time content updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Kolaborasi strategis dengan fashion influencers dan brand</span>
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
                  <h3 className="text-xl font-display font-bold mb-4">Metrik Social Media</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Peningkatan engagement sebesar 300%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Total reach mencapai 2M+</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Pertumbuhan followers sebesar 150%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Viral content dengan 500K+ shares</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Dampak Event</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Peningkatan jumlah pengunjung sebesar 200%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Pertumbuhan sponsor sebesar 120%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Media coverage di 50+ platform</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-6">Layanan Social Media</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Content Strategy</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300">Platform Management</li>
                    <li className="text-gray-300">Content Calendar</li>
                    <li className="text-gray-300">Trend Analysis</li>
                  </ul>
                </div>
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Content Creation</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300">Photo & Video</li>
                    <li className="text-gray-300">Live Coverage</li>
                    <li className="text-gray-300">Story Creation</li>
                  </ul>
                </div>
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Community Management</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300">Engagement Strategy</li>
                    <li className="text-gray-300">Influencer Collaboration</li>
                    <li className="text-gray-300">Crisis Management</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Platforms Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-6">Platform & Tools</h2>
              <div className="flex flex-wrap gap-3">
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Instagram
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  TikTok
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  YouTube
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Hootsuite
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Canva Pro
                </span>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <h2 className="text-3xl font-display font-bold mb-6">Siap Mengoptimalkan Social Media Anda?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Mari kita diskusikan bagaimana strategi social media yang tepat dapat membantu meningkatkan brand awareness dan engagement Anda.
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

export default BatamFashion 