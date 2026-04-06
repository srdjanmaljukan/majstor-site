'use client'

import { useState } from 'react'
import Image from 'next/image'
import { GalleryImage } from '@/lib/cloudinary'

interface GalleryProps {
  images: GalleryImage[]
}

export default function Gallery({ images }: GalleryProps) {
  const [selected, setSelected] = useState<GalleryImage | null>(null)

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

  // Ako nema slika, prikaži placeholder grid
  const isEmpty = !images || images.length === 0

  return (
    <section id="galerija" className="py-24 bg-[#0D1B2A]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#E63946] text-sm font-medium tracking-widest uppercase mb-3">
            Moji radovi
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white">
            Galerija
          </h2>
        </div>

        {isEmpty ? (
          // Placeholder dok se ne dodaju slike
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-[#1D3557]/50 border border-white/10 rounded-xl flex items-center justify-center"
              >
                <div className="text-center text-white/30">
                  <div className="text-4xl mb-2">📷</div>
                  <div className="text-xs">Uskoro</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img) => (
              <button
                key={img.public_id}
                className="aspect-square relative overflow-hidden rounded-xl group cursor-pointer"
                onClick={() => setSelected(img)}
              >
                <Image
                  src={img.secure_url}
                  alt={img.context?.custom?.caption || 'Rad'}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
              </button>
            ))}
          </div>
        )}

        {/* Lightbox */}
        {selected && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <div className="relative max-w-4xl max-h-full w-full">
              <Image
                src={selected.secure_url}
                alt="Rad"
                width={selected.width}
                height={selected.height}
                className="object-contain max-h-[85vh] w-full rounded-xl"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center text-xl"
                onClick={() => setSelected(null)}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
