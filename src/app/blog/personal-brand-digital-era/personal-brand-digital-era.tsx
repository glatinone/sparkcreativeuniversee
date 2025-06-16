'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Image from 'next/image'

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-20">
        <article className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-neon-purple mb-4 gradient-text">
                  Cara Membangun Personal Brand yang Kuat di Era Digital
                </h1>
                <div className="flex items-center space-x-4 text-gray-400 mb-6">
                  <span>1 April 2025</span>
                  <span>•</span>
                  <span>15 menit baca</span>
                  <span>•</span>
                  <span>Personal Branding</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm">
                    Personal Branding
                  </span>
                  <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm">
                    Digital Marketing
                  </span>
                  <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm">
                    Social Media
                  </span>
                </div>
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
                <Image
                  src="/blog/images/personal-brand-digital-era/personal-brand.jpg"
                  alt="Personal Branding di Era Digital"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-invert max-w-none">
                <blockquote>
                  "Personal branding bukan sekadar tren, tapi kebutuhan utama untuk bertahan dan berkembang di era digital."
                </blockquote>
                <p>
                  <strong>Personal branding</strong> adalah investasi jangka panjang yang akan membedakan Anda dari kompetitor, membuka peluang baru, dan membangun kepercayaan audiens. Di era digital, personal brand Anda adalah identitas, reputasi, dan nilai yang Anda pancarkan ke dunia.
                </p>
                <h2>Kenapa Personal Brand Penting?</h2>
                <ul>
                  <li><strong>Meningkatkan kepercayaan</strong> di mata klien, rekan, dan audiens.</li>
                  <li><strong>Membuka peluang</strong> kolaborasi, pekerjaan, dan bisnis baru.</li>
                  <li><strong>Membedakan Anda</strong> dari kompetitor di bidang yang sama.</li>
                  <li><strong>Menguatkan reputasi</strong> dan positioning Anda di industri.</li>
                </ul>
                <h2>Langkah Praktis Membangun Personal Brand</h2>
                <ol>
                  <li><strong>Kenali Diri & Nilai Anda</strong><br />Refleksikan keunikan, keahlian, dan value yang ingin Anda tonjolkan.</li>
                  <li><strong>Bangun Citra Konsisten</strong><br />Gunakan foto profil, bio, dan tone komunikasi yang seragam di semua platform.</li>
                  <li><strong>Buat Konten Bernilai</strong><br />Bagikan insight, pengalaman, atau tips yang relevan dengan bidang Anda.</li>
                  <li><strong>Aktif Berjejaring</strong><br />Ikut komunitas, webinar, atau kolaborasi dengan profesional lain.</li>
                  <li><strong>Monitor & Adaptasi</strong><br />Evaluasi feedback, engagement, dan terus perbaiki strategi Anda.</li>
                </ol>
                <div className="tips-box">
                  <b>Tips:</b> Gunakan <i>LinkedIn</i> untuk membangun kredibilitas profesional, <i>Instagram</i> untuk visual storytelling, dan <i>website pribadi</i> sebagai pusat portofolio Anda.
                </div>
                <h2>Contoh Sukses Personal Branding</h2>
                <p>
                  Lihat bagaimana <strong>Najwa Shihab</strong> membangun personal brand sebagai jurnalis kritis, atau <strong>Raditya Dika</strong> sebagai kreator multi-platform. Mereka konsisten, otentik, dan selalu relevan dengan audiensnya.
                </p>
                <h2>Kesimpulan</h2>
                <p>
                  Personal branding adalah perjalanan yang membutuhkan konsistensi, keberanian, dan keotentikan. Mulailah dari langkah kecil, konsisten, dan jangan takut untuk menunjukkan keunikan Anda. <strong>Jadilah versi terbaik dari diri Anda di dunia digital!</strong>
                </p>
                <div className="mt-8 p-6 bg-gray-900 rounded-lg border border-neon-purple">
                  <h3 className="text-xl font-bold text-neon-purple mb-2">Action Plan</h3>
                  <ul>
                    <li>Audit profil digital Anda hari ini.</li>
                    <li>Tentukan 3 nilai utama yang ingin Anda tonjolkan.</li>
                    <li>Buat 1 konten orisinal minggu ini di platform pilihan Anda.</li>
                    <li>Jalin koneksi baru dengan profesional di bidang Anda.</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </article>
      </main>
    </div>
  )
}

export default BlogPost 