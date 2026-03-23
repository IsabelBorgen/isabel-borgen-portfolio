'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const typingLines = [
  'I turn data into strategy.',
  'I build brands that convert.',
  'I make AI work for marketing.',
]

export default function Hero() {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Typing effect
  useEffect(() => {
    const target = typingLines[currentLine]

    if (!isDeleting && displayText === target) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2200)
      return
    }
    if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setCurrentLine((prev) => (prev + 1) % typingLines.length)
      return
    }

    const delay = isDeleting ? 38 : 62
    timeoutRef.current = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting ? prev.slice(0, -1) : target.slice(0, prev.length + 1)
      )
    }, delay)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [displayText, isDeleting, currentLine])

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as any },
    }),
  }

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Background geometric pattern */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Large decorative circle */}
        <div
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full border border-[var(--border)] opacity-40"
          style={{ borderWidth: '1px' }}
        />
        <div
          className="absolute top-[5%] right-[5%] w-[400px] h-[400px] rounded-full border border-[var(--border)] opacity-30"
          style={{ borderWidth: '1px' }}
        />
        {/* Accent dot cluster */}
        <div className="absolute top-[18%] right-[22%] grid grid-cols-4 gap-3 opacity-25">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-[var(--primary)]" />
          ))}
        </div>
        {/* Thin vertical line */}
        <div
          className="absolute top-0 left-[60%] w-px h-[45%] bg-gradient-to-b from-transparent via-[var(--border)] to-transparent opacity-60"
        />
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="container-xl relative z-10 pb-24 pt-36 md:pt-44 md:pb-32"
      >
        {/* Eyebrow */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-center gap-3 mb-8"
        >
          <span className="divider-line" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--muted)]">
            Digital Marketing & Analytics
          </span>
        </motion.div>

        {/* Main name */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-[clamp(3.5rem,10vw,8.5rem)] font-light leading-[0.95] tracking-tight text-[var(--fg)] mb-6"
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
        >
          ISABEL
          <br />
          <span className="text-[var(--primary)]">BORGEN</span>
        </motion.h1>

        {/* Subtitle + typing */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-10 max-w-2xl"
        >
          <p className="text-sm md:text-base tracking-[0.15em] uppercase text-[var(--muted)] mb-3 font-medium">
            AI-Driven Growth · Barcelona
          </p>
          <div className="flex items-center gap-0 text-lg md:text-2xl font-light text-[var(--fg)]">
            <span
              className="border-r-2 border-[var(--accent)]"
              style={{ lineHeight: 1.3, paddingRight: '3px' }}
            >
              {displayText}
            </span>
            <span className="sr-only">Typing animation</span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center gap-4 mb-20 md:mb-24"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--primary)] text-[var(--bg)] text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
          >
            See My Work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[var(--fg)] text-[var(--fg)] text-sm font-medium hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-all duration-200 cursor-pointer"
          >
            Let&apos;s Talk
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="grid grid-cols-3 gap-6 max-w-lg"
        >
          {[
            { num: '2+', label: 'Years Agency Experience' },
            { num: '3', label: 'Languages' },
            { num: '2024', label: 'Employee of the Year' },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="text-2xl md:text-3xl font-light text-[var(--primary)] mb-0.5"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                {stat.num}
              </div>
              <div className="text-xs text-[var(--muted)] leading-snug">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs tracking-[0.15em] uppercase text-[var(--muted)]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-[var(--muted)] to-transparent"
        />
      </motion.div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--border)]" />
    </section>
  )
}
