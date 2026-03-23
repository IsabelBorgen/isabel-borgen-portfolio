'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const timelineItems = [
  {
    type: 'work',
    org: 'Mint Media',
    role: 'Client Advisor',
    period: 'Dec 2023 – Sept 2025',
    location: 'Bergen, Norway',
    color: 'var(--primary)',
    achievements: [
      'Advised clients on websites, SEO, Google Ads & Meta Ads strategies',
      'Generated leads and identified key upselling opportunities',
      'Trained and onboarded new client advisors',
      'Collaborated across sales, web dev, and advertising teams up to CEO level',
    ],
    pullQuote: {
      text: '"Groundbreaking in lead generation — her innovative and targeted approach has set a new standard for the entire team."',
      attribution: '— Mint Media Management, Letter of Recommendation',
    },
    award: 'Employee of the Year 2024',
  },
  {
    type: 'work',
    org: '5000 Bergen Radio',
    role: 'Media Advisor',
    period: 'Aug 2022 – Oct 2022',
    location: 'Bergen, Norway',
    color: 'var(--accent)',
    achievements: [
      'B2B sales — building and managing client relationships',
      'Developed social media strategy and content production',
      'Organized and supported station events',
      'Produced advertising content for radio campaigns',
    ],
  },
  {
    type: 'edu',
    org: 'Toulouse Business School',
    role: 'MSc Digital Marketing & Analytics',
    period: '2025 – 2026',
    location: 'Barcelona, Spain',
    color: '#7A9E8E',
    achievements: [
      'Specialization: AI-Driven Digital Marketing & Analytics',
      'Focus on data-driven campaign strategy and marketing technology',
      'International cohort with hands-on project experience',
    ],
  },
  {
    type: 'edu',
    org: 'NTNU — Norwegian University',
    role: 'BSc Marketing, Innovation & Management',
    period: '2019 – 2022',
    location: 'Trondheim, Norway',
    color: '#7A9E8E',
    achievements: [
      'Specialization: International Marketing',
      'Exchange semester at Universidad de Cádiz (taught in Spanish)',
      'Graduated with strong focus on international business strategy',
    ],
  },
]

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transition: { duration: 0.65, delay: i * 0.12, ease: 'easeOut' as any },
    }),
  }

  return (
    <section id="experience" className="section-pad" style={{ background: 'var(--bg)' }}>
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
            Experience & Education
          </span>
        </motion.div>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-[clamp(2rem,4.5vw,3.2rem)] font-light leading-tight text-[var(--fg)] mb-16"
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
        >
          The Journey So Far
        </motion.h2>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div
            className="absolute left-[19px] top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'var(--border)' }}
          />

          <div className="flex flex-col gap-10">
            {timelineItems.map((item, i) => (
              <motion.div
                key={`${item.org}-${i}`}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                className="flex gap-6 md:gap-10"
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0 relative z-10"
                    style={{ borderColor: item.color, background: 'var(--bg)' }}
                  >
                    {item.type === 'work' ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 10v6M2 10l10-5 10 5M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Card */}
                <div
                  className="flex-1 p-6 md:p-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:shadow-md transition-shadow duration-300 cursor-default overflow-hidden relative"
                  style={{ borderLeft: `3px solid ${item.color}` }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <div className="text-xs tracking-widest uppercase font-medium mb-1" style={{ color: item.color }}>
                        {item.type === 'work' ? 'Work Experience' : 'Education'}
                      </div>
                      <h3
                        className="text-xl font-semibold text-[var(--fg)]"
                        style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.4rem' }}
                      >
                        {item.org}
                      </h3>
                      <div className="text-sm font-medium text-[var(--muted)] mt-0.5">{item.role}</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-sm font-medium text-[var(--fg)]">{item.period}</div>
                      <div className="text-xs text-[var(--muted)]">{item.location}</div>
                      {item.award && (
                        <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full" style={{ background: 'color-mix(in srgb, var(--accent) 12%, transparent)', color: 'var(--accent)' }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                          {item.award}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="flex flex-col gap-2 mb-4">
                    {item.achievements.map((ach, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-[var(--muted)]">
                        <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: item.color }} />
                        {ach}
                      </li>
                    ))}
                  </ul>

                  {/* Pull quote */}
                  {item.pullQuote && (
                    <blockquote className="mt-5 pl-4 border-l-2 border-[var(--accent)]">
                      <p
                        className="text-sm italic leading-relaxed text-[var(--fg)] mb-1"
                        style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1rem' }}
                      >
                        {item.pullQuote.text}
                      </p>
                      <cite className="text-xs text-[var(--muted)] not-italic">{item.pullQuote.attribution}</cite>
                    </blockquote>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
