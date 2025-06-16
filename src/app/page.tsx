'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import { motion } from 'framer-motion'
import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin, FaPalette, FaSearch, FaChartLine, FaCode, FaCamera } from 'react-icons/fa'

const HomePage = () => {
  return (
    <main className="min-h-screen bg-secondary">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="gradient-bg opacity-20" />
          <div className="animated-shapes">
            <div className="shape" />
            <div className="shape" />
            <div className="shape" />
          </div>
          <div className="parallax-bg" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-pink-500">
              SPARKS Creative Universe
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Digital Agency terkemuka di Batam yang membantu brand berkembang di era digital dengan solusi kreatif dan inovatif.
            </p>
            <p className="text-xl md:text-2xl text-neon-purple font-semibold mb-8">
              Kamu pusing punya brand atau usaha tetapi tidak tahu cara scale up dan grow up nya? Serahkan ke kami!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-primary text-lg px-8 py-3 hover:scale-105 transition-transform"
              >
                Konsultasi Gratis
              </Link>
              <Link
                href="/portfolio"
                className="btn-secondary text-lg px-8 py-3 hover:scale-105 transition-transform"
              >
                Lihat Portofolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-secondary-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Solusi digital marketing lengkap untuk membantu brand Anda berkembang di era digital.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Social Media Management',
                description: 'Pengelolaan dan optimasi akun media sosial untuk meningkatkan engagement dan brand awareness.',
                icon: <FaInstagram className="w-8 h-8" />
              },
              {
                title: 'Branding & Identity',
                description: 'Pembuatan identitas visual yang kuat dan konsisten untuk membangun brand yang memorable.',
                icon: <FaPalette className="w-8 h-8" />
              },
              {
                title: 'SEO & Analytics',
                description: 'Optimasi website untuk mesin pencari dan analisis data untuk meningkatkan performa digital.',
                icon: <FaSearch className="w-8 h-8" />
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-neon-purple mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="btn-primary">
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-secondary-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Tentang Kami
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                SPARKS Creative Universe adalah digital agency yang didirikan oleh Okto Siagian, influencer besar di Batam. Kami membantu brand berkembang di era digital dengan solusi kreatif dan inovatif.
              </p>
              <Link
                href="/about"
                className="btn-primary"
              >
                Pelajari Lebih Lanjut
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="/about-preview.jpg"
                alt="About SPARKS"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Ikuti Kami
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Temukan inspirasi dan update terbaru dari SPARKS Creative Universe di media sosial.
            </p>
          </motion.div>

          <div className="flex justify-center space-x-8">
            <a
              href="https://www.instagram.com/sparkcreativeuniverse/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-white hover:text-neon-purple transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-white hover:text-neon-purple transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-white hover:text-neon-purple transition-colors"
            >
              <FaTiktok />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-white hover:text-neon-purple transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage 