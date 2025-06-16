import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Branding - Batam Creative Hub | Creative Space Brand Identity | Sparks Creative Universe',
  description: 'Pengembangan brand identity untuk pusat kreativitas terbesar di Batam. Tingkatkan brand awareness 250% dengan identitas visual yang modern dan inovatif.',
  openGraph: {
    title: 'Branding - Batam Creative Hub',
    description: 'Pengembangan brand identity untuk pusat kreativitas terbesar di Batam.',
    images: ['/portfolio/batam-creative.jpg'],
  },
}

const BatamCreativeHub = () => {
  return (
    <main className="min-h-screen bg-secondary">
      <Header />
      
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="relative h-[70vh] mb-16 rounded-2xl overflow-hidden">
            <Image
              src="/portfolio/batam-creative.jpg"
              alt="Batam Creative Hub - Pusat Kreativitas dengan Brand Identity Modern"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-secondary/50" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="max-w-4xl mx-auto">
                <span className="text-neon-purple font-medium mb-4 block tracking-wider uppercase text-sm">
                  Brand Identity & Strategy
                </span>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">
                  Batam Creative Hub
                </h1>
                <p className="text-xl text-gray-200 font-light">
                  Mengubah Ruang Kreatif Menjadi Destinasi Inspirasi dengan Brand Identity yang Memukau
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
                  Batam Creative Hub adalah pusat kreativitas terbesar di Batam yang membutuhkan identitas merek yang kuat untuk mencerminkan semangat inovasi dan kreativitas. Sebagai agensi branding, kami mengembangkan sistem identitas merek yang komprehensif yang mencakup visual design, brand strategy, dan implementasi digital.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  Proyek ini mencakup pengembangan logo, brand guidelines, visual identity, dan strategi komunikasi yang konsisten. Hasilnya, kami berhasil meningkatkan brand awareness sebesar 250% dan engagement di platform digital sebesar 180%.
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
                      <span className="text-gray-300">Menciptakan identitas yang mencerminkan semangat kreativitas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Mengembangkan sistem desain yang fleksibel untuk berbagai kebutuhan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Mengintegrasikan identitas merek di berbagai platform digital</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4">Solusi</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Pengembangan logo dan visual identity yang modern dan dinamis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Pembuatan brand guidelines yang komprehensif dan mudah diimplementasikan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Strategi komunikasi yang konsisten di semua platform</span>
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
                  <h3 className="text-xl font-display font-bold mb-4">Metrik Brand</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Peningkatan brand awareness sebesar 250%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Engagement rate meningkat 180%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Brand recall meningkat 200%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Sentiment positif meningkat 150%</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Dampak Bisnis</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Peningkatan jumlah member sebesar 120%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Pertumbuhan partnership sebesar 150%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Peningkatan event attendance sebesar 200%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-6">Layanan Branding</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Brand Strategy</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300">Brand Positioning</li>
                    <li className="text-gray-300">Brand Voice</li>
                    <li className="text-gray-300">Brand Architecture</li>
                  </ul>
                </div>
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Visual Identity</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300">Logo Design</li>
                    <li className="text-gray-300">Color Palette</li>
                    <li className="text-gray-300">Typography</li>
                  </ul>
                </div>
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Brand Guidelines</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300">Usage Guidelines</li>
                    <li className="text-gray-300">Design System</li>
                    <li className="text-gray-300">Implementation Guide</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Tools Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-6">Tools & Technology</h2>
              <div className="flex flex-wrap gap-3">
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Adobe Creative Suite
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Figma
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Brand Analytics
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Market Research
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Brand Monitoring
                </span>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <h2 className="text-3xl font-display font-bold mb-6">Siap Mengembangkan Brand Anda?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Mari kita diskusikan bagaimana strategi branding yang tepat dapat membantu mengembangkan identitas merek Anda.
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

export default BatamCreativeHub 