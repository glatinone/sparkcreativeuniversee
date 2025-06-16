'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type PortfolioItem = {
  id: number
  slug: string
  title: string
  category: string
  image: string
  description: string
  services: string[]
  fullDescription: string
  results: string[]
  client: string
  duration: string
  tools: string[]
}

export const PortfolioContent = ({ project }: { project: PortfolioItem }) => {
  return (
    <article className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative h-[60vh] mb-16 rounded-2xl overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-secondary/50" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-4xl mx-auto">
              <span className="text-neon-purple font-medium mb-4 block">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-200">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-display font-bold mb-6">Tentang Proyek</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>
            </div>
            <div>
              <div className="bg-secondary-light p-6 rounded-lg">
                <h3 className="text-xl font-display font-bold mb-4">Detail Proyek</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-gray-400">Klien</dt>
                    <dd className="text-white font-medium">{project.client}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-400">Durasi</dt>
                    <dd className="text-white font-medium">{project.duration}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-400">Tools</dt>
                    <dd className="text-white font-medium">
                      {project.tools.join(', ')}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6">Hasil</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-neon-purple mr-2">•</span>
                  <span className="text-gray-300">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6">Layanan</h2>
            <div className="flex flex-wrap gap-3">
              {project.services.map((service, index) => (
                <span
                  key={index}
                  className="text-sm bg-neon-purple/10 text-neon-purple px-4 py-2 rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block bg-neon-purple text-white px-8 py-4 rounded-full font-medium hover:bg-neon-purple/90 transition-colors"
            >
              Konsultasi Proyek Anda
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
} 