'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Work', href: '/#work' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-white/90 backdrop-blur-md shadow-sm border border-[var(--border)]'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl font-semibold tracking-tight text-[var(--fg)] hover:text-[var(--primary)] transition-colors"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            IB
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-[var(--muted)] hover:text-[var(--primary)] transition-colors duration-200 tracking-[0.1em] uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="mailto:isabel.borgen99@gmail.com"
            className="hidden md:inline-flex items-center gap-2 text-xs font-medium px-5 py-2 rounded-full border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all duration-200 cursor-pointer uppercase tracking-wider"
          >
            Hire Me
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 cursor-pointer p-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-[var(--fg)] transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[var(--fg)] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-[var(--fg)] transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 bg-white border border-[var(--border)] rounded-2xl shadow-xl p-8 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-light text-[var(--fg)] hover:text-[var(--primary)] transition-colors tracking-wide"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:isabel.borgen99@gmail.com"
              className="inline-flex justify-center items-center gap-2 text-sm font-medium px-4 py-3 rounded-full bg-[var(--primary)] text-white hover:opacity-90 transition-opacity cursor-pointer mt-2 uppercase tracking-widest"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
