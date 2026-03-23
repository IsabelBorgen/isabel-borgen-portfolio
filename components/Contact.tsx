'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transition: { duration: 0.65, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as any },
    }),
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const form = e.currentTarget
    const data = new FormData(form)
    // [REPLACE with your Formspree endpoint: https://formspree.io/f/YOUR_ENDPOINT_ID]
    const res = await fetch('https://formspree.io/f/xvgzawkb', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
    setSubmitting(false)
    if (res.ok) {
      setSubmitted(true)
      form.reset()
    }
  }

  return (
    <section
      id="contact"
      className="section-pad"
      style={{ background: 'var(--card)', borderTop: '1px solid var(--border)' }}
    >
      <div className="container-xl" ref={ref}>
        {/* Label */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="flex items-center gap-3 mb-6"
        >
          <span className="divider-line" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--muted)]">
            Contact
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-tight text-[var(--fg)] mb-6"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              Let&apos;s Build Something
              <br />
              <em className="text-[var(--primary)] not-italic">That Performs</em>
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="text-[var(--muted)] mb-8 leading-relaxed text-sm"
            >
              Currently seeking a 6-month digital marketing internship. Open to full‑time thereafter.
              Let&apos;s talk about how I can help.
            </motion.p>

            {/* Contact details */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="flex flex-col gap-4"
            >
              {[
                {
                  label: 'Email',
                  value: 'isabel.borgen99@gmail.com',
                  href: 'mailto:isabel.borgen99@gmail.com',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                },
                {
                  label: 'LinkedIn',
                  value: '/in/isabelborgen-45358523b',
                  href: 'https://www.linkedin.com/in/isabelborgen-45358523b',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  label: 'Location',
                  value: 'Barcelona, Spain',
                  href: null,
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                },
              ].map(({ label, value, href, icon }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-[var(--primary)]" style={{ background: 'color-mix(in srgb, var(--primary) 10%, transparent)' }}>
                    {icon}
                  </div>
                  <div>
                    <div className="text-xs text-[var(--muted)] mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-sm font-medium text-[var(--fg)] hover:text-[var(--primary)] transition-colors cursor-pointer">
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-[var(--fg)]">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            {submitted ? (
              <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg)] text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'color-mix(in srgb, var(--primary) 12%, transparent)', color: 'var(--primary)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[var(--fg)] mb-2" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.4rem' }}>
                  Message sent!
                </h3>
                <p className="text-sm text-[var(--muted)]">Thank you for reaching out. Isabel will be in touch soon.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 md:p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg)] flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="text-xs font-medium text-[var(--muted)] tracking-wide">
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--fg)] text-sm placeholder-[var(--muted)] outline-none focus:border-[var(--primary)] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="text-xs font-medium text-[var(--muted)] tracking-wide">
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--fg)] text-sm placeholder-[var(--muted)] outline-none focus:border-[var(--primary)] transition-colors"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="text-xs font-medium text-[var(--muted)] tracking-wide">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your team, the role, or just say hello..."
                    className="px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--fg)] text-sm placeholder-[var(--muted)] outline-none focus:border-[var(--primary)] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl text-sm font-medium text-[var(--bg)] disabled:opacity-60 transition-opacity cursor-pointer hover:opacity-90"
                  style={{ background: 'var(--primary)' }}
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
