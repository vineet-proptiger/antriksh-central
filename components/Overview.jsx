'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { overviewImage } from '../lib/images'

const Overview = ({ setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="overview" className="w-full py-10 md:py-14 bg-white font-poppins">
      <div className="container mx-auto px-4" style={{ maxWidth: '1200px' }}>
        <div className="flex flex-col lg:flex-row items-start lg:mx-[-12px]">
          
          {/* Image Column */}
          <div className="w-full lg:w-1/2 lg:px-[12px] mb-10 lg:mb-0 flex justify-center lg:sticky lg:top-24">
            <div className="relative w-full max-w-[480px] h-[320px] sm:h-[380px] md:h-[430px] lg:h-[470px] rounded-[20px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.08)]">
               <Image 
                 src={overviewImage} 
                 alt="About Antriksh Central Avenue" 
                 fill 
                 className="object-cover" 
                 sizes="(max-width: 1024px) 100vw, 50vw" 
               />
               <div className="absolute" style={{ right: '8px', bottom: '50%', transform: 'translateY(50%) rotate(-90deg)', transformOrigin: 'center right' }}>
                 <span className="text-[#e0e0e0] text-[10px] tracking-widest uppercase" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Artistic Impression</span>
               </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 lg:px-[12px] lg:pl-16">
            <div className="section-heading">
              <span className="text-[#AF751C] font-bold text-[14px] tracking-widest uppercase mb-3 block">
                A Landmark Address
              </span>
              <h2 className="text-[#111111] text-[25px] sm:text-[30px] md:text-[38px] font-extrabold leading-[1.2] mb-4">
                A Landmark Address for Luxury Living
              </h2>
              <div className="mb-5 pr-0 lg:pr-6">
                <div className={`text-[#6c757d] text-[15px] leading-[1.75] text-left ${!isExpanded ? 'line-clamp-5 overflow-hidden' : ''}`}>
                  <p className="m-0">
                    Welcome to Antriksh Central Avenue, an exclusive residential enclave crafted for those who seek sophistication with convenience.
                  </p>
                  <p className="m-0">
                    Located bang on Subhash Chowk, Sector 33, Gurugram, the project spans 2.5 acres and offers just 114 finely designed residences with Mivan construction technology, ensuring durability and precision.
                  </p>
                  <p className="m-0">
                    Every home features wrap-around balconies, smart space planning, and abundant natural light — blending elegance with everyday practicality.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-[#AF751C] font-semibold text-[14.5px] mt-2 hover:underline inline-flex items-center gap-1 cursor-pointer transition-colors duration-200 focus:outline-none"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              {/* Quick Facts Section Header */}
              <div className="mt-4 mb-3">
                <h4 className="font-bold text-[14px] uppercase tracking-wider text-[#AF751C] flex items-center gap-2">
                  <i className="fa-solid fa-list-check text-[13px]"></i>
                  Quick Facts
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2.5 sm:gap-y-3 mb-5">
                {/* Fact 1: Location */}
                <div className="flex items-start gap-2 sm:gap-2.5">
                  <div className="mt-0.5 flex-shrink-0 text-[#AF751C]">
                    <i className="fa-solid fa-location-dot text-[15px]"></i>
                  </div>
                  <div>
                    <h5 className="text-[#222222] font-bold text-[12.5px] sm:text-[13px] mb-0 leading-snug">Location</h5>
                    <p className="text-[#6c757d] text-[11.5px] sm:text-[12px] m-0 leading-snug">Subhash Chowk, Sector 33, Gurugram</p>
                  </div>
                </div>

                {/* Fact 2: Land Area */}
                <div className="flex items-start gap-2 sm:gap-2.5">
                  <div className="mt-0.5 flex-shrink-0 text-[#AF751C]">
                    <i className="fa-solid fa-vector-square text-[15px]"></i>
                  </div>
                  <div>
                    <h5 className="text-[#222222] font-bold text-[12.5px] sm:text-[13px] mb-0 leading-snug">Land Area</h5>
                    <p className="text-[#6c757d] text-[11.5px] sm:text-[12px] m-0 leading-snug">2.5 Acres</p>
                  </div>
                </div>

                {/* Fact 3: Total Units */}
                <div className="flex items-start gap-2 sm:gap-2.5">
                  <div className="mt-0.5 flex-shrink-0 text-[#AF751C]">
                    <i className="fa-solid fa-building-user text-[15px]"></i>
                  </div>
                  <div>
                    <h5 className="text-[#222222] font-bold text-[12.5px] sm:text-[13px] mb-0 leading-snug">Total Units</h5>
                    <p className="text-[#6c757d] text-[11.5px] sm:text-[12px] m-0 leading-snug">114 Residences</p>
                  </div>
                </div>

                {/* Fact 4: Construction */}
                <div className="flex items-start gap-2 sm:gap-2.5">
                  <div className="mt-0.5 flex-shrink-0 text-[#AF751C]">
                    <i className="fa-solid fa-helmet-safety text-[15px]"></i>
                  </div>
                  <div>
                    <h5 className="text-[#222222] font-bold text-[12.5px] sm:text-[13px] mb-0 leading-snug">Construction</h5>
                    <p className="text-[#6c757d] text-[11.5px] sm:text-[12px] m-0 leading-snug">Mivan Technology</p>
                  </div>
                </div>

                {/* Fact 5: Status */}
                <div className="flex items-start gap-2 sm:gap-2.5">
                  <div className="mt-0.5 flex-shrink-0 text-[#AF751C]">
                    <i className="fa-solid fa-calendar-check text-[15px]"></i>
                  </div>
                  <div>
                    <h5 className="text-[#222222] font-bold text-[12.5px] sm:text-[13px] mb-0 leading-snug">Status</h5>
                    <p className="text-[#6c757d] text-[11.5px] sm:text-[12px] m-0 leading-snug text-emerald-600 font-semibold">Near Possession</p>
                  </div>
                </div>

                {/* Fact 6: Pricing */}
                <div className="flex items-start gap-2 sm:gap-2.5">
                  <div className="mt-0.5 flex-shrink-0 text-[#AF751C]">
                    <i className="fa-solid fa-tag text-[15px]"></i>
                  </div>
                  <div>
                    <h5 className="text-[#222222] font-bold text-[12.5px] sm:text-[13px] mb-0 leading-snug">Pricing</h5>
                    <p className="text-[#6c757d] text-[11.5px] sm:text-[12px] m-0 leading-snug">₹21,000/sq.ft. (After ₹1,000 Discount)</p>
                  </div>
                </div>

                {/* Fact 7: Developer */}
                <div className="flex items-start gap-2 sm:gap-2.5">
                  <div className="mt-0.5 flex-shrink-0 text-[#AF751C]">
                    <i className="fa-solid fa-city text-[15px]"></i>
                  </div>
                  <div>
                    <h5 className="text-[#222222] font-bold text-[12.5px] sm:text-[13px] mb-0 leading-snug">Developer</h5>
                    <p className="text-[#6c757d] text-[11.5px] sm:text-[12px] m-0 leading-snug font-semibold text-[#111]">Antriksh Group</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Overview
