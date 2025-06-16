'use client'

import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-secondary z-40 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="container mx-auto px-4 py-8">
        <nav className="flex flex-col space-y-6 mt-20">
          <Link
            href="/"
            className="text-2xl font-display font-bold text-white"
            onClick={onClose}
          >
            Beranda
          </Link>
          <Link
            href="/about"
            className="text-2xl font-display font-bold text-white"
            onClick={onClose}
          >
            Tentang Kami
          </Link>
          <Link
            href="/services"
            className="text-2xl font-display font-bold text-white"
            onClick={onClose}
          >
            Layanan
          </Link>
          <Link
            href="/portfolio"
            className="text-2xl font-display font-bold text-white"
            onClick={onClose}
          >
            Portofolio
          </Link>
          <Link
            href="/packages"
            className="text-2xl font-display font-bold text-white"
            onClick={onClose}
          >
            Paket
          </Link>
          <Link
            href="/testimonials"
            className="text-2xl font-display font-bold text-white"
            onClick={onClose}
          >
            Testimoni
          </Link>
          <Link
            href="/contact"
            className="text-2xl font-display font-bold text-white"
            onClick={onClose}
          >
            Kontak
          </Link>
        </nav>

        <div className="flex items-center space-x-6 mt-12">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-neon-purple transition-colors"
          >
            <FaFacebookF className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-neon-purple transition-colors"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-neon-purple transition-colors"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-neon-purple transition-colors"
          >
            <FaLinkedinIn className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu 