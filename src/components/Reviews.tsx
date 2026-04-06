import { siteConfig } from '@/lib/config'

export default function Reviews() {
  return (
    <section id="recenzije" className="py-24 bg-[#EDE8E0]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[#E63946] text-sm font-medium tracking-widest uppercase mb-3">
            Šta kažu klijenti
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[#0D1B2A]">
            Recenzije
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteConfig.reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-8 border border-[#E8E4DC] hover:shadow-md transition-shadow"
            >
              {/* Zvjezdice */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-[#E9A800] text-lg">★</span>
                ))}
              </div>

              {/* Tekst recenzije */}
              <p className="text-[#3A4050] leading-relaxed mb-6 text-base">
                "{review.text}"
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#1D3557] rounded-full flex items-center justify-center text-white text-sm font-medium">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-[#0D1B2A] text-sm">{review.name}</div>
                  <div className="text-[#8A90A0] text-xs">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
