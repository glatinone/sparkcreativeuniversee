'use client'

import React from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import { motion } from 'framer-motion'
import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin, FaPalette, FaSearch, FaRocket, FaUsers, FaAward, FaGlobe } from 'react-icons/fa'
import BrandBackground from '@/components/BrandBackground'

const brandColors = {
  purple: '#8F43EE',
  blue: '#3ABEFF',
  tosca: '#1DE9B6',
  white: '#FFFFFF',
  dark: '#18181B',
}

const HomePage = () => {
  return (
    <BrandBackground>
      <main className="min-h-screen">
        <Header />
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="max-w-5xl"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-[#8F43EE]/20 backdrop-blur-sm border border-[#8F43EE]/30 rounded-full text-[#8F43EE] text-sm font-medium mb-4">
                  🚀 Digital Agency Terkemuka di Batam
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-6xl md:text-8xl font-display font-black mb-8 leading-tight"
              >
                <span className="bg-gradient-to-r from-[#8F43EE] via-[#3ABEFF] to-[#1DE9B6] bg-clip-text text-transparent">SPARKS</span>
                <br />
                <span className="bg-gradient-to-r from-[#3ABEFF] via-[#1DE9B6] to-[#FFFFFF] bg-clip-text text-transparent">Creative</span>
                <br />
                <span className="bg-gradient-to-r from-[#8F43EE] via-[#3ABEFF] to-[#1DE9B6] bg-clip-text text-transparent">Universe</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-2xl md:text-3xl text-white mb-6 font-light leading-relaxed"
              >
                Kami membantu brand berkembang di era digital dengan <span className="text-[#8F43EE] font-semibold">solusi kreatif dan inovatif</span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl md:text-2xl text-[#3ABEFF] font-medium mb-12 max-w-4xl"
              >
                Kamu pusing punya brand atau usaha tetapi tidak tahu cara scale up dan grow up nya? <span className="text-white font-bold">Serahkan ke kami!</span>
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex flex-wrap gap-6"
              >
                <motion.a
                  href="/contact"
                  whileHover={{
                    scale: 1.08,
                    boxShadow: `0 0 24px ${brandColors.purple}, 0 0 48px ${brandColors.blue}`,
                    background: `linear-gradient(90deg, ${brandColors.purple}, ${brandColors.blue}, ${brandColors.tosca}, ${brandColors.purple})`,
                    backgroundSize: '200% 200%',
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="relative px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#8F43EE] to-[#3ABEFF] shadow-lg transition-all duration-300 overflow-hidden flex items-center gap-2"
                >
                  Konsultasi Gratis
                  <motion.span
                    initial={{ y: 0 }}
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <FaRocket className="ml-1" />
                  </motion.span>
                </motion.a>
                <motion.a
                  href="/portfolio"
                  whileHover={{
                    scale: 1.08,
                    boxShadow: `0 0 24px ${brandColors.tosca}`,
                    borderColor: brandColors.tosca,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="px-8 py-4 rounded-xl font-bold border-2 border-[#1DE9B6] text-[#1DE9B6] bg-transparent hover:bg-[#1DE9B6]/10 hover:text-[#18181B] transition-all duration-300 flex items-center gap-2"
                >
                  Lihat Portofolio
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-[#8F43EE] rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-[#8F43EE] rounded-full mt-2"
              />
            </div>
          </motion.div>
        </section>
        {/* Stats Section */}
        <section className="py-20 bg-[#18181B]/80">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '500+', label: 'Proyek Selesai', icon: FaRocket, color: brandColors.purple },
                { number: '100+', label: 'Klien Puas', icon: FaUsers, color: brandColors.blue },
                { number: '500K+', label: 'Followers', icon: FaAward, color: brandColors.tosca },
                { number: '7+', label: 'Tahun Pengalaman', icon: FaGlobe, color: brandColors.white }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: stat.color + '22' }}>
                    <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/80 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Services Preview */}
        <section className="py-20 bg-[#18181B]/90">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-[#8F43EE]/20 backdrop-blur-sm border border-[#8F43EE]/30 rounded-full text-[#8F43EE] text-sm font-medium mb-4">
                Layanan Unggulan
              </span>
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-[#8F43EE] to-[#3ABEFF] bg-clip-text text-transparent">
                Layanan Kami
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
                Solusi digital marketing lengkap untuk membantu brand Anda berkembang di era digital dengan teknologi terdepan.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Social Media Management',
                  description: 'Pengelolaan dan optimasi akun media sosial untuk meningkatkan engagement dan brand awareness dengan strategi yang data-driven.',
                  icon: <FaInstagram className="w-8 h-8" style={{ color: brandColors.purple }} />,
                  color: brandColors.purple
                },
                {
                  title: 'Branding & Identity',
                  description: 'Pembuatan identitas visual yang kuat dan konsisten untuk membangun brand yang memorable dan berdampak.',
                  icon: <FaPalette className="w-8 h-8" style={{ color: brandColors.blue }} />,
                  color: brandColors.blue
                },
                {
                  title: 'SEO & Analytics',
                  description: 'Optimasi website untuk mesin pencari dan analisis data untuk meningkatkan performa digital secara signifikan.',
                  icon: <FaSearch className="w-8 h-8" style={{ color: brandColors.tosca }} />,
                  color: brandColors.tosca
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative bg-[#23232B] p-8 rounded-2xl border border-[#8F43EE]/10 hover:border-[#3ABEFF]/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ backgroundColor: service.color + '22' }}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/80 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8F43EE] to-[#3ABEFF] text-white font-bold rounded-xl hover:from-[#3ABEFF] hover:to-[#1DE9B6] transition-all"
              >
                Pelajari Lebih Lanjut
                <FaRocket className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
        {/* Social Media */}
        <section className="py-20 bg-[#18181B]/95">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-[#8F43EE]/20 backdrop-blur-sm border border-[#8F43EE]/30 rounded-full text-[#8F43EE] text-sm font-medium mb-4">
                Social Media
              </span>
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-[#8F43EE] to-[#3ABEFF] bg-clip-text text-transparent">
                Ikuti Kami
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
                Temukan inspirasi dan update terbaru dari SPARKS Creative Universe di media sosial.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center space-x-8"
            >
              {[
                { icon: FaInstagram, href: 'https://www.instagram.com/sparkcreativeuniverse/', color: brandColors.purple },
                { icon: FaFacebook, href: 'https://facebook.com', color: brandColors.blue },
                { icon: FaTiktok, href: 'https://tiktok.com', color: brandColors.tosca },
                { icon: FaLinkedin, href: 'https://linkedin.com', color: brandColors.white }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative w-16 h-16 bg-[#23232B] rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 border border-[#8F43EE]/10 hover:border-[#3ABEFF]/20"
                >
                  <social.icon className="text-3xl" style={{ color: social.color }} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </BrandBackground>
  )
}

export default HomePage 