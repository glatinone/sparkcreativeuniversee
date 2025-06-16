'use client'

import React, { useState } from 'react'
import { FaInstagram, FaTiktok, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import Header from '@/components/Header'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen bg-secondary">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-12">
            Hubungi Kami
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-secondary-light p-8 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-secondary border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-secondary border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Layanan yang Diminati
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-secondary border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Pilih Layanan</option>
                    <option value="branding">Branding & Identity Design</option>
                    <option value="social-media">Social Media Management</option>
                    <option value="content">Content Creation</option>
                    <option value="ads">Digital Ads & Campaigns</option>
                    <option value="website">Website Development</option>
                    <option value="seo">SEO & Analytics</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-secondary border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-secondary-light p-8 rounded-lg">
                <h2 className="text-2xl font-display font-bold mb-6">Informasi Kontak</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <FaMapMarkerAlt className="w-6 h-6 text-neon-purple" />
                    <span className="text-gray-300">Batam, Indonesia</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <FaPhone className="w-6 h-6 text-neon-purple" />
                    <span className="text-gray-300">+62 812-3456-7890</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <FaEnvelope className="w-6 h-6 text-neon-purple" />
                    <span className="text-gray-300">contact@sparkscreative.com</span>
                  </div>
                </div>
              </div>

              <div className="bg-secondary-light p-8 rounded-lg">
                <h2 className="text-2xl font-display font-bold mb-6">Social Media</h2>
                
                <div className="flex space-x-6">
                  <a
                    href="https://instagram.com/sparkcreativeuniverse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-neon-purple transition-colors"
                  >
                    <FaInstagram className="w-8 h-8" />
                  </a>
                  <a
                    href="https://tiktok.com/@sparkcreativeuniverse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-neon-purple transition-colors"
                  >
                    <FaTiktok className="w-8 h-8" />
                  </a>
                  <a
                    href="https://linkedin.com/in/sparkcreativeuniverse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-neon-purple transition-colors"
                  >
                    <FaLinkedin className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ContactPage 