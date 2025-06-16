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
                  Tips Fotografi Produk untuk E-commerce
                </h1>
                <div className="flex items-center space-x-4 text-gray-400 mb-6">
                  <span>15 Mei 2025</span>
                  <span>•</span>
                  <span>6 menit baca</span>
                  <span>•</span>
                  <span>Photography</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm">
                    Photography
                  </span>
                  <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm">
                    E-commerce
                  </span>
                  <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm">
                    Product Marketing
                  </span>
                </div>
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
                <Image
                  src="/blog/product-photography.jpg"
                  alt="Fotografi Produk E-commerce"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-invert max-w-none">
                <blockquote>
                  "Foto produk adalah 'penjual senyap' Anda di dunia e-commerce. Kualitasnya menentukan kepercayaan dan konversi."
                </blockquote>
                <p>
                  Dalam bisnis <strong>e-commerce</strong>, visual adalah raja. Foto produk yang berkualitas bukan hanya sekadar tampilan, tetapi juga representasi brand Anda. Artikel ini akan memandu Anda melalui tips praktis untuk menghasilkan foto produk yang memukau dan meningkatkan penjualan.
                </p>
                <h2>Pentingnya Foto Produk Berkualitas</h2>
                <ul>
                  <li><strong>Membangun Kepercayaan:</strong> Konsumen lebih percaya pada produk yang terlihat jelas dan profesional.</li>
                  <li><strong>Meningkatkan Konversi:</strong> Visual yang menarik mendorong keputusan pembelian.</li>
                  <li><strong>Mengurangi Retur:</strong> Foto yang akurat membantu konsumen memahami produk.</li>
                  <li><strong>Membangun Citra Brand:</strong> Konsistensi visual mencerminkan profesionalisme brand.</li>
                </ul>
                <h2>Peralatan Esensial</h2>
                <ol>
                  <li><strong>Kamera & Lensa:</strong> DSLR/Mirrorless dengan lensa makro untuk detail.</li>
                  <li><strong>Pencahayaan:</strong> Softbox, lampu kontinu, atau cahaya alami dengan diffuser.</li>
                  <li><strong>Tripod:</strong> Untuk stabilitas dan konsistensi sudut pengambilan gambar.</li>
                  <li><strong>Background:</strong> Putih bersih atau sesuai tema brand.</li>
                </ol>
                <div className="tips-box">
                  <b>Tips:</b> Anda bisa memulai dengan smartphone yang memiliki kamera bagus dan pencahayaan alami di dekat jendela.
                </div>
                <h2>Teknik Fotografi Produk yang Memukau</h2>
                <ul>
                  <li><strong>Komposisi:</strong> Gunakan Rule of Thirds. Ambil gambar dari berbagai sudut (depan, samping, atas, detail).</li>
                  <li><strong>Pencahayaan:</strong> Hindari bayangan keras. Pastikan pencahayaan merata untuk menonjolkan detail produk.</li>
                  <li><strong>Fokus & Ketajaman:</strong> Pastikan produk selalu fokus dan tajam.</li>
                  <li><strong>White Balance:</strong> Sesuaikan warna agar akurat dengan produk asli.</li>
                </ul>
                <h2>Post-Processing: Sentuhan Akhir</h2>
                <p>
                  Proses editing adalah tahap krusial. Gunakan software seperti Adobe Photoshop/Lightroom (atau aplikasi mobile seperti Snapseed/Lightroom Mobile) untuk:
                </p>
                <ul>
                  <li><strong>Koreksi Warna & Eksposur:</strong> Pastikan produk terlihat natural.</li>
                  <li><strong>Membersihkan Noda:</strong> Hapus debu atau noda kecil.</li>
                  <li><strong>Penyesuaian Ketajaman:</strong> Sedikit tingkatkan ketajaman jika diperlukan.</li>
                  <li><strong>Crop & Resize:</strong> Sesuaikan ukuran dan rasio aspek untuk platform e-commerce.</li>
                  <li><strong>Optimasi File:</strong> Kompres ukuran gambar tanpa mengurangi kualitas untuk mempercepat loading website.</li>
                </ul>
                <h2>Kesimpulan</h2>
                <p>
                  Fotografi produk yang berkualitas adalah investasi terbaik untuk bisnis e-commerce Anda. Dengan perencanaan, peralatan yang tepat, teknik yang solid, dan sentuhan post-processing, Anda akan menarik lebih banyak pelanggan dan meningkatkan penjualan. Ingat, gambar berbicara lebih dari seribu kata!
                </p>
                <div className="mt-8 p-6 bg-gray-900 rounded-lg border border-neon-purple">
                  <h3 className="text-xl font-bold text-neon-purple mb-2">Action Plan</h3>
                  <ul>
                    <li>Siapkan 3-5 produk untuk sesi foto percobaan.</li>
                    <li>Eksperimen dengan pencahayaan alami di rumah.</li>
                    <li>Pelajari dasar-dasar komposisi foto produk.</li>
                    <li>Pilih 1 aplikasi editing gratis dan praktikkan.</li>
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