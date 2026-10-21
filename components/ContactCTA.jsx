'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { PROJECT_ID, PROJECT_NAME, API_ENDPOINT, SHEET_NAME, SECRET_KEY, CITY_DISPLAY, PHONE_DISPLAY, PHONE_NUMBER } from '../lib/config'
import { buildTrackingFields } from '../lib/formMeta'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

const ContactCTA = ({ setIsOpen }) => {
  const [form, setForm] = useState({ fullname: '', phone: '', email: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handle = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: name === 'phone' ? value.replace(/\D/g, '') : value })
  }

  const submit = async (e) => {
    e.preventDefault()
    if (form.phone.length !== 10) { setError('Enter valid 10-digit number'); return }
    if (!/^[6-9]\d{9}$/.test(form.phone)) { setError('Phone number must start with 6, 7, 8, or 9'); return }
    setError(''); setLoading(true)
    const tracking = buildTrackingFields()
    const payload = new FormData()
    payload.append('fullname', form.fullname)
    payload.append('phone', form.phone)
    payload.append('email', form.email || '')
    payload.append('projectId', PROJECT_ID)
    payload.append('projectName', PROJECT_NAME)
    payload.append('form_name', 'Enquiry CTA Section Form')
    payload.append('sheet_name', SHEET_NAME)
    payload.append('secret', SECRET_KEY)
    payload.append('city', CITY_DISPLAY)
    Object.entries(tracking).forEach(([k, v]) => payload.append(k, v))
    try {
      const res = await fetch(API_ENDPOINT, { method: 'POST', body: payload })
      const data = await res.json()
      if (data.status) {
        setSuccess(true)
        if (typeof window !== 'undefined') {
          window.dataLayer = window.dataLayer || []
          const nameParts = form.fullname.trim().split(' ')
          window.dataLayer.push({
            event: 'lead_submit_success', form_name: 'Enquiry CTA Section Form',
            user_data: {
              email: form.email.trim() || undefined, phone: `+91${form.phone}`,
              first_name: nameParts[0] || '', last_name: nameParts.slice(1).join(' ') || ''
            }
          })
        }
      } else setError(data.msg || 'Something went wrong.')
    } catch { setError('Network error. Please try again.') }
    finally { setLoading(false) }
  }

  return (
    <section id="contact-cta" className="py-12 sm:py-16 px-4 bg-gradient-to-b from-gray-50 to-white font-poppins border-t border-gray-100">
      <div className="max-w-[1100px] mx-auto text-center">

        {/* SECTION 8: Headline & Subheadline */}
        <div className="text-center mb-8 sm:mb-10" data-aos="fade-up">
          <span className="text-[#AF751C] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-2 block">
            LIMITED TIME LAUNCH OPPORTUNITY
          </span>
          <h2 className="text-[#111111] text-[26px] sm:text-[34px] md:text-[40px] font-extrabold m-0 leading-tight">
            Book Your Residence at the Special Launch Price
          </h2>
          <p className="text-[#4b5563] text-[14px] sm:text-[16px] font-medium max-w-3xl mx-auto mt-3 leading-relaxed">
            Limited 3 &amp; 4 BHK Luxury Residences Starting ₹4.25 Cr | Near Possession | ₹1,000/sq.ft. Launch Discount
          </p>

          {/* CTA Buttons row */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <button
              type="button"
              onClick={() => setIsOpen && setIsOpen(true)}
              className="px-6 sm:px-8 py-3 rounded-full font-bold text-[14px] bg-[#AF751C] text-white hover:bg-[#915f14] transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              Enquire Now
            </button>
            <button
              type="button"
              onClick={() => setIsOpen && setIsOpen(true)}
              className="px-6 sm:px-8 py-3 rounded-full font-bold text-[14px] bg-white text-[#111] border border-gray-300 hover:border-[#AF751C] hover:text-[#AF751C] transition-all shadow-sm cursor-pointer"
            >
              Download Brochure
            </button>
            <button
              type="button"
              onClick={() => setIsOpen && setIsOpen(true)}
              className="px-6 sm:px-8 py-3 rounded-full font-bold text-[14px] bg-white text-[#111] border border-gray-300 hover:border-[#AF751C] hover:text-[#AF751C] transition-all shadow-sm cursor-pointer"
            >
              Schedule Site Visit
            </button>
          </div>

          {/* Contact Details */}
          <div className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm text-[#6c757d] font-semibold bg-white px-4 py-2 rounded-full border border-gray-200 shadow-xs">
            <i className="fa-solid fa-location-dot text-[#AF751C]"></i>
            <span>Sector 33, Gurugram</span>
            <span className="text-gray-300">|</span>
            <a href={`tel:${PHONE_NUMBER}`} className="text-[#111111] hover:text-[#AF751C] flex items-center gap-1 font-bold">
              <i className="fa-solid fa-phone text-[#AF751C]"></i>
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        {/* Lead Form Card */}
        {success ? (
          <div style={{ padding: '32px 0', textAlign: 'center' }} data-aos="fade-up">
            <div style={{
              width: '56px', height: '56px', borderRadius: '50%', background: '#F0E9D8',
              display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px'
            }}>
              <svg width="28" height="28" fill="none" stroke="#AF751C" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p style={{ fontWeight: '700', fontSize: '18px', color: '#111', fontFamily: F_SANS }}>Thank You!</p>
            <p style={{ color: '#666', fontSize: '14px', marginTop: '6px', fontFamily: F_SANS }}>Our team will contact you shortly.</p>
          </div>
        ) : (
          <div className="bg-white rounded-[20px] shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-[#F0E9D8] overflow-hidden max-w-[540px] mx-auto text-left" data-aos="fade-up">
            <div className="bg-[#1a1a1a] p-5 text-white">
              <h3 className="font-extrabold text-[18px] sm:text-[20px] text-white m-0">
                Register for Priority Booking
              </h3>
              <p className="text-xs text-white/70 mt-1 m-0">
                Instant call back with complete cost sheet &amp; floor plan brochure
              </p>
            </div>

            <div className="p-6">
              <form onSubmit={submit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Full Name <span className="text-[#AF751C]">*</span>
                  </label>
                  <input name="fullname" required value={form.fullname} onChange={handle} placeholder="Enter your full name"
                    className="form-input w-full" style={{ fontFamily: F_SANS }} />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input name="email" value={form.email} onChange={handle} placeholder="Email Id (optional)"
                    className="form-input w-full" style={{ fontFamily: F_SANS }} />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Mobile Number <span className="text-[#AF751C]">*</span>
                  </label>
                  <input name="phone" required value={form.phone} onChange={handle}
                    placeholder="10-digit mobile number" maxLength={10}
                    className="form-input w-full" style={{ fontFamily: F_SANS }} />
                </div>

                {error && <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>}

                <label className="flex items-start gap-2 cursor-pointer text-left">
                  <input type="checkbox" required defaultChecked style={{ accentColor: '#AF751C', marginTop: '2px', flexShrink: 0 }} />
                  <span className="text-[12px] text-gray-500 leading-normal">
                    I agree to receive updates as per the <Link href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</Link>.
                  </span>
                </label>

                <button type="submit" disabled={loading}
                  className="w-full py-3.5 rounded-full font-bold text-sm bg-[#AF751C] text-white hover:bg-[#915f14] transition-colors shadow-md cursor-pointer flex items-center justify-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  {loading ? 'Submitting...' : 'Submit Enquiry'}
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default ContactCTA
