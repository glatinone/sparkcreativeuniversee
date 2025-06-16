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
                <h1 className="text-4xl md:text-5xl font-bold text-neon-purple mb-4">
                  Strategi SEO untuk Meningkatkan Visibilitas Online
                </h1>
                <div className="flex items-center space-x-4 text-gray-400 mb-6">
                  <span>1 Mei 2025</span>
                  <span>•</span>
                  <span>12 menit baca</span>
                  <span>•</span>
                  <span>Digital Marketing</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm">
                    SEO
                  </span>
                  <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm">
                    Digital Marketing
                  </span>
                  <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm">
                    Web Optimization
                  </span>
                </div>
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
                <Image
                  src="/blog/seo-strategy.jpg"
                  alt="Strategi SEO"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-invert max-w-none">
                <blockquote>
                  "SEO bukan sekadar teknik, tapi investasi jangka panjang untuk membangun fondasi digital yang kuat."
                </blockquote>
                <p>
                  <strong>SEO</strong> adalah kunci utama untuk meningkatkan visibilitas online dan mendatangkan traffic organik berkualitas. Dengan algoritma mesin pencari yang terus berkembang, strategi SEO harus adaptif dan berbasis data.
                </p>
                <h2>Pilar Utama SEO Modern</h2>
                <ul>
                  <li><strong>On-Page SEO:</strong> Struktur konten, heading, meta, dan internal linking.</li>
                  <li><strong>Off-Page SEO:</strong> Backlink, social signals, dan brand mention.</li>
                  <li><strong>Technical SEO:</strong> Kecepatan, mobile-friendly, dan keamanan.</li>
                  <li><strong>Content Strategy:</strong> Riset keyword, konten relevan, dan update rutin.</li>
                </ul>
                <h2>Langkah Praktis Meningkatkan SEO</h2>
                <ol>
                  <li><strong>Audit Website</strong><br />Gunakan tools seperti Google Search Console dan Ahrefs untuk cek error dan peluang.</li>
                  <li><strong>Optimasi Konten</strong><br />Perbaiki struktur heading, tambahkan keyword secara natural, dan gunakan gambar dengan alt text.</li>
                  <li><strong>Bangun Backlink Berkualitas</strong><br />Kolaborasi dengan website lain, guest post, dan aktif di komunitas.</li>
                  <li><strong>Percepat Loading & Mobile Friendly</strong><br />Pastikan website cepat dan nyaman diakses di semua device.</li>
                  <li><strong>Update & Analisa Rutin</strong><br />Pantau performa, update konten lama, dan adaptasi dengan tren algoritma.</li>
                </ol>
                <div className="tips-box">
                  <b>Tips:</b> Fokus pada keyword long-tail dan konten yang menjawab pertanyaan spesifik audiens Anda.
                </div>
                <h2>Studi Kasus Singkat</h2>
                <p>
                  Banyak UMKM berhasil naik peringkat Google dengan konsisten update blog, optimasi Google Business Profile, dan aktif di komunitas online.
                </p>
                <h2>Kesimpulan</h2>
                <p>
                  SEO adalah proses berkelanjutan. Investasi waktu dan strategi yang tepat akan memberikan hasil jangka panjang untuk brand Anda.
                </p>
                <div className="mt-8 p-6 bg-gray-900 rounded-lg border border-neon-purple">
                  <h3 className="text-xl font-bold text-neon-purple mb-2">Action Plan</h3>
                  <ul>
                    <li>Lakukan audit SEO website Anda bulan ini.</li>
                    <li>Optimasi 3 konten lama dengan keyword baru.</li>
                    <li>Bangun 2 backlink dari website relevan.</li>
                    <li>Update Google Business Profile dan minta review pelanggan.</li>
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