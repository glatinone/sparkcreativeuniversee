'use client'

import React from 'react'
import Header from '@/components/Header'
import { FaCheck } from 'react-icons/fa'

const packages = [
  {
    id: 1,
    name: 'Starter',
    price: '2.5',
    description: 'Paket ideal untuk bisnis kecil yang baru memulai',
    features: [
      'Desain Logo',
      'Social Media Setup',
      'Basic Content Creation',
      'Monthly Report',
      'Email Support'
    ]
  },
  {
    id: 2,
    name: 'Professional',
    price: '5',
    description: 'Solusi lengkap untuk bisnis yang sedang berkembang',
    features: [
      'Semua fitur Starter',
      'Brand Identity Design',
      'Website Development',
      'Social Media Management',
      'Content Strategy',
      'SEO Optimization',
      'Priority Support'
    ],
    popular: true
  },
  {
    id: 3,
    name: 'Enterprise',
    price: '10',
    description: 'Paket premium untuk bisnis besar dengan kebutuhan khusus',
    features: [
      'Semua fitur Professional',
      'Custom Website Development',
      'Digital Marketing Strategy',
      'PPC Campaign Management',
      'Analytics & Reporting',
      'Dedicated Account Manager',
      '24/7 Support'
    ]
  }
]

const PackagesPage = () => {
  return (
    <main className="min-h-screen bg-secondary">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            Paket & Harga
          </h1>
          
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket dapat disesuaikan sesuai kebutuhan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-secondary-light rounded-lg p-8 relative ${
                  pkg.popular ? 'border-2 border-neon-purple' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon-purple text-white px-4 py-1 rounded-full text-sm font-medium">
                    Paling Populer
                  </div>
                )}
                
                <h3 className="text-2xl font-display font-bold mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">Rp {pkg.price}</span>
                  <span className="text-gray-400">/juta</span>
                </div>
                <p className="text-gray-300 mb-6">{pkg.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <FaCheck className="text-neon-purple mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-neon-purple hover:bg-neon-purple/90 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Pilih Paket
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default PackagesPage 