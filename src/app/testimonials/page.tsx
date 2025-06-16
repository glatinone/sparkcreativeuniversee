'use client'

import React from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    position: 'Owner, Event Organizer',
    image: '/testimonials/client1.jpg',
    quote: 'SPARKS membantu kami meningkatkan penjualan melalui social media marketing. Hasilnya luar biasa!',
    rating: 5
  },
  {
    id: 2,
    name: 'Siti Rahayu',
    position: 'Founder, Batam Fashion House',
    image: '/testimonials/client2.jpg',
    quote: 'Tim SPARKS sangat profesional dalam mengelola brand kami. Mereka memahami kebutuhan kami dengan baik.',
    rating: 5
  },
  {
    id: 3,
    name: 'Ahmad Rizki',
    position: 'CEO, Batam Tech Solutions',
    image: '/testimonials/client3.jpg',
    quote: 'Website yang dibuat SPARKS sangat modern dan responsif. Sangat membantu bisnis kami.',
    rating: 5
  },
  {
    id: 4,
    name: 'Dewi Lestari',
    position: 'Owner, Batam Beauty Clinic',
    image: '/testimonials/client4.jpg',
    quote: 'Konten yang dibuat SPARKS sangat menarik dan sesuai dengan target market kami.',
    rating: 5
  },
  {
    id: 5,
    name: 'Rudi Hartono',
    position: 'Manager, Batam Seafood Restaurant',
    image: '/testimonials/client5.jpg',
    quote: 'Strategi digital marketing dari SPARKS berhasil meningkatkan omset restoran kami.',
    rating: 5
  },
  {
    id: 6,
    name: 'Maya Wijaya',
    position: 'Founder, Batam Craft Store',
    image: '/testimonials/client6.jpg',
    quote: 'SPARKS membantu kami membangun brand yang kuat di social media. Sangat puas dengan hasilnya!',
    rating: 5
  }
]

const TestimonialsPage = () => {
  return (
    <main className="min-h-screen bg-secondary">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Testimoni Klien
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Lihat apa yang dikatakan klien kami tentang layanan SPARKS Creative Universe
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary-light p-8 rounded-lg group hover:bg-secondary-lighter transition-colors"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold">
                      {testimonial.name}
                    </h3>
                    <p className="text-neon-purple">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <FaQuoteLeft className="text-neon-purple opacity-20 w-8 h-8 mb-4" />
                  <p className="text-gray-300 italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default TestimonialsPage 