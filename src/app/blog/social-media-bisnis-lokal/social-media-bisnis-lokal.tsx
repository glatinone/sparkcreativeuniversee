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
                  Strategi Social Media Marketing untuk Bisnis Lokal
                </h1>
                <div className="flex items-center space-x-4 text-gray-400 mb-6">
                  <span>15 Juni 2025</span>
                  <span>•</span>
                  <span>7 menit baca</span>
                  <span>•</span>
                  <span>Social Media</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm">
                    Social Media
                  </span>
                  <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm">
                    Local Business
                  </span>
                  <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm">
                    Digital Marketing
                  </span>
                </div>
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
                <Image
                  src="/blog/local-social-media.jpg"
                  alt="Social Media Marketing untuk Bisnis Lokal"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-invert max-w-none">
                <blockquote>
                  "Social media bukan sekadar tren, tapi suara dan etalase digital bagi bisnis lokal. Manfaatkan untuk terhubung lebih dekat dengan komunitas."
                </blockquote>
                <p>
                  Bagi <strong>bisnis lokal</strong>, media sosial adalah jembatan emas untuk terhubung dengan pelanggan dan memperluas jangkauan. Dengan strategi yang tepat, Anda bisa membangun komunitas loyal, meningkatkan kunjungan, dan tentu saja, mendorong penjualan. Mari kita pelajari bagaimana mengoptimalkan social media marketing untuk bisnis Anda.
                </p>
                <h2>Pentingnya Social Media untuk Bisnis Lokal</h2>
                <ul>
                  <li><strong>Visibilitas Lokal:</strong> Mempermudah pelanggan menemukan Anda di area sekitar.</li>
                  <li><strong>Membangun Komunitas:</strong> Berinteraksi langsung dengan pelanggan dan calon pelanggan.</li>
                  <li><strong>Promosi Efektif:</strong> Iklan bertarget yang menjangkau audiens spesifik.</li>
                  <li><strong>Umpan Balik Instan:</strong> Mendapatkan review dan insight dari pelanggan.</li>
                  <li><strong>Brand Storytelling:</strong> Menceritakan kisah unik bisnis Anda secara visual dan personal.</li>
                </ul>
                <h2>Pilihan Platform Terbaik</h2>
                <ol>
                  <li><strong>Facebook:</strong> Ideal untuk membangun komunitas, event, dan iklan bertarget lokal.</li>
                  <li><strong>Instagram:</strong> Fokus pada visual menarik, stories, reels, dan interaksi langsung.</li>
                  <li><strong>Google Business Profile (ex-Google My Business):</strong> Kunci untuk Local SEO dan review.</li>
                  <li><strong>WhatsApp Business:</strong> Untuk komunikasi langsung, layanan pelanggan, dan notifikasi promo.</li>
                </ol>
                <div className="tips-box">
                  <b>Tips:</b> Tidak perlu ada di semua platform. Pilih yang paling relevan dengan target audiens dan jenis bisnis Anda.
                </div>
                <h2>Strategi Konten & Engagement</h2>
                <ul>
                  <li><strong>Konten Lokal:</strong> Bagikan informasi event lokal, promo khusus area, atau kerjasama dengan UMKM lain.</li>
                  <li><strong>Visual & Video Menarik:</strong> Tampilkan suasana bisnis, produk, atau tim Anda.</li>
                  <li><strong>Interaksi Aktif:</strong> Respon cepat komentar, DM, dan ajukan pertanyaan di setiap postingan.</li>
                  <li><strong>User-Generated Content (UGC):</strong> Dorong pelanggan untuk membagikan pengalaman mereka dan repost.</li>
                  <li><strong>Promosi Silang:</strong> Hubungkan akun social media Anda dengan website dan Google Business Profile.</li>
                </ul>
                <h2>Integrasi dengan Local SEO</h2>
                <p>
                  Social media mendukung <strong>Local SEO</strong> Anda:
                </p>
                <ul>
                  <li>Pastikan nama, alamat, dan nomor telepon (NAP) konsisten di semua platform.</li>
                  <li>Ajak pelanggan memberikan review di Google Business Profile.</li>
                  <li>Gunakan hashtag lokal yang relevan (#BatamKuliner, #CafeJakarta).</li>
                </ul>
                <h2>Kesimpulan</h2>
                <p>
                  Social media marketing adalah aset tak ternilai bagi bisnis lokal. Dengan pendekatan yang personal, konten yang relevan, dan interaksi yang tulus, Anda bisa membangun loyalitas pelanggan yang kuat dan membuat bisnis Anda berkembang di tengah komunitas. Mulai dari yang kecil, konsisten, dan lihat hasilnya!
                </p>
                <div className="mt-8 p-6 bg-gray-900 rounded-lg border border-neon-purple">
                  <h3 className="text-xl font-bold text-neon-purple mb-2">Action Plan</h3>
                  <ul>
                    <li>Optimalkan profil Facebook, Instagram, dan Google Business Profile Anda.</li>
                    <li>Buat 5 ide konten mingguan yang relevan dengan komunitas lokal.</li>
                    <li>Respon semua komentar dan DM dalam 24 jam.</li>
                    <li>Dorong pelanggan untuk memberikan review positif.</li>
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