'use client'
import React from 'react'
import Link from 'next/link'
import { PHONE_NUMBER, PHONE_DISPLAY, RERA_NO } from '../lib/config'

const Footer = ({ setIsOpen }) => (
  <footer style={{ background: '#0a0a0a', color: '#ffffff', fontFamily: 'var(--font-poppins), Poppins, sans-serif' }} className="py-14 sm:py-16 px-4 sm:px-6 md:px-10 border-t border-white/10">
    <div className="max-w-[1150px] mx-auto flex flex-col items-center text-center">

      {/* ── SECTION 8: Headline ── */}
      <h2 
        data-aos="fade-up"
        className="text-white font-extrabold text-[26px] sm:text-[34px] md:text-[40px] leading-tight mb-3"
      >
        Book Your Residence at the Special Launch Price
      </h2>

      {/* ── SECTION 8: Subheadline ── */}
      <p 
        data-aos="fade-up" data-aos-delay="50"
        className="text-[#d1d5db] font-medium text-[14px] sm:text-[16px] md:text-[17px] max-w-3xl leading-relaxed mb-8"
      >
        Limited 3 &amp; 4 BHK Luxury Residences Starting ₹4.25 Cr | Near Possession | ₹1,000/sq.ft. Launch Discount
      </p>

      {/* ── SECTION 8: CTA Buttons ── */}
      <div 
        data-aos="fade-up" data-aos-delay="100"
        className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8"
      >
        <button
          type="button"
          onClick={() => setIsOpen && setIsOpen(true)}
          className="px-6 sm:px-8 py-3 rounded-full font-bold text-[14px] sm:text-[15px] transition-all duration-300 shadow-[0_4px_16px_rgba(175,117,28,0.4)] hover:-translate-y-0.5 cursor-pointer"
          style={{
            background: '#AF751C',
            color: '#ffffff',
            border: '2px solid #AF751C',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#ffffff';
            e.currentTarget.style.borderColor = '#ffffff';
            e.currentTarget.style.color = '#AF751C';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#AF751C';
            e.currentTarget.style.borderColor = '#AF751C';
            e.currentTarget.style.color = '#ffffff';
          }}
        >
          Enquire Now
        </button>

        <button
          type="button"
          onClick={() => setIsOpen && setIsOpen(true)}
          className="px-6 sm:px-8 py-3 rounded-full font-bold text-[14px] sm:text-[15px] transition-all duration-300 shadow-[0_4px_16px_rgba(175,117,28,0.4)] hover:-translate-y-0.5 cursor-pointer"
          style={{
            background: '#AF751C',
            color: '#ffffff',
            border: '2px solid #AF751C',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#ffffff';
            e.currentTarget.style.borderColor = '#ffffff';
            e.currentTarget.style.color = '#AF751C';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#AF751C';
            e.currentTarget.style.borderColor = '#AF751C';
            e.currentTarget.style.color = '#ffffff';
          }}
        >
          Download Brochure
        </button>

        <button
          type="button"
          onClick={() => setIsOpen && setIsOpen(true)}
          className="px-6 sm:px-8 py-3 rounded-full font-bold text-[14px] sm:text-[15px] transition-all duration-300 shadow-[0_4px_16px_rgba(175,117,28,0.4)] hover:-translate-y-0.5 cursor-pointer"
          style={{
            background: '#AF751C',
            color: '#ffffff',
            border: '2px solid #AF751C',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#ffffff';
            e.currentTarget.style.borderColor = '#ffffff';
            e.currentTarget.style.color = '#AF751C';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#AF751C';
            e.currentTarget.style.borderColor = '#AF751C';
            e.currentTarget.style.color = '#ffffff';
          }}
        >
          Schedule Site Visit
        </button>
      </div>

      {/* ── SECTION 8: Contact Details with Calling Contact ── */}
      <div 
        data-aos="fade-up" data-aos-delay="150"
        className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-white/[0.06] border border-white/15 px-6 py-3 rounded-full mb-10 text-[14px] sm:text-[15px]"
      >
        <span className="flex items-center gap-1.5 text-neutral-300">
          <i className="fa-solid fa-location-dot text-[#AF751C]"></i>
          Sector 33, Gurugram
        </span>
        <span className="text-white/20 hidden sm:inline">|</span>
        <a 
          href={`tel:${PHONE_NUMBER}`} 
          className="flex items-center gap-1.5 text-white hover:text-[#AF751C] font-bold transition-colors duration-200"
        >
          <i className="fa-solid fa-phone text-[#AF751C]"></i>
          {PHONE_DISPLAY}
        </a>
      </div>

      {/* ── 2nd SS Content: RERA Number Box ── */}
      <div 
        data-aos="fade-up" data-aos-delay="200"
        className="inline-flex flex-wrap items-center justify-center bg-white/[0.05] border border-white/15 rounded-[8px] py-3 px-6 sm:px-8 shadow-inner mb-6 transition-all hover:border-white/30"
      >
        <span className="text-neutral-400 text-[14px] sm:text-[15px] mr-2">
          RERA No :
        </span>
        <span className="text-white font-bold text-[14px] sm:text-[15.5px] tracking-wide">
          {RERA_NO}
        </span>
      </div>

      {/* ── 2nd SS Content: Full Width Horizontal Divider ── */}
      <div className="w-full border-t border-white/10 my-8" />

      {/* ── 2nd SS Content: Privacy Policy (Right-Aligned) ── */}
      <div className="w-full flex justify-end text-[13.5px] sm:text-[14px] mb-4">
        <Link
          href="/privacy-policy"
          prefetch={false}
          className="text-[#AF751C] hover:underline font-medium transition-colors duration-200"
        >
          Privacy Policy
        </Link>
      </div>

      {/* ── 2nd SS Content: Detailed Legal Disclaimer ── */}
      <p className="w-full text-left text-neutral-500 text-[12px] leading-[1.75] m-0">
        <strong className="text-[#AF751C]">Disclaimer:</strong> This is not the official website of the developer. The information depicted herein, including master plans, floor plans, furniture layout, fittings, illustrations, specifications, designs, dimensions, rendered views, colours, amenities and facilities etc., are subject to change without notification as may be required by the relevant authorities or the Developer&apos;s architect. This advertisement is an invitation to offer and shall not be construed as an offer or contract. * Prices subject to change without notice. All taxes extra as applicable.
      </p>

    </div>
  </footer>
)

export default Footer
