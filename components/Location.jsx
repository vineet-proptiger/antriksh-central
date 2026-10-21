'use client'
import React from 'react'

const locationList = [
  {
    title: 'Next to World Trade Center Ecosystem',
    time: 'Next Door',
  },
  {
    title: 'NH-48 and Sohna Road',
    time: '5 mins',
  },
  {
    title: 'Huda City Centre',
    time: '10 mins',
  },
  {
    title: 'Golf Course Extension Road',
    time: '15 mins',
  },
  {
    title: 'IGI Airport',
    time: '30 mins',
  },
  {
    title: 'Surrounded by Top Schools, Hospitals & Retail Hubs',
    time: 'Nearby',
  },
]

const Location = () => {
  return (
    <section id="location" className="location-section py-10 md:py-14 bg-white font-poppins overflow-hidden" style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-[1300px]">
        
        {/* Section Title */}
        <div className="text-center max-w-[850px] mx-auto mb-10 md:mb-12" data-aos="fade-up">
          <span className="text-[#AF751C] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-2.5 block">
            LOCATION ADVANTAGES
          </span>
          <h2 className="text-[#111111] text-[26px] sm:text-[32px] md:text-[38px] font-extrabold m-0 leading-tight mb-3">
            A Location That Keeps You Connected
          </h2>
          <p className="text-[#6c757d] text-[14.5px] sm:text-[15.5px] leading-relaxed m-0">
            Situated right at Subhash Chowk, Sector 33, Antriksh Central Avenue enjoys seamless access to major city corridors, premium business zones, and lifestyle destinations. With the upcoming metro line and proximity to the World Trade Center ecosystem, this address promises both everyday ease and future appreciation.
          </p>
        </div>

        {/* ── 2-Column Grid: Left List (6 Cards) / Right Map (Equal Height) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Left: 6 Location Points */}
          <div className="flex flex-col justify-between gap-2.5 sm:gap-3 h-full">
            {locationList.map((item, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={(index * 40).toString()}
                className="group bg-white hover:bg-[#F0E9D8] border border-[#F0E9D8] hover:border-[#AF751C]/60 rounded-[12px] px-3.5 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(175, 117, 28,0.12)] transition-all duration-200"
              >
                {/* Left side: Red Pin Icon & Title */}
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F0E9D8] group-hover:bg-[#AF751C] text-[#AF751C] group-hover:text-white flex items-center justify-center text-[12px] sm:text-[13px] shrink-0 transition-colors duration-200">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <span className="text-[#1f2937] group-hover:text-[#AF751C] font-semibold text-[13.5px] sm:text-[14.5px] transition-colors duration-200 leading-snug">
                    {item.title}
                  </span>
                </div>

                {/* Right side: Time Badge */}
                <span className="bg-[#F0E9D8] group-hover:bg-[#AF751C] text-[#AF751C] group-hover:text-white font-bold text-[11.5px] sm:text-[12.5px] px-3 py-1 rounded-full whitespace-nowrap transition-colors duration-200 shrink-0 shadow-xs">
                  {item.time}
                </span>
              </div>
            ))}
          </div>

          {/* Right: Google Maps Embed (Exact Equal Height) */}
          <div 
            className="relative w-full h-full min-h-[340px] lg:min-h-0 rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-200 bg-gray-100 flex"
            data-aos="fade-left"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.6787211923106!2d77.03398537549333!3d28.42894967577654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1965bcc03261%3A0x67c9c0fb34fd6c09!2sAntriksh%20Central%20avenue!5e0!3m2!1sen!2sin!4v1792581501464!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Antriksh Central Avenue Google Maps Location"
              className="w-full h-full block flex-1"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Location
