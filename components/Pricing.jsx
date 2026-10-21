'use client'
import React from 'react'

const pricingData = [
  {
    type: '3 BHK + Study',
    area: '2075 Sq.Ft.',
    price: '₹4.35 Cr*',
    desc: 'Corner apartment with wrap-around balcony',
  },
  {
    type: '3 BHK + Servant',
    area: '2375 Sq.Ft.',
    price: 'On Request',
    desc: 'Smart layout with additional servant\'s room',
  },
  {
    type: '4 BHK + Utility',
    area: '3250 Sq.Ft.',
    price: 'On Request',
    desc: 'Expansive residence with large balconies',
  },
  {
    type: 'Duplex Penthouse',
    area: '6500 Sq.Ft.',
    price: 'On Request',
    desc: 'Signature home with private terrace views',
  },
]

const Pricing = ({ setIsOpen }) => {
  return (
    <section id="pricing" className="w-full py-10 md:py-14 font-poppins overflow-hidden" style={{ background: '#fafafa' }}>
      <div className="container mx-auto px-4 sm:px-6" style={{ maxWidth: '1200px' }}>
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-12" data-aos="fade-up">
          <span className="text-[#AF751C] font-bold text-[13px] sm:text-[14px] tracking-[2px] uppercase mb-2.5 block">
            PRICE LIST
          </span>
          <h2 className="text-[#111111] text-[26px] sm:text-[32px] md:text-[38px] font-extrabold m-0 leading-tight md:whitespace-nowrap">
            Apartment Options & Special Launch Pricing
          </h2>
        </div>

        {/* Intro */}
        <p className="text-center text-[#6c757d] text-[15px] mt-[-28px] mb-8" data-aos="fade-up">Choose from spacious 3 &amp; 4 BHK residences designed for privacy, ventilation, and premium living.</p>

        {/* ── MOBILE / SMALL DEVICE CARDS (Visible below md breakpoint) ── */}
        <div className="flex flex-col gap-6 md:hidden">
          {pricingData.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index * 100).toString()}
              className="bg-white rounded-[20px] p-6 sm:p-7 border border-[#F0E9D8] shadow-[0_8px_30px_rgba(175, 117, 28,0.06)] relative overflow-hidden flex flex-col justify-between"
              style={{ borderTop: '4px solid #AF751C' }}
            >
              <div>
                {/* Top Header: Unit Type & Area Tag */}
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#f1f5f9] mb-4">
                  <h3 className="text-[#1a1a1a] font-black text-[20px] sm:text-[22px] m-0">
                    {item.type}
                  </h3>
                  <span className="bg-[#F0E9D8] text-[#AF751C] text-[12.5px] sm:text-[13.5px] font-extrabold px-3.5 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                    {item.area}
                  </span>
                </div>

                {/* Estimated Price Block */}
                <div className="mb-4">
                  <span className="text-[11.5px] text-[#6c757d] font-bold uppercase tracking-wider block mb-1">
                    ESTIMATED PRICE
                  </span>
                  <div className="text-[#222222] font-black text-[24px] tracking-tight">
                    {item.price}
                  </div>
                </div>
                {/* Description */}
                {item.desc && (
                  <p className="text-[#6c757d] text-[13px] font-medium mb-4 leading-snug">{item.desc}</p>
                )}
              </div>

              <button
                onClick={() => setIsOpen(true)}
                className="w-full py-3.5 rounded-[50px] font-bold text-[15px] transition-all duration-300 shadow-[0_6px_20px_rgba(175, 117, 28,0.35)] active:scale-[0.98] cursor-pointer"
                style={{
                  background: '#AF751C',
                  color: '#ffffff',
                  border: '2px solid #AF751C',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = '#AF751C';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#AF751C';
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                Get Full Price Sheet
              </button>
            </div>
          ))}
        </div>

        {/* ── DESKTOP TABLE (Visible on md and above) ── */}
        <div className="hidden md:block bg-white rounded-[16px] shadow-[0_10px_35px_rgba(0,0,0,0.04)] overflow-x-auto border border-[#e5e7eb]" data-aos="fade-up">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#1a1a1a] text-white">
                <th className="py-4 px-4 lg:px-6 font-bold text-[13px] tracking-wider uppercase border-b-0 text-left whitespace-nowrap">UNIT TYPE</th>
                <th className="py-4 px-3 lg:px-4 font-bold text-[13px] tracking-wider uppercase border-b-0 text-center whitespace-nowrap">SIZE</th>
                <th className="py-4 px-3 lg:px-4 font-bold text-[13px] tracking-wider uppercase border-b-0 text-center whitespace-nowrap">ESTIMATED PRICE</th>
                <th className="py-4 px-4 lg:px-6 font-bold text-[13px] tracking-wider uppercase border-b-0 text-left">DESCRIPTION</th>
                <th className="py-4 px-4 lg:px-6 font-bold text-[13px] tracking-wider uppercase border-b-0 text-center whitespace-nowrap">ACTION</th>
              </tr>
            </thead>
            <tbody className="text-[#222222] divide-y divide-[#f0f0f0]">
              {pricingData.map((item, index) => (
                <tr key={index} className="hover:bg-[#fafafa] transition-colors duration-200">
                  <td className="py-5 px-4 lg:px-6 font-extrabold text-[16.5px] text-[#1a1a1a] text-left whitespace-nowrap">{item.type}</td>
                  <td className="py-5 px-3 lg:px-4 text-[15px] font-semibold text-[#495057] text-center whitespace-nowrap">{item.area}</td>
                  <td className="py-5 px-3 lg:px-4 font-black text-[17px] text-[#222222] text-center whitespace-nowrap">{item.price}</td>
                  <td className="py-5 px-4 lg:px-6 text-[13.5px] text-[#6c757d] font-medium text-left leading-normal">{item.desc || ''}</td>
                  <td className="py-5 px-4 lg:px-6 text-center whitespace-nowrap">
                    <button 
                      onClick={() => setIsOpen(true)}
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-[50px] font-bold text-[13.5px] transition-all duration-300 shadow-[0_4px_14px_rgba(175, 117, 28,0.3)] cursor-pointer"
                      style={{
                        background: '#AF751C',
                        color: '#ffffff',
                        border: '2px solid #AF751C',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = '#ffffff';
                        e.currentTarget.style.color = '#AF751C';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(175, 117, 28,0.45)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = '#AF751C';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(175, 117, 28,0.3)';
                      }}
                    >
                      Get Full Price Sheet
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note from microsite document */}
        <div className="mt-8 text-center bg-white border border-[#F0E9D8] rounded-xl p-4 sm:p-5 shadow-xs max-w-2xl mx-auto" data-aos="fade-up">
          <p className="text-xs sm:text-sm font-semibold text-[#111111] m-0 mb-1">
            <span className="text-[#AF751C] font-bold uppercase tracking-wider mr-1">Launch Price:</span>
            ₹22,000 – ₹1,000 = <strong className="text-[#AF751C]">₹21,000/sq.ft.</strong>
          </p>
          <p className="text-[11.5px] sm:text-xs text-[#6c757d] m-0">
            *Prices are indicative and subject to change. Government taxes &amp; charges extra.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Pricing
