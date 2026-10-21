'use client'
import React from 'react'

const highlights = [
  {
    title: 'Prime Gurugram Location',
    description: 'Prime location at Subhash Chowk, right in the vibrant heart of Gurugram.',
    icon: 'fa-solid fa-location-dot'
  },
  {
    title: 'Upcoming Metro Station',
    description: 'Located close to the upcoming metro station for effortless connectivity.',
    icon: 'fa-solid fa-train-subway'
  },
  {
    title: 'Low-Density Development',
    description: 'Low-density development with only two apartments per floor for privacy.',
    icon: 'fa-solid fa-building'
  },
  {
    title: 'All Corner Units',
    description: 'All corner units offering abundant natural light and cross ventilation.',
    icon: 'fa-solid fa-compass'
  },
  {
    title: 'Semi-Loaded Layouts',
    description: 'Semi-loaded layouts engineered with efficient planning and smart spaces.',
    icon: 'fa-solid fa-ruler-combined'
  },
  {
    title: 'Smart Home-Ready',
    description: 'Smart home-ready residences pre-configured for automated modern living.',
    icon: 'fa-solid fa-house-laptop'
  },
  {
    title: 'Wrap-Around Balconies',
    description: 'Wrap-around balconies offering open panoramic views and abundant breezes.',
    icon: 'fa-solid fa-person-walking'
  },
  {
    title: '30+ Lifestyle Amenities',
    description: 'Elegant clubhouse featuring 30+ curated lifestyle and wellness amenities.',
    icon: 'fa-solid fa-champagne-glasses'
  },
  {
    title: 'Green Certified',
    description: 'Green Building Certified development built for sustainable eco-living.',
    icon: 'fa-solid fa-leaf'
  },
]

const Highlights = ({ setIsOpen }) => {
  return (
    <section id="highlights" className="w-full py-10 md:py-14 font-poppins" style={{ background: '#fafafa' }}>
      <div className="container mx-auto px-4" style={{ maxWidth: '1280px' }}>

        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-12" data-aos="fade-up">
          <span className="text-[#AF751C] font-bold text-[14px] tracking-[2.5px] uppercase mb-2.5 block">
            PROJECT HIGHLIGHTS
          </span>
          <h2 className="text-[#111111] text-[26px] sm:text-[32px] md:text-[38px] font-extrabold m-0 leading-tight md:whitespace-nowrap">
            What Makes Central Avenue Stand Apart
          </h2>
        </div>

        {/* 6 Cards: 3 per row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {highlights.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={(i * 50).toString()}
              className="group relative bg-white rounded-[20px] p-7 border border-[#F0E9D8] shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_16px_36px_rgba(175, 117, 28,0.14)] hover:border-[#AF751C]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Top Row: Icon & Title Side-by-Side */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-[52px] h-[52px] min-w-[52px] min-h-[52px] rounded-[14px] bg-[#F0E9D8] text-[#AF751C] group-hover:bg-[#AF751C] group-hover:text-white flex items-center justify-center text-[22px] transition-all duration-300 shadow-sm flex-shrink-0 group-hover:scale-105">
                    <i className={item.icon}></i>
                  </div>
                  <h4 className="text-[#222222] font-bold text-[17px] sm:text-[18px] leading-snug group-hover:text-[#AF751C] transition-colors duration-200 m-0">
                    {item.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-[#6c757d] text-[14.5px] font-medium leading-[1.65] m-0">
                  {item.description}
                </p>
              </div>

              {/* Subtle bottom accent line that expands on hover */}
              <div className="w-12 h-[3px] bg-[#AF751C]/20 group-hover:bg-[#AF751C] group-hover:w-full rounded-full mt-6 transition-all duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Highlights
