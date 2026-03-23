'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const highlights = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Employee of the Year 2024',
    desc: 'Mint Media, Bergen',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: '3 Languages',
    desc: 'Norwegian · Spanish · English',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Based in Barcelona',
    desc: 'Open to remote & hybrid',
  },
]

const timeline = [
  { year: '2019', label: 'BSc Marketing', org: 'NTNU, Norway' },
  { year: '2021', label: 'Exchange Semester', org: 'Univ. de Cádiz, Spain' },
  { year: '2022', label: 'Media Advisor', org: '5000 Bergen Radio' },
  { year: '2023', label: 'Client Advisor', org: 'Mint Media' },
  { year: '2025', label: 'MSc Candidate', org: 'TBS Barcelona' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transition: { duration: 0.65, delay: i * 0.1, ease: 'easeOut' as any },
    }),
  }

  return (
    <section id="about" className="section-pad" style={{ background: 'var(--bg)' }}>
      <div className="container-xl" ref={ref}>
        {/* Section label */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="flex items-center gap-3 mb-16"
        >
          <span className="divider-line" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--muted)]">
            About
          </span>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* Left — text */}
          <div>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="text-[clamp(2.2rem,5vw,3.8rem)] font-light leading-[1.1] text-[var(--fg)] mb-8"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              Where Data Meets
              <br />
              <em className="text-[var(--primary)] not-italic">Creativity</em>
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="text-[var(--muted)] leading-relaxed mb-6 text-base md:text-[1.05rem]"
            >
              Norwegian-born, Barcelona-based digital marketer with a passion for combining
              analytics, AI, and creative strategy. Currently completing my MSc in Digital
              Marketing & Analytics at TBS Barcelona, I bring hands-on agency experience,
              international exposure, and a drive to build marketing that actually performs.
            </motion.p>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="text-[var(--muted)] leading-relaxed text-base md:text-[1.05rem]"
            >
              From managing Google Ads campaigns that generated qualified leads, to developing
              AI-enhanced content workflows — I combine hard data skills with the creative intuition
              that makes marketing campaigns feel human.
            </motion.p>
          </div>

          {/* Right — portrait placeholder + highlights */}
          <div>
            {/* Portrait frame */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="relative mb-8"
            >
              <div
                className="relative overflow-hidden rounded-2xl w-full max-w-sm mx-auto"
                style={{ aspectRatio: '3/4', background: 'var(--card)', border: '1px solid var(--border)' }}
              >
                {/* Geometric decoration */}
                <div
                  className="absolute inset-4 rounded-xl border border-[var(--border)] opacity-50"
                  style={{ borderStyle: 'dashed' }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--border)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <span className="text-xs text-[var(--border)] tracking-widest uppercase">Photo</span>
                </div>
                {/* Accent stripe */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--accent)] opacity-70" />
              </div>
              {/* Decorative offset square */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl hidden sm:block"
                style={{ background: 'var(--primary)', opacity: 0.08 }}
              />
            </motion.div>

            {/* Highlight cards */}
            <div className="grid grid-cols-1 gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  custom={i + 3}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? 'show' : 'hidden'}
                  className="flex items-center gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--primary)] hover:shadow-sm transition-all duration-200 cursor-default"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[var(--primary)]" style={{ background: 'color-mix(in srgb, var(--primary) 10%, transparent)' }}>
                    {h.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--fg)]">{h.title}</div>
                    <div className="text-xs text-[var(--muted)]">{h.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline strip */}
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <div className="text-xs tracking-[0.2em] uppercase text-[var(--muted)] mb-6">Journey</div>
          <div className="relative">
            {/* Line */}
            <div className="absolute top-4 left-0 right-0 h-px bg-[var(--border)] hidden md:block" />
            <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex md:flex-col items-start md:items-center gap-3 md:gap-0">
                  {/* Mobile: horizontal bullet */}
                  <div className="flex items-center gap-2 md:hidden">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent)] flex-shrink-0" />
                    <div className="w-8 h-px bg-[var(--border)]" style={{ display: i === timeline.length - 1 ? 'none' : undefined }} />
                  </div>
                  {/* Desktop: top dot */}
                  <div className="w-2.5 h-2.5 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] relative z-10 hidden md:block mb-3" />
                  <div className="md:text-center">
                    <div className="text-xs font-semibold text-[var(--accent)] mb-0.5">{item.year}</div>
                    <div className="text-xs font-medium text-[var(--fg)]">{item.label}</div>
                    <div className="text-xs text-[var(--muted)]">{item.org}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
