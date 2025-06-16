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
                  Cara Membuat Video Marketing yang Efektif
                </h1>
                <div className="flex items-center space-x-4 text-gray-400 mb-6">
                  <span>1 Juni 2025</span>
                  <span>•</span>
                  <span>9 menit baca</span>
                  <span>•</span>
                  <span>Video Production</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm">
                    Video Marketing
                  </span>
                  <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm">
                    Content Creation
                  </span>
                  <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm">
                    Digital Marketing
                  </span>
                </div>
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
                <Image
                  src="/blog/video-marketing.jpg"
                  alt="Video Marketing"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-invert max-w-none">
                <blockquote>
                  "Video marketing bukan lagi pilihan, tapi keharusan. Ini adalah cara paling efektif untuk bercerita dan terhubung dengan audiens."
                </blockquote>
                <p>
                  Di era digital yang didominasi visual, <strong>video marketing</strong> telah menjadi 'senjata' utama bagi banyak brand. Kemampuannya untuk menyampaikan pesan kompleks secara cepat dan emosional membuat video tak tergantikan. Mari kita selami cara menciptakan video marketing yang efektif dan berdampak.
                </p>
                <h2>Mengapa Video Marketing Penting?</h2>
                <ul>
                  <li><strong>Engagement Tinggi:</strong> Video mampu menarik perhatian dan menjaga audiens lebih lama.</li>
                  <li><strong>Pesan Jelas:</strong> Informasi disampaikan lebih mudah dicerna dan diingat.</li>
                  <li><strong>Membangun Kepercayaan:</strong> Video memungkinkan audiens melihat wajah di balik brand.</li>
                  <li><strong>Meningkatkan Konversi:</strong> Video produk atau testimoni dapat meyakinkan calon pelanggan.</li>
                  <li><strong>Jangkauan Luas:</strong> Mudah dibagikan di berbagai platform media sosial.</li>
                </ul>
                <h2>Jenis Video Marketing Populer</h2>
                <ol>
                  <li><strong>Video Brand Story:</strong> Menceritakan kisah, visi, dan nilai-nilai perusahaan.</li>
                  <li><strong>Video Produk/Demo:</strong> Menunjukkan cara kerja produk atau fitur unggulannya.</li>
                  <li><strong>Video Edukasi/Tutorial:</strong> Memberikan tips, panduan, atau informasi bermanfaat.</li>
                  <li><strong>Video Testimoni Pelanggan:</strong> Membangun kredibilitas melalui pengalaman nyata.</li>
                  <li><strong>Video Behind-the-Scenes:</strong> Memberikan sentuhan personal dan otentik.</li>
                </ol>
                <div className="tips-box">
                  <b>Tips:</b> Durasi video yang ideal bervariasi per platform. Instagram Reels (15-30 detik), YouTube (lebih panjang), TikTok (pendek dan cepat).
                </div>
                <h2>Langkah-langkah Produksi Video Efektif</h2>
                <ul>
                  <li><strong>Perencanaan (Pre-Production):</strong><br />Definisikan tujuan, target audiens, buat naskah/storyboard, dan siapkan peralatan.</li>
                  <li><strong>Produksi (Shooting):</strong><br />Perhatikan kualitas visual (resolusi, pencahayaan) dan audio. Pastikan gambar stabil.</li>
                  <li><strong>Pasca-Produksi (Post-Production):</strong><br />Editing, koreksi warna, penambahan musik latar, grafik, dan subtitle.</li>
                </ul>
                <h2>Distribusi & Optimasi</h2>
                <p>
                  Setelah video selesai, distribusikan di platform yang tepat dan optimalkan:
                </p>
                <ul>
                  <li><strong>YouTube:</strong> Gunakan judul, deskripsi, dan tag yang SEO-friendly.</li>
                  <li><strong>Instagram/TikTok:</strong> Fokus pada hook visual dan audio yang menarik.</li>
                  <li><strong>LinkedIn:</strong> Konten profesional dan insight industri.</li>
                  <li><strong>Website:</strong> Embed video untuk meningkatkan waktu tinggal pengunjung.</li>
                  <li><strong>Thumbnail:</strong> Buat thumbnail yang menarik dan relevan.</li>
                </ul>
                <h2>Kesimpulan</h2>
                <p>
                  Video marketing adalah tool yang sangat powerful jika dieksekusi dengan baik. Dengan perencanaan matang, produksi berkualitas, dan strategi distribusi yang tepat, video Anda akan efektif mencapai target audiens dan mendorong pertumbuhan brand. Mulailah berinvestasi dalam video marketing sekarang!
                </p>
                <div className="mt-8 p-6 bg-gray-900 rounded-lg border border-neon-purple">
                  <h3 className="text-xl font-bold text-neon-purple mb-2">Action Plan</h3>
                  <ul>
                    <li>Tentukan tujuan untuk video marketing Anda berikutnya (misal: brand awareness, edukasi, penjualan).</li>
                    <li>Buat skrip singkat untuk video 30-60 detik.</li>
                    <li>Eksperimen dengan fitur Reels atau TikTok.</li>
                    <li>Analisa video kompetitor yang sukses.</li>
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