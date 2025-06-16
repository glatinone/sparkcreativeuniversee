'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero = () => {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; delay: number }[]>([])

  useEffect(() => {
    // Create stars
    const newStars = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2
    }))
    setStars(newStars)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0">
        {stars.map((star, index) => (
          <div
            key={index}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 gradient-text"
          >
            SPARKS Creative Universe
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Digital Agency terkemuka di Batam yang membantu brand berkembang di era digital dengan solusi kreatif dan inovatif
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            <p className="mb-4">
              Kami adalah tim kreatif yang berfokus pada pengembangan brand, social media management, dan content creation. Dengan pengalaman lebih dari 7 tahun di industri kreatif, kami telah membantu ratusan brand lokal dan internasional mencapai target mereka.
            </p>
            <p>
              Dari strategi digital marketing hingga pembuatan konten berkualitas tinggi, kami menyediakan solusi lengkap untuk kebutuhan digital brand Anda.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact" className="btn-primary">
              Hubungi Kami
            </Link>
            <Link href="/portfolio" className="btn-secondary">
              Lihat Portofolio
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-neon-purple mb-2">100+</div>
              <div className="text-gray-300">Klien Puas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-neon-purple mb-2">500+</div>
              <div className="text-gray-300">Proyek Selesai</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-neon-purple mb-2">500K+</div>
              <div className="text-gray-300">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-neon-purple mb-2">7+</div>
              <div className="text-gray-300">Tahun Pengalaman</div>
            </div>
          </motion.div>

          {/* Services Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="card">
              <h3 className="text-xl font-bold text-neon-purple mb-3">Social Media Management</h3>
              <p className="text-gray-300">
                Pengelolaan dan optimasi akun media sosial untuk meningkatkan engagement dan brand awareness. Kami membantu Anda membangun komunitas yang kuat dan loyal.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-neon-purple mb-3">Content Creation</h3>
              <p className="text-gray-300">
                Pembuatan konten berkualitas tinggi untuk berbagai platform digital. Dari foto hingga video, kami memastikan setiap konten mencerminkan identitas brand Anda.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold text-neon-purple mb-3">Digital Marketing</h3>
              <p className="text-gray-300">
                Strategi pemasaran digital yang komprehensif untuk mencapai target bisnis Anda. Kami membantu Anda menjangkau audiens yang tepat dengan cara yang efektif.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
    </section>
  )
}

export default Hero 