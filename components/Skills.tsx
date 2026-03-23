'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const pillars = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" />
        <path d="M12 6v6l4 2" />
        <path d="M2 12h4M18 12h4M12 2v4M12 18v4" />
      </svg>
    ),
    label: 'AI & Analytics',
    color: 'var(--primary)',
    skills: [
      'Python', 'R', 'Power BI', 'Tableau', 'AI-Driven Campaigns',
      'Prompt Engineering', 'LLM Tools', 'Data Analysis', 'Google Analytics',
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    label: 'UX/UI & Creative',
    color: 'var(--accent)',
    skills: [
      'Figma', 'Canva', 'CapCut', 'Visual Merchandising', 'Content Design',
      'Brand Identity', 'Presentation Design', 'WordPress', 'WIX',
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    label: 'Digital Marketing',
    color: '#7A9E8E',
    skills: [
      'Google Ads Search', 'Google Ads Display', 'Meta Ads', 'SEO/SEM',
      'HubSpot', 'Lead Generation', 'Social Media Strategy',
      'B2B Sales', 'Client Advisory', 'Campaign Management',
    ],
  },
]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transition: { duration: 0.65, delay: i * 0.15, ease: 'easeOut' as any },
    }),
  }

  return (
    <section
      id="skills"
      className="section-pad"
      style={{ background: 'var(--card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
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
            Skills
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
          Three Pillars of Expertise
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
              className="relative p-8 rounded-2xl bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: pillar.color }}
              />

              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5"
                style={{ color: pillar.color, background: `color-mix(in srgb, ${pillar.color} 10%, transparent)` }}
              >
                {pillar.icon}
              </div>

              {/* Label */}
              <h3
                className="text-lg font-semibold text-[var(--fg)] mb-5"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.3rem' }}
              >
                {pillar.label}
              </h3>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {pillar.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft skills strip */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mt-12 pt-8 border-t border-[var(--border)] flex flex-wrap items-center gap-4"
        >
          <span className="text-xs text-[var(--muted)] tracking-widest uppercase mr-2">
            Soft Skills
          </span>
          {['Adaptability', 'Collaboration', 'Initiative & Proactivity', 'Creativity'].map((s) => (
            <span key={s} className="text-sm font-medium text-[var(--primary)] px-4 py-1.5 rounded-full border border-[var(--primary)]" style={{ opacity: 0.8 }}>
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
