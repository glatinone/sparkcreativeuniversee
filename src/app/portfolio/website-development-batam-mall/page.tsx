import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Website Development - Batam Mall | Modern E-commerce Platform | Sparks Creative Universe',
  description: 'Pengembangan website modern untuk pusat perbelanjaan terbesar di Batam. Tingkatkan konversi 180% dengan platform e-commerce yang responsif dan user-friendly.',
  openGraph: {
    title: 'Website Development - Batam Mall',
    description: 'Pengembangan website modern untuk pusat perbelanjaan terbesar di Batam.',
    images: ['/portfolio/batam-mall.jpg'],
  },
}

const BatamMall = () => {
  return (
    <main className="min-h-screen bg-secondary">
      <Header />
      
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="relative h-[70vh] mb-16 rounded-2xl overflow-hidden">
            <Image
              src="/portfolio/batam-mall.jpg"
              alt="Batam Mall - Pusat Perbelanjaan Modern dengan Platform Digital Terintegrasi"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-secondary/50" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="max-w-4xl mx-auto">
                <span className="text-neon-purple font-medium mb-4 block tracking-wider uppercase text-sm">
                  Web Development & E-commerce
                </span>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight">
                  Batam Mall
                </h1>
                <p className="text-xl text-gray-200 font-light">
                  Mengubah Pengalaman Berbelanja Digital dengan Platform E-commerce Modern
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
                  Batam Mall adalah pusat perbelanjaan terbesar di Batam yang membutuhkan transformasi digital untuk meningkatkan pengalaman berbelanja pelanggan. Sebagai agensi pengembangan web, kami menciptakan platform e-commerce modern yang mengintegrasikan teknologi terkini dengan kebutuhan bisnis.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  Proyek ini mencakup pengembangan website responsif, sistem manajemen konten, integrasi pembayaran, dan fitur-fitur inovatif yang meningkatkan engagement pengguna. Hasilnya, kami berhasil meningkatkan konversi sebesar 180% dan mengurangi bounce rate hingga 40%.
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
                      <span className="text-gray-300">Mengintegrasikan sistem pembayaran yang aman dan efisien</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Mengelola katalog produk yang besar dan dinamis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Mengoptimalkan performa website untuk traffic tinggi</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4">Solusi</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Implementasi sistem pembayaran multi-gateway dengan enkripsi end-to-end</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Pengembangan CMS custom dengan fitur manajemen produk canggih</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Optimasi performa dengan CDN dan caching yang efisien</span>
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
                  <h3 className="text-xl font-display font-bold mb-4">Metrik Teknis</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Waktu loading halaman berkurang 60%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Uptime server mencapai 99.99%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Skor performa Google PageSpeed 95+</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Keamanan website terverifikasi PCI DSS</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Dampak Bisnis</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Peningkatan konversi sebesar 180%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Pertumbuhan pendapatan online sebesar 250%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neon-purple mr-2">•</span>
                      <span className="text-gray-300">Pengurangan biaya operasional sebesar 40%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-6">Fitur Utama</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">E-commerce</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300">Multi-vendor Marketplace</li>
                    <li className="text-gray-300">Sistem Pembayaran Terintegrasi</li>
                    <li className="text-gray-300">Manajemen Stok Real-time</li>
                  </ul>
                </div>
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">User Experience</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300">UI/UX Modern & Responsif</li>
                    <li className="text-gray-300">Personalized Recommendations</li>
                    <li className="text-gray-300">Live Chat Support</li>
                  </ul>
                </div>
                <div className="bg-secondary-light p-6 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-4">Analytics & Security</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300">Real-time Analytics Dashboard</li>
                    <li className="text-gray-300">SSL Encryption</li>
                    <li className="text-gray-300">Fraud Detection System</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Tech Stack Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-6">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Next.js
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  TypeScript
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Tailwind CSS
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  PostgreSQL
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  AWS
                </span>
                <span className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full">
                  Stripe
                </span>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <h2 className="text-3xl font-display font-bold mb-6">Siap Mengembangkan Platform Digital Anda?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Mari kita diskusikan bagaimana solusi teknologi yang tepat dapat membantu mengembangkan bisnis Anda ke level berikutnya.
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

export default BatamMall 