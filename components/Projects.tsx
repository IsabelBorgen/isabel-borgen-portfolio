'use client'

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { projects, Project } from '@/data/projects'

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ease: [0.21, 0.47, 0.32, 0.98] as any,
    },
  }),
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  // Asymmetric spanning logic: 1st and 4th projects take more visual weight if needed, 
  // but user requested "Asymmetric 2-column grid (desktop)".
  // We'll alternate heights or widths. Let's do a classic asymmetric staggered grid.
  const isLarge = index === 0 || index === 3

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -6 }}
      className={`relative group cursor-pointer ${
        isLarge ? 'md:col-span-1' : 'md:col-span-1'
      }`}
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div 
          className="h-full bg-[var(--card)] rounded-2xl border border-[var(--border)] p-8 md:p-10 flex flex-col transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] group-hover:border-transparent relative overflow-hidden"
          style={{ 
            // Inline style for the accent glow on hover
          }}
        >
          {/* Border Glow Overlay */}
          <div 
            className="absolute inset-0 border-2 border-transparent rounded-2xl transition-colors duration-500 group-hover:opacity-100 opacity-0 pointer-events-none"
            style={{ borderColor: project.accentColor }}
          />

          {/* Category Pill */}
          <div className="mb-6 flex">
            <span 
              className="text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-full text-white"
              style={{ backgroundColor: project.accentColor }}
            >
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 
            className="text-2xl md:text-3xl font-light text-[var(--fg)] mb-4 leading-tight group-hover:text-[var(--primary)] transition-colors duration-300"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            {project.title}
          </h3>

          {/* Summary */}
          <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed mb-8 line-clamp-2">
            {project.cardSummary}
          </p>

          <div className="mt-auto">
            {/* Tool Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tools.slice(0, 4).map((tool) => (
                <span 
                  key={tool}
                  className="text-[10px] px-2.5 py-1 rounded border border-[var(--border)] text-[var(--muted)] bg-white/50"
                >
                  {tool}
                </span>
              ))}
              {project.tools.length > 4 && (
                <span className="text-[10px] text-[var(--muted)] self-center ml-1">+{project.tools.length - 4}</span>
              )}
            </div>

            {/* CTA Arrow */}
            <div className="flex items-center text-sm font-medium text-[var(--fg)] group-hover:translate-x-1 transition-transform duration-300">
              <span className="mr-2">View Project</span>
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="work" className="section-pad bg-[#fbfbf8]">
      <div className="container-xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-[1px] bg-[var(--primary)]" />
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-[var(--primary)]">
                Selected Work
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-light text-[var(--fg)] leading-tight"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              Strategic Marketing & <br /> Digital Innovation
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-[var(--muted)] text-sm md:text-base max-w-xs md:mb-2"
          >
            A curated selection of projects spanning digital strategy, performance marketing, and academic research.
          </motion.p>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
