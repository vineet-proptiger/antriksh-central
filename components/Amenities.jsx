'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const amenities = [
  {
    title: 'Luxury Clubhouse',
    icon: 'fa-solid fa-house-chimney',
    image: '/images/amenities/a5.webp'
  },
  {
    title: 'Swimming Pool',
    icon: 'fa-solid fa-person-swimming',
    image: '/images/amenities/a3.webp'
  },
  {
    title: 'Fitness Center',
    icon: 'fa-solid fa-dumbbell',
    image: '/images/amenities/a2.webp'
  },
  {
    title: 'Indoor & Outdoor Games',
    icon: 'fa-solid fa-basketball',
    image: '/images/amenities/a4.webp'
  },
  {
    title: 'Landscaped Gardens',
    icon: 'fa-solid fa-tree',
    image: '/images/amenities/a6.webp'
  },
  {
    title: "Children's Play Area",
    icon: 'fa-solid fa-child-reaching',
    image: '/images/amenities/a1.webp'
  },
  {
    title: 'Yoga Pavilion',
    icon: 'fa-solid fa-spa',
    image: '/images/amenities/yoga-pavilion.webp'
  },
  {
    title: '24x7 Security',
    icon: 'fa-solid fa-shield-halved',
    image: '/images/amenities/security.webp'
  }
]

const Amenities = () => {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="amenities" className="w-full py-10 md:py-14 font-poppins" style={{ background: '#f9f9f9' }}>
      <div className="container mx-auto px-4" style={{ maxWidth: '1280px' }}>

        {/* Section Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-[#AF751C] font-bold text-[14px] tracking-[2px] uppercase mb-2.5 block">
            WORLD CLASS AMENITIES
          </span>
          <h2 className="text-[#111111] text-[26px] sm:text-[32px] md:text-[38px] font-bold m-0 mb-3">
            A Lifestyle That Complements Your Vision of Luxury
          </h2>
          <p className="text-[#6c757d] text-[15px] sm:text-[16px] max-w-2xl mx-auto leading-relaxed m-0">
            Central Avenue offers a comprehensive range of leisure, wellness, and recreational amenities for every member of the family.
          </p>
        </div>

        {/* 4x2 Grid of Amenity Cards with Photo Backgrounds */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-7">
          {amenities.map((item, index) => (
            <div
              key={index}
              onClick={() => setLightbox(index)}
              data-aos="fade-up"
              data-aos-delay={((index % 4) * 60).toString()}
              className="group relative rounded-[20px] overflow-hidden h-[260px] sm:h-[280px] shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_18px_38px_rgba(175,117,28,0.28)] hover:-translate-y-1.5 transition-all duration-500 cursor-pointer flex flex-col justify-between p-6 border border-black/5"
            >
              {/* Background Photo */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20 group-hover:from-[#AF751C]/95 group-hover:via-[#AF751C]/70 group-hover:to-black/30 transition-all duration-500" />

              {/* Floating Top Row: Icon in Glassy Circle & Zoom Indicator */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center text-[20px] transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-[#AF751C] shadow-sm">
                  <i className={item.icon}></i>
                </div>
                <div className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 flex items-center justify-center text-[13px] transition-all duration-300">
                  <i className="fa-solid fa-magnifying-glass-plus"></i>
                </div>
              </div>

              {/* Content at Bottom: Title Only */}
              <div className="relative z-10 mt-auto">
                <h4 className="text-white font-extrabold text-[18px] sm:text-[20px] m-0 tracking-tight drop-shadow-md group-hover:translate-x-1 transition-transform duration-300">
                  {item.title}
                </h4>

                {/* Bottom Red Accent Pill */}
                <div className="w-8 h-[3px] bg-[#AF751C] group-hover:bg-white rounded-full mt-2.5 transition-all duration-300 group-hover:w-16" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── Interactive Lightbox Modal ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-4 animate-fadeIn"
          onClick={() => setLightbox(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 w-12 h-12 rounded-full bg-[#AF751C] hover:bg-white hover:text-[#AF751C] text-white text-2xl font-bold flex items-center justify-center transition-all hover:scale-105 shadow-xl z-20 cursor-pointer"
            aria-label="Close"
          >
            ×
          </button>

          {/* Lightbox Container */}
          <div
            className="relative w-full max-w-4xl h-[75vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-black/40 border border-white/10">
              <Image
                src={amenities[lightbox].image}
                alt={amenities[lightbox].title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 80vw"
                priority
              />
            </div>

            {/* Bottom Caption */}
            <div className="mt-4 text-center">
              <h3 className="text-white font-bold text-lg sm:text-xl m-0 tracking-wide">
                {amenities[lightbox].title}
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm mt-1 uppercase tracking-widest font-medium">
                {lightbox + 1} of {amenities.length}
              </p>
            </div>
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((lightbox - 1 + amenities.length) % amenities.length)
            }}
            className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-[#AF751C] border border-white/20 text-white text-2xl flex items-center justify-center transition-all hover:scale-110 shadow-lg cursor-pointer"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((lightbox + 1) % amenities.length)
            }}
            className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-[#AF751C] border border-white/20 text-white text-2xl flex items-center justify-center transition-all hover:scale-110 shadow-lg cursor-pointer"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}

export default Amenities
