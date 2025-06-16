import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Video Production - Batam Industrial Park | Corporate Video Production | Sparks Creative Universe',
  description: 'Produksi video korporat untuk kawasan industri terbesar di Batam. Tingkatkan brand awareness 200% dengan storytelling yang powerful dan visual yang memukau.',
  openGraph: {
    title: 'Video Production - Batam Industrial Park',
    description: 'Produksi video korporat untuk kawasan industri terbesar di Batam.',
    images: ['/portfolio/batam-industrial.jpg'],
  },
}

const BatamIndustrial = () => {
  return (
    <main className="min-h-screen bg-secondary">
      <Header />
      
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="relative h-[70vh] mb-16 rounded-2xl overflow-hidden">
            <Image
              src="/portfolio/batam-industrial.jpg"
              alt="Batam Industrial Park - Kawasan Industri Modern dengan Video Produksi Profesional"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-secondary/50" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="max-w-4xl mx-auto">
                <span className="text-neon-purple font-medium mb-4 block tracking-wider uppercase text-sm">
                  Video Production & Storytelling
                </span>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">
                  Batam Industrial Park
                </h1>
                <p className="text-xl text-gray-200 font-light">
                  Mengangkat Prestasi Industri Melalui Visual Storytelling yang Memukau
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
                  Batam Industrial Park adalah kawasan industri terbesar di Batam yang membutuhkan media visual untuk mengkomunikasikan nilai dan prestasi mereka. Sebagai agensi produksi video, kami menciptakan serangkaian video korporat yang menggabungkan storytelling yang powerful dengan visual yang memukau.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  Proyek ini mencakup produksi video company profile, testimonial, dan video dokumenter yang menampilkan inovasi dan keberlanjutan di kawasan industri. Hasilnya, kami berhasil meningkatkan brand awareness sebesar 200% dan engagement di platform digital sebesar 150%.
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
                      <span className="text-gray-300">Mengkomunikasikan kompleksitas industri dengan cara yang menarik</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Menangkap skala dan teknologi canggih dalam format video</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Mengelola produksi di lingkungan industri yang dinamis</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4">Solusi</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Pengembangan konsep storytelling yang human-centric</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Implementasi teknik cinematography dan drone footage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Penggunaan teknologi VR dan AR untuk visualisasi</span>
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
                  <h3 className="text-xl font-display font-bold mb-4">Metrik Digital</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Peningkatan brand awareness sebesar 200%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Engagement rate meningkat 150%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Video views mencapai 1M+</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Share rate meningkat 180%</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Dampak Bisnis</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Peningkatan investor interest sebesar 120%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Pertumbuhan tenant baru sebesar 80%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Peningkatan employee engagement sebesar 90%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-6">Layanan Produksi</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Pre-Production</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300">Concept Development</li>
                    <li className="text-gray-300">Script Writing</li>
                    <li className="text-gray-300">Storyboarding</li>
                  </ul>
                </div>
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Production</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300">Cinematography</li>
                    <li className="text-gray-300">Drone Footage</li>
                    <li className="text-gray-300">Interview Recording</li>
                  </ul>
                </div>
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Post-Production</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300">Video Editing</li>
                    <li className="text-gray-300">Color Grading</li>
                    <li className="text-gray-300">Motion Graphics</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Equipment Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-6">Equipment & Technology</h2>
              <div className="flex flex-wrap gap-3">
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  RED Komodo
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  DJI Inspire 2
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  DaVinci Resolve
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Adobe Creative Suite
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  VR/AR Technology
                </span>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <h2 className="text-3xl font-display font-bold mb-6">Siap Mengangkat Brand Anda Melalui Video?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Mari kita diskusikan bagaimana storytelling visual yang tepat dapat membantu mengkomunikasikan nilai brand Anda.
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

export default BatamIndustrial 