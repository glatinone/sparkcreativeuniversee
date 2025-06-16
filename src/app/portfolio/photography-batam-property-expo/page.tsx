import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Photography - Batam Property Expo | Real Estate Photography | Sparks Creative Universe',
  description: 'Dokumentasi dan fotografi profesional untuk pameran properti terbesar di Batam. Tingkatkan engagement 200% dengan visual yang memukau dan storytelling yang powerful.',
  openGraph: {
    title: 'Photography - Batam Property Expo',
    description: 'Dokumentasi dan fotografi profesional untuk pameran properti terbesar di Batam.',
    images: ['/portfolio/batam-property.jpg'],
  },
}

const BatamProperty = () => {
  return (
    <main className="min-h-screen bg-secondary">
      <Header />
      
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="relative h-[70vh] mb-16 rounded-2xl overflow-hidden">
            <Image
              src="/portfolio/batam-property.jpg"
              alt="Batam Property Expo - Pameran Properti dengan Dokumentasi Visual Profesional"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-secondary/50" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="max-w-4xl mx-auto">
                <span className="text-neon-purple font-medium mb-4 block tracking-wider uppercase text-sm">
                  Event & Product Photography
                </span>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">
                  Batam Property Expo
                </h1>
                <p className="text-xl text-gray-200 font-light">
                  Mengabadikan Momen Berharga dengan Visual Storytelling yang Memukau
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
                  Batam Property Expo adalah pameran properti terbesar di Batam yang membutuhkan dokumentasi visual yang profesional untuk menampilkan properti dan event secara menarik. Sebagai agensi fotografi, kami menyediakan layanan fotografi komprehensif yang mencakup event coverage, product photography, dan aerial shots.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  Proyek ini mencakup dokumentasi lengkap event, fotografi properti, dan visual storytelling yang menarik. Hasilnya, kami berhasil meningkatkan engagement sebesar 200% dan membantu meningkatkan penjualan properti sebesar 150%.
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
                      <span className="text-gray-300">Menangkap momen penting dalam event yang dinamis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Mengoptimalkan pencahayaan untuk setiap properti</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Mengelola multiple shooting locations secara efisien</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4">Solusi</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Implementasi teknik HDR dan lighting setup profesional</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Penggunaan drone untuk aerial photography</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Tim fotografer terlatih dengan peralatan canggih</span>
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
                  <h3 className="text-xl font-display font-bold mb-4">Metrik Visual</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">2000+ foto berkualitas tinggi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">50+ aerial shots</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">100% properti terfoto</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Coverage 24/7 selama event</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Dampak Bisnis</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Peningkatan engagement sebesar 200%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Peningkatan penjualan properti 150%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Pertumbuhan leads sebesar 180%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-6">Layanan Fotografi</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Event Coverage</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300">Opening Ceremony</li>
                    <li className="text-gray-300">Seminar & Workshop</li>
                    <li className="text-gray-300">Networking Session</li>
                  </ul>
                </div>
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Product Photography</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300">Property Showcase</li>
                    <li className="text-gray-300">Interior & Exterior</li>
                    <li className="text-gray-300">Virtual Tour</li>
                  </ul>
                </div>
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Aerial Photography</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300">Drone Shots</li>
                    <li className="text-gray-300">Location Overview</li>
                    <li className="text-gray-300">360° Panorama</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Equipment Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-6">Equipment & Technology</h2>
              <div className="flex flex-wrap gap-3">
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Canon EOS R5
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  DJI Mavic 3 Pro
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Profoto Lighting
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Adobe Lightroom
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Adobe Photoshop
                </span>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <h2 className="text-3xl font-display font-bold mb-6">Siap Mengabadikan Momen Berharga Anda?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Mari kita diskusikan bagaimana fotografi profesional dapat membantu mengoptimalkan visual brand Anda.
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

export default BatamProperty 