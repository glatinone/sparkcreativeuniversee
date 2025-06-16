import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Digital Marketing - Batam Tourism | Sparks Creative Universe',
  description: 'Strategi digital marketing untuk meningkatkan awareness destinasi wisata Batam. Tingkatkan traffic website 300% dan engagement social media 250%.',
  openGraph: {
    title: 'Digital Marketing - Batam Tourism',
    description: 'Strategi digital marketing untuk meningkatkan awareness destinasi wisata Batam.',
    images: ['/portfolio/batam-tourism.jpg'],
  },
}

const BatamTourism = () => {
  return (
    <main className="min-h-screen bg-secondary">
      <Header />
      
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="relative h-[70vh] mb-16 rounded-2xl overflow-hidden">
            <Image
              src="/portfolio/batam-tourism.jpg"
              alt="Batam Tourism - Destinasi Wisata Internasional"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-secondary/50" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="max-w-4xl mx-auto">
                <span className="text-neon-purple font-medium mb-4 block">
                  Digital Marketing
                </span>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                  Batam Tourism
                </h1>
                <p className="text-xl text-gray-200">
                  Mengubah Batam Menjadi Destinasi Wisata Internasional Melalui Strategi Digital yang Efektif
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
                  Batam Tourism adalah proyek strategis untuk meningkatkan awareness dan minat wisatawan terhadap destinasi wisata Batam. Sebagai agensi digital marketing, kami mengembangkan strategi komprehensif yang mencakup SEO, content marketing, dan social media management.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Melalui pendekatan data-driven dan kreativitas, kami berhasil meningkatkan traffic website sebesar 300% dan engagement social media sebesar 250% dalam waktu 6 bulan.
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
                      <span className="text-gray-300">Persaingan ketat dengan destinasi wisata populer lainnya</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Keterbatasan anggaran marketing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Perlu menjangkau pasar internasional</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4">Solusi</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Mengembangkan strategi content marketing yang fokus pada keunikan Batam</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Mengoptimalkan SEO untuk meningkatkan visibilitas organik</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Membuat kampanye social media yang engaging dan viral</span>
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
                      <span className="text-gray-300">Peningkatan traffic website sebesar 300%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Peningkatan engagement social media sebesar 250%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Peningkatan ranking keyword sebesar 200%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Peningkatan conversion rate sebesar 150%</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Dampak Bisnis</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Peningkatan jumlah wisatawan sebesar 80%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Pertumbuhan pendapatan sektor pariwisata sebesar 120%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Peningkatan jumlah hotel dan restoran baru</span>
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
                  <h3 className="text-xl font-display font-bold mb-4">SEO & Content</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300">Keyword Research</li>
                    <li className="text-gray-300">Content Strategy</li>
                    <li className="text-gray-300">Technical SEO</li>
                  </ul>
                </div>
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Social Media</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300">Content Creation</li>
                    <li className="text-gray-300">Community Management</li>
                    <li className="text-gray-300">Influencer Marketing</li>
                  </ul>
                </div>
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Analytics & Reporting</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300">Performance Tracking</li>
                    <li className="text-gray-300">Data Analysis</li>
                    <li className="text-gray-300">ROI Measurement</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Tools Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-6">Tools & Teknologi</h2>
              <div className="flex flex-wrap gap-3">
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Google Analytics
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  SEMrush
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Hootsuite
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Google Search Console
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Ahrefs
                </span>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <h2 className="text-3xl font-display font-bold mb-6">Siap Meningkatkan Kehadiran Digital Anda?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Mari kita diskusikan bagaimana strategi digital marketing yang tepat dapat membantu mengembangkan bisnis Anda.
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

export default BatamTourism 