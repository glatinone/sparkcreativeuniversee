'use client'

import React from 'react'
import Header from '@/components/Header'
import { motion } from 'framer-motion'
import { FaInstagram, FaFacebook, FaTiktok, FaSearch, FaPalette, FaChartLine, FaCode, FaCamera } from 'react-icons/fa'

const services = [
  {
    id: 1,
    title: 'Social Media Management',
    icon: <FaInstagram className="w-8 h-8" />,
    description: 'Pengelolaan dan optimasi akun media sosial untuk meningkatkan engagement dan brand awareness.',
    features: [
      'Content Planning & Strategy',
      'Community Management',
      'Social Media Audit',
      'Performance Analytics',
      'Crisis Management'
    ]
  },
  {
    id: 2,
    title: 'Branding & Identity',
    icon: <FaPalette className="w-8 h-8" />,
    description: 'Pembuatan identitas visual yang kuat dan konsisten untuk membangun brand yang memorable.',
    features: [
      'Logo Design',
      'Brand Guidelines',
      'Visual Identity',
      'Brand Strategy',
      'Brand Voice Development'
    ]
  },
  {
    id: 3,
    title: 'SEO & Analytics',
    icon: <FaSearch className="w-8 h-8" />,
    description: 'Optimasi website untuk mesin pencari dan analisis data untuk meningkatkan performa digital.',
    features: [
      'Technical SEO',
      'Content Optimization',
      'Keyword Research',
      'Performance Tracking',
      'Competitor Analysis'
    ]
  },
  {
    id: 4,
    title: 'Digital Marketing',
    icon: <FaChartLine className="w-8 h-8" />,
    description: 'Strategi pemasaran digital yang komprehensif untuk mencapai target bisnis Anda.',
    features: [
      'Campaign Strategy',
      'PPC Advertising',
      'Email Marketing',
      'Content Marketing',
      'Performance Marketing'
    ]
  },
  {
    id: 5,
    title: 'Web Development',
    icon: <FaCode className="w-8 h-8" />,
    description: 'Pengembangan website modern dan responsif dengan fokus pada user experience.',
    features: [
      'Custom Website Design',
      'E-commerce Development',
      'Website Maintenance',
      'Performance Optimization',
      'Mobile Responsiveness'
    ]
  },
  {
    id: 6,
    title: 'Content Creation',
    icon: <FaCamera className="w-8 h-8" />,
    description: 'Pembuatan konten berkualitas tinggi untuk berbagai platform digital.',
    features: [
      'Photo & Video Production',
      'Social Media Content',
      'Blog Writing',
      'Graphic Design',
      'Content Strategy'
    ]
  }
]

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-secondary">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Layanan Kami
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Solusi digital marketing lengkap untuk membantu brand Anda berkembang di era digital.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary-light rounded-lg p-8 group hover:bg-secondary-lighter transition-colors"
              >
                <div className="text-neon-purple mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-neon-purple rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ServicesPage 