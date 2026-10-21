'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import LeadForm from './LeadForm'
import { heroSlides } from '../lib/images'
import { RERA_NO, PHONE_NUMBER } from '../lib/config'

// Slides extended with clones at both ends for seamless infinite circular loop
const extendedSlides = [
  heroSlides[heroSlides.length - 1],
  ...heroSlides,
  heroSlides[0],
]

const Hero = ({ setIsOpen }) => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(true)

  // Infinite circular auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setCurrentIndex((prev) => prev + 1)
    }, 3800)
    return () => clearInterval(timer)
  }, [])

  const handleTransitionEnd = () => {
    if (currentIndex >= extendedSlides.length - 1) {
      // Reached the clone at the end -> jump back to real first slide seamlessly
      setIsTransitioning(false)
      setCurrentIndex(1)
      setTimeout(() => {
        setIsTransitioning(true)
      }, 50)
    } else if (currentIndex <= 0) {
      // Reached the clone at start -> jump back to real last slide seamlessly
      setIsTransitioning(false)
      setCurrentIndex(extendedSlides.length - 2)
      setTimeout(() => {
        setIsTransitioning(true)
      }, 50)
    }
  }

  // Active slide index (0 to 3) for highlighting tabs
  const activeSlide = (currentIndex - 1 + heroSlides.length) % heroSlides.length

  return (
    <section
      id="home"
      className="hero-section relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF8F5 100%)',
        fontFamily: 'var(--font-poppins), Poppins, sans-serif',
      }}
    >
      <div className="w-full pt-[82px] pb-8 sm:pt-[88px] sm:pb-10 lg:pt-[98px] lg:pb-12 relative z-10">

        {/* Ambient subtle luxury gold glow */}
        <div className="absolute top-[-60px] right-[-40px] w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#AF751C]/06 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-60px] left-[-60px] w-72 sm:w-[450px] h-72 sm:h-[450px] bg-[#AF751C]/06 rounded-full blur-[90px] pointer-events-none" />

        <div className="container mx-auto px-3.5 sm:px-6" style={{ maxWidth: '1380px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">

            {/* ══════════════════════════════════════════════════════
                LEFT 50% (7 cols on lg): Pure Visual & Info
               ══════════════════════════════════════════════════════ */}
            <div className="lg:col-span-7 flex flex-col justify-between">

              {/* Heading & Brand Identity */}
              <div className="mb-2.5 sm:mb-3.5">
                {/* Eyebrow Developer Badge */}
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[1.5px] font-bold text-[#AF751C] bg-[#AF751C]/15 border border-[#AF751C]/35 px-2.5 py-0.5 rounded-full">
                    By Antriksh Group
                  </span>
                  <span className="text-gray-400 hidden xs:inline">•</span>
                  <span className="text-[11px] sm:text-xs text-[#555555] font-semibold tracking-wide">
                    A Landmark Residential Address
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-[#111111] font-black tracking-tight leading-[1.08] text-[26px] xs:text-[32px] sm:text-[38px] md:text-[42px] m-0">
                  Antriksh Central Avenue
                  <span className="block text-[14px] sm:text-[17px] md:text-[19px] font-semibold text-[#333333] tracking-normal mt-1 font-sans">
                    The Gateway of Luxury &amp; Accessibility
                  </span>
                </h1>

                {/* Subheadline (Location & Identity) */}
                <p className="flex flex-wrap items-center gap-2 text-xs sm:text-[13px] text-[#333333] font-medium mt-1.5 mb-2.5 leading-normal">
                  <span className="text-[#AF751C] font-bold">Exclusive Luxury Residences</span>
                  <span className="text-gray-400">|</span>
                  <span className="inline-flex items-center gap-1.5 text-[#444444]">
                    <i className="fas fa-location-dot text-[#AF751C] text-[11px]" />
                    <span>Bang on Subhash Chowk, Sector 33, Gurugram</span>
                  </span>
                </p>

                {/* Offer Line (Only unique offer — Price, Typology & Status already in right strip) */}
                <div className="p-2.5 sm:px-3.5 sm:py-2 rounded-xl bg-white/90 border border-[#AF751C]/40 shadow-sm backdrop-blur-md">
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-[12.5px]">
                    <span className="font-bold text-[#AF751C] flex items-center gap-1.5">
                      <i className="fas fa-tag text-[10px] text-[#AF751C]" />
                      Special Launch Price – ₹21,000/sq.ft.
                    </span>
                    <span className="bg-emerald-600/15 text-emerald-800 font-bold text-[10.5px] sm:text-[11px] px-2 py-0.5 rounded border border-emerald-600/30">
                      ₹1,000/sq.ft. Discount on Launch
                    </span>
                    <span className="text-gray-400 hidden sm:inline">•</span>
                    <span className="text-[#333333] font-semibold">
                      Limited Inventory Available
                    </span>
                  </div>
                </div>
              </div>

              {/* ── 100% CLEAN IMAGE (Infinite circular carousel) ── */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-black/10 shadow-2xl bg-black">
                {/* Visual Suggestion Overlay: Top-Left Floating Badge */}
                <div className="absolute top-3 left-3 z-20 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider text-white border border-white/20 shadow-lg flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#AF751C] animate-ping"></span>
                  <span>Luxury. Location. Limited Inventory.</span>
                </div>

                <div 
                  onTransitionEnd={handleTransitionEnd}
                  className={`flex w-full ${
                    isTransitioning ? 'transition-transform duration-700 ease-in-out' : 'transition-none'
                  }`}
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {extendedSlides.map((slide, idx) => (
                    <div 
                      key={`${slide.id}-${idx}`} 
                      className="relative w-full h-[220px] xs:h-[250px] sm:h-[300px] md:h-[325px] lg:h-[340px] flex-shrink-0"
                    >
                      <Image
                        src={slide.img}
                        alt={slide.name}
                        fill
                        priority={idx === 1}
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 55vw"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* ── SLIDE SELECTOR TABS (Minimalist View Switcher) ── */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
                {heroSlides.map((slide, idx) => {
                  const isActive = activeSlide === idx
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => {
                        setIsTransitioning(true)
                        setCurrentIndex(idx + 1)
                      }}
                      className={`py-2 px-2 rounded-lg text-xs font-bold transition-all cursor-pointer text-center border whitespace-nowrap ${
                        isActive
                          ? 'bg-[#AF751C] text-white border-[#AF751C] shadow-md'
                          : 'bg-white text-[#1a1a1a] border-[#e2d5c0] hover:bg-[#FAF1E2] hover:text-[#AF751C] shadow-sm'
                      }`}
                    >
                      <span>{slide.name}</span>
                    </button>
                  )
                })}
              </div>

            </div>

            {/* ══════════════════════════════════════════════════════
                RIGHT 50% (5 cols on lg): Conversion Console Card
               ══════════════════════════════════════════════════════ */}
            <div className="lg:col-span-5 mt-2 lg:mt-0 flex flex-col">

              {/* Key Quick Specs Strip (Moved above the form) */}
              <div className="flex flex-row flex-wrap items-center justify-between gap-x-2 gap-y-3 sm:gap-4 lg:gap-5 p-2.5 sm:p-4 mb-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#AF751C]/35 text-xs sm:text-sm shadow-sm w-full">
                <div className="flex-shrink-0">
                  <span className="text-slate-500 font-bold text-[10px] sm:text-[11px] uppercase tracking-wider block mb-0.5">Price Starts At</span>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#AF751C] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#AF751C]"></span>
                    </span>
                    <strong className="blink-price font-black text-[14.5px] sm:text-[18.5px] whitespace-nowrap tracking-tight text-[#AF751C]">
                      ₹ 4.25 Cr*
                    </strong>
                  </div>
                </div>
                <div className="border-l border-slate-200 pl-2 sm:pl-4 lg:pl-5 flex-shrink-0">
                  <span className="text-slate-500 font-bold text-[10px] sm:text-[11px] uppercase tracking-wider block mb-0.5">Typology</span>
                  <strong className="text-slate-900 font-black text-[13px] sm:text-[15px] whitespace-nowrap">3 &amp; 4 BHK</strong>
                </div>
                <div className="border-l border-slate-200 pl-2 sm:pl-4 lg:pl-5 flex-shrink-0">
                  <span className="text-slate-500 font-bold text-[10px] sm:text-[11px] uppercase tracking-wider block mb-0.5">Status</span>
                  <strong className="text-emerald-700 font-black text-[13px] sm:text-[15px] whitespace-nowrap">Near Possession</strong>
                </div>
              </div>

              <div
                className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 relative overflow-hidden bg-white shadow-sm"
                style={{
                  background: '#FFFFFF',
                  border: '1.5px solid rgba(175, 117, 28, 0.35)',
                  boxShadow: '0 8px 30px rgba(175, 117, 28, 0.08)',
                  borderTop: '4px solid #AF751C',
                }}
              >
                {/* Header */}
                <div className="text-center mb-4 sm:mb-5">
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-black text-slate-900 tracking-tight m-0">
                    Get Instant Cost Sheet &amp; Plans
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-1 font-normal">
                    Delivered on WhatsApp &amp; Email in 60s
                  </p>
                </div>

                {/* LeadForm */}
                <LeadForm formName="Antriksh Central Avenue Form" btnText="Submit" />

                {/* ── 3 CTA BUTTONS BAR ── */}
                <div className="mt-3.5 pt-3.5 border-t border-slate-200">
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen && setIsOpen(true)}
                      className="py-2.5 px-1.5 rounded-xl text-xs sm:text-[13px] font-bold text-center bg-[#AF751C] text-white border border-[#AF751C] hover:bg-[#915f14] hover:border-[#915f14] shadow-md hover:shadow-[0_8px_20px_rgba(175,117,28,0.35)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                    >
                      <i className="fas fa-paper-plane text-[10px]"></i>
                      <span>Enquire Now</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsOpen && setIsOpen(true)}
                      className="py-2.5 px-1.5 rounded-xl text-xs sm:text-[13px] font-bold text-center bg-[#AF751C] text-white border border-[#AF751C] hover:bg-[#915f14] hover:border-[#915f14] shadow-md hover:shadow-[0_8px_20px_rgba(175,117,28,0.35)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                    >
                      <i className="fas fa-calendar-check text-[11px]"></i>
                      <span>Schedule Visit</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsOpen && setIsOpen(true)}
                      className="py-2.5 px-1.5 rounded-xl text-xs sm:text-[13px] font-bold text-center bg-[#AF751C] text-white border border-[#AF751C] hover:bg-[#915f14] hover:border-[#915f14] shadow-md hover:shadow-[0_8px_20px_rgba(175,117,28,0.35)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                    >
                      <i className="fas fa-file-arrow-down text-[11px]"></i>
                      <span>Brochure</span>
                    </button>
                  </div>

                  {/* Direct Call Desk link */}
                  <div className="mt-2.5 text-center">
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="inline-flex items-center gap-1.5 text-[11.5px] text-slate-600 hover:text-[#AF751C] font-medium transition-colors"
                    >
                      <i className="fas fa-phone text-[#AF751C] text-[10px]" />
                      <span>Sales Desk: <strong className="text-slate-900">+91 9718344024</strong></span>
                    </a>
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

export default Hero
