'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang', href: '/about' },
    { name: 'Layanan', href: '/services' },
    { name: 'Portofolio', href: '/portfolio' },
    { name: 'Testimoni', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Kontak', href: '/contact' }
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/sparkcreativeuniverse/',
      icon: FaInstagram
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/sparkcreativeuniverse',
      icon: FaFacebook
    },
    {
      name: 'TikTok',
      href: 'https://tiktok.com/@sparkcreativeuniverse',
      icon: FaTiktok
    }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-neon-purple/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/about/logospark.png"
              alt="SPARKS Creative Universe"
              width={35}
              height={35}
              className="h-9 w-auto"
            />
            <span className="text-2xl font-display font-bold gradient-text">
              SPARKS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-neon-purple transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-purple group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-neon-purple transition-colors hover:scale-110"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-neon-purple transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 border-t border-neon-purple/20"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-neon-purple transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-neon-purple/20">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-neon-purple transition-colors hover:scale-110"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Header 