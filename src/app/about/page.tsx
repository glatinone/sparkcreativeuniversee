'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'
import Header from '@/components/Header'
import Image from 'next/image'

const teamMembers = [
  {
    id: 1,
    name: 'Okto Siagian',
    role: 'Founder',
    image: '/about/okto.jpg',
    bio: 'Dengan pengalaman 7 tahun di industri kreatif, Okto memimpin tim dengan visi yang kuat untuk menciptakan solusi digital yang inovatif. Spesialisasi dalam brand strategy dan creative direction.',
    social: {
      instagram: 'https://www.instagram.com/oktosiagian/',
      facebook: 'https://facebook.com/oktosiagian',
      tiktok: 'https://tiktok.com/@oktosiagian'
    }
  },
  {
    id: 2,
    name: 'Agung',
    role: 'Content Director',
    image: '/about/agung.jpg',
    bio: 'Ahli dalam menangkap momen melalui lensa kamera dengan pengalaman 5 tahun. Menguasai teknik fotografi dan videografi modern untuk menciptakan konten visual yang memukau.',
    social: {
      instagram: 'https://www.instagram.com/ardiiansyahagung/',
      facebook: 'https://facebook.com/sparkcreativeuniverse',
      tiktok: 'https://tiktok.com/@sparkcreativeuniverse'
    }
  },
  {
    id: 3,
    name: 'Ucup',
    role: 'Creative Director',
    image: '/about/ucup.jpg',
    bio: 'Editor handal dengan pengalaman 5 tahun dalam post-production dan brand management. Menguasai berbagai software editing dan memiliki keahlian dalam mengembangkan identitas brand yang kuat.',
    social: {
      instagram: 'https://www.instagram.com/saputroyusuf_',
      facebook: 'https://facebook.com/sparkcreativeuniverse',
      tiktok: 'https://tiktok.com/@sparkcreativeuniverse'
    }
  },
  {
    id: 4,
    name: 'Kiel',
    role: 'IT Specialist & Web Developer',
    image: '/about/kiel.jpg',
    bio: 'Spesialis IT dengan pengalaman 4 tahun dalam pengembangan web, AI, dan keamanan siber. Menguasai berbagai teknologi modern dan framework untuk menciptakan solusi digital yang aman dan inovatif.',
    social: {
      instagram: 'https://www.instagram.com/kiel.at/',
      facebook: 'https://facebook.com/kiel Tampubolon',
      tiktok: 'https://tiktok.com/@glatinone'
    }
  },
  {
    id: 5,
    name: 'Indi',
    role: 'Experienced Video Editor',
    image: '/about/indi.jpg',
    bio: 'Ahli strategi media sosial dengan pengalaman 3 tahun dalam mengelola kampanye digital yang sukses. Spesialis dalam content planning dan community management untuk meningkatkan engagement brand.',
    social: {
      instagram: 'https://www.instagram.com/sarahcreative/',
      facebook: 'https://facebook.com/sarahcreative',
      tiktok: 'https://tiktok.com/@sarahcreative'
    }
  },
  {
    id: 6,
    name: 'Faiz',
    role: 'Junior Graphic Designer',
    image: '/about/faiz.jpg',
    bio: 'Spesialis pemasaran digital dengan keahlian dalam SEO, SEM, dan analitik. Memiliki track record dalam meningkatkan ROI kampanye digital dan mengoptimalkan strategi pemasaran online.',
    social: {
      instagram: 'https://www.instagram.com/rizkimarketing/',
      facebook: 'https://facebook.com/rizkimarketing',
      tiktok: 'https://tiktok.com/@rizkimarketing'
    }
  }
]

const achievements = [
  { id: 1, number: '500+', label: 'Proyek Selesai' },
  { id: 2, number: '100+', label: 'Klien Puas' },
  { id: 3, number: '500K+', label: 'Followers' },
  { id: 4, number: '7+', label: 'Tahun Pengalaman' }
]

const values = [
  {
    id: 1,
    title: 'Kreativitas',
    description: 'Kami selalu berinovasi dan berpikir di luar kotak untuk menciptakan solusi yang unik dan menarik.'
  },
  {
    id: 2,
    title: 'Kualitas',
    description: 'Setiap proyek kami kerjakan dengan standar kualitas tertinggi untuk memastikan hasil yang memuaskan.'
  },
  {
    id: 3,
    title: 'Kolaborasi',
    description: 'Kami percaya bahwa kolaborasi yang baik dengan klien adalah kunci kesuksesan setiap proyek.'
  },
  {
    id: 4,
    title: 'Integritas',
    description: 'Kami menjunjung tinggi kejujuran dan transparansi dalam setiap aspek pekerjaan kami.'
  }
]

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
                Tentang Kami
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                SPARKS Creative Universe adalah digital agency terkemuka di Batam yang berfokus pada pengembangan brand dan strategi digital. Dengan tim yang berpengalaman dan kreatif, kami membantu brand Anda berkembang di era digital.
              </p>
            </motion.div>

            {/* Team Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card group"
                >
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <div className="aspect-w-3 aspect-h-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={300}
                        height={400}
                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-neon-purple mb-2">{member.name}</h3>
                  <p className="text-gray-300 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-neon-purple transition-colors"
                    >
                      <FaInstagram className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-neon-purple transition-colors"
                    >
                      <FaFacebook className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-neon-purple transition-colors"
                    >
                      <FaTiktok className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
            >
              {achievements.map((achievement) => (
                <div key={achievement.id} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-neon-purple mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-300">{achievement.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {values.map((value) => (
                <div key={value.id} className="card">
                  <h3 className="text-xl font-bold text-neon-purple mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AboutPage 