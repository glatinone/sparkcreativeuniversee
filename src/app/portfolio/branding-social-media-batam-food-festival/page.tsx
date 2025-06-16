import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Branding & Social Media - Batam Food Festival | Sparks Creative Universe',
  description: 'Pengembangan brand identity dan pengelolaan social media untuk festival kuliner terbesar di Batam. Tingkatkan engagement 200% dan capai 50,000+ pengunjung.',
  openGraph: {
    title: 'Branding & Social Media - Batam Food Festival',
    description: 'Pengembangan brand identity dan pengelolaan social media untuk festival kuliner terbesar di Batam.',
    images: ['/portfolio/images/batam-food-fest.jpg.jpg'],
  },
}

const BatamFoodFestival = () => {
  return (
    <main className="min-h-screen bg-secondary">
      <Header />
      
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="relative h-[70vh] mb-16 rounded-2xl overflow-hidden">
            <Image
              src="/portfolio/images/batam-food-fest.jpg.jpg"
              alt="Batam Food Festival - Festival Kuliner Terbesar di Batam"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-secondary/50" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="max-w-4xl mx-auto">
                <span className="text-neon-purple font-medium mb-4 block">
                  Branding & Social Media
                </span>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                  Batam Food Festival
                </h1>
                <p className="text-xl text-gray-200">
                  Mengubah Festival Kuliner Terbesar di Batam Menjadi Destinasi Kuliner yang Mendunia
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
                <p className="text-gray-300 leading-relaxed mb-6">
                  Batam Food Festival adalah festival kuliner terbesar di Batam yang menghadirkan berbagai hidangan lokal dan internasional. Sebagai agensi kreatif, kami bertanggung jawab untuk mengembangkan identitas merek yang kuat dan mengelola kehadiran digital festival ini.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Proyek ini mencakup pengembangan logo, panduan merek, dan strategi konten yang komprehensif untuk platform media sosial. Kami berhasil meningkatkan engagement sebesar 200% dan mencapai lebih dari 50,000 pengunjung selama periode festival.
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
                      <span className="text-gray-300">Membuat festival kuliner lokal menjadi menarik bagi wisatawan internasional</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Mengelola konten untuk berbagai platform media sosial secara konsisten</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Menciptakan identitas merek yang mencerminkan keunikan kuliner Batam</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4">Solusi</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Mengembangkan strategi konten multibahasa untuk target pasar internasional</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Membuat sistem manajemen konten yang efisien dengan kalender konten terintegrasi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Merancang identitas merek yang menggabungkan elemen lokal dengan desain modern</span>
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
                  <h3 className="text-xl font-display font-bold mb-4">Metrik Kinerja</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Peningkatan engagement media sosial sebesar 200%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Mencapai 50,000+ pengunjung festival</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Peningkatan brand awareness sebesar 150%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Mendapatkan coverage media nasional</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Dampak Bisnis</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Peningkatan jumlah vendor sebesar 75%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Pertumbuhan pendapatan sponsor sebesar 120%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Ekspansi ke 3 kota baru di tahun berikutnya</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-6">Layanan yang Diberikan</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Brand Identity</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300">Logo Design</li>
                    <li className="text-gray-300">Brand Guidelines</li>
                    <li className="text-gray-300">Visual Identity</li>
                  </ul>
                </div>
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Social Media Management</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300">Content Strategy</li>
                    <li className="text-gray-300">Community Management</li>
                    <li className="text-gray-300">Performance Analytics</li>
                  </ul>
                </div>
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Content Creation</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300">Photography</li>
                    <li className="text-gray-300">Videography</li>
                    <li className="text-gray-300">Copywriting</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Tools Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-6">Tools & Teknologi</h2>
              <div className="flex flex-wrap gap-3">
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Adobe Creative Suite
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Social Media Analytics
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Content Calendar
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Canva Pro
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Buffer
                </span>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <h2 className="text-3xl font-display font-bold mb-6">Siap Mengembangkan Brand Anda?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Mari kita diskusikan bagaimana kami dapat membantu mengembangkan brand dan kehadiran digital Anda ke level berikutnya.
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

export default BatamFoodFestival 