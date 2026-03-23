'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const certBadges = [
  {
    name: 'Google Ads Search',
    issuer: 'Google',
    year: '2024',
    color: '#4285F4',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    name: 'Google Ads Display',
    issuer: 'Google',
    year: '2024',
    color: '#34A853',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    name: 'Google Analytics',
    issuer: 'Google',
    year: '2024',
    color: '#FBBC04',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
]

export default function Certificates() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transition: { duration: 0.65, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as any },
    }),
  }

  return (
    <section id="certificates" className="section-pad" style={{ background: 'var(--bg)' }}>
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
            Credentials
          </span>
        </motion.div>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-[clamp(2rem,4.5vw,3.2rem)] font-light leading-tight text-[var(--fg)] mb-14"
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
        >
          Certificates & Awards
        </motion.h2>

        {/* Award highlight */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="p-6 md:p-10 rounded-2xl border border-[var(--border)] mb-10 flex flex-col md:flex-row items-start md:items-center gap-6 hover:shadow-md transition-shadow duration-300"
          style={{ background: 'linear-gradient(135deg, color-mix(in srgb, var(--accent) 8%, var(--bg)), var(--bg))' }}
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'color-mix(in srgb, var(--accent) 15%, transparent)' }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--accent)" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div>
            <div
              className="text-2xl font-semibold text-[var(--fg)] mb-1"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.6rem' }}
            >
              Employee of the Year 2024
            </div>
            <div className="text-sm text-[var(--muted)] mb-2">Mint Media · Bergen, Norway</div>
            <p className="text-sm text-[var(--muted)] leading-relaxed max-w-xl">
              Recognized for groundbreaking performance in lead generation and setting a new standard
              for the entire client advisory team.
            </p>
          </div>
        </motion.div>

        {/* Certificate badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {certBadges.map((cert, i) => (
            <motion.div
              key={cert.name}
              custom={i + 3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}
              className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] cursor-default transition-all duration-200"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ color: cert.color, background: `${cert.color}18` }}
              >
                {cert.icon}
              </div>
              <div
                className="text-base font-semibold text-[var(--fg)] mb-1"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.15rem' }}
              >
                {cert.name}
              </div>
              <div className="text-xs text-[var(--muted)]">Issued by {cert.issuer} · {cert.year}</div>

              {/* Verified badge */}
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium" style={{ color: cert.color }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Certified
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages strip */}
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mt-10 pt-8 border-t border-[var(--border)]"
        >
          <div className="text-xs tracking-widest uppercase text-[var(--muted)] mb-4">Languages</div>
          <div className="flex flex-wrap gap-4">
            {[
              { lang: 'Norwegian', level: 'Native' },
              { lang: 'Spanish', level: 'Fluent' },
              { lang: 'English', level: 'Fluent' },
            ].map(({ lang, level }) => (
              <div key={lang} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                <span className="text-sm font-medium text-[var(--fg)]">{lang}</span>
                <span className="text-xs text-[var(--muted)]">— {level}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
