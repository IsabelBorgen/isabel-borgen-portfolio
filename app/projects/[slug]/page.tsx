import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return { title: 'Project Not Found' }

  return {
    title: `${project.title} | Isabel Borgen`,
    description: project.cardSummary,
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const projectIndex = projects.findIndex((p) => p.slug === params.slug)
  const project = projects[projectIndex]

  if (!project) {
    notFound()
  }

  const prevProject = projects[projectIndex - 1] || projects[projects.length - 1]
  const nextProject = projects[projectIndex + 1] || projects[0]

  return (
    <div className="bg-[#FAFAF7] min-h-screen flex flex-col pt-32">
      <Navbar />

      <main className="flex-1 container-lg px-6 md:px-12 mb-24">
        {/* Back Link */}
        <div className="mb-12">
          <Link 
            href="/#work" 
            className="group inline-flex items-center text-sm font-medium text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
          >
            <svg 
              width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              className="mr-2 transition-transform group-hover:-translate-x-1"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Work
          </Link>
        </div>

        {/* Hero Header */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="max-w-4xl">
              <span 
                className="inline-block text-[10px] uppercase tracking-[0.3em] font-bold px-4 py-1.5 rounded-full text-white mb-6"
                style={{ backgroundColor: project.accentColor }}
              >
                {project.category}
              </span>
              <h1 
                className="text-4xl md:text-7xl font-light text-[var(--fg)] leading-[1.1] mb-6"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-[var(--muted)] leading-relaxed italic opacity-80">
                {project.oneSentenceOutcome}
              </p>
            </div>
          </div>

          {/* Tool Chips */}
          <div className="flex flex-wrap gap-2 pt-8 border-t border-[var(--border)]">
            {project.tools.map((tool) => (
              <span 
                key={tool}
                className="text-xs px-4 py-1.5 rounded-full border border-[var(--border)] text-[var(--muted)] bg-white/50"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Overview & Stats Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-8">
            <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--muted)] mb-6">Overview</h2>
            <p className="text-lg md:text-xl text-[var(--fg)] leading-relaxed font-light">
              {project.overview}
            </p>
          </div>
          <div className="lg:col-span-4 bg-[var(--card)] rounded-2xl p-8 border border-[var(--border)]">
            <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--muted)] mb-8">Highlights</h2>
            <div className="space-y-8">
              {project.results.map((res) => (
                <div key={res.label}>
                  <div className="text-2xl font-semibold text-[var(--fg)] mb-1" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
                    {res.label}
                  </div>
                  <div className="text-sm text-[var(--muted)] leading-relaxed">
                    {res.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="mb-24">
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--muted)] mb-12">The Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.approach.map((step) => (
              <div 
                key={step.number} 
                className="p-8 rounded-2xl bg-white border border-[var(--border)] transition-all hover:shadow-lg hover:border-transparent relative group"
              >
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: project.accentColor }}
                />
                <div className="text-4xl font-light text-[var(--border)] mb-4" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-[var(--fg)] mb-3">{step.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Media / Link Section */}
        {(project.liveUrl || project.tiktokUrl) && (
          <section className="mb-24 flex flex-col items-center justify-center p-12 md:p-20 rounded-3xl bg-[var(--primary)] text-white text-center">
            <h2 className="text-2xl md:text-4xl font-light mb-8 italic" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
              Want to see it in action?
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-white text-[var(--primary)] font-bold hover:scale-105 transition-transform"
                >
                  Visit Live Site
                </a>
              )}
              {project.tiktokUrl && (
                <a 
                  href={project.tiktokUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full border border-white text-white font-bold hover:bg-white hover:text-[var(--primary)] transition-all"
                >
                  Watch TikTok Breakdown
                </a>
              )}
            </div>
            
            {/* Visual Asset Note */}
            <div className="mt-12 text-xs opacity-60 italic">
              [Case study visual assets — add images to /public/projects/{project.slug}/]
            </div>
          </section>
        )}

        {/* Prev / Next Navigation */}
        <section className="pt-12 border-t border-[var(--border)] flex justify-between items-center">
          <Link 
            href={`/projects/${prevProject.slug}`}
            className="group flex flex-col items-start"
          >
            <span className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-2">Previous</span>
            <span className="text-lg font-serif group-hover:text-[var(--primary)] transition-colors">{prevProject.title}</span>
          </Link>
          <Link 
             href={`/projects/${nextProject.slug}`}
             className="group flex flex-col items-end text-right"
          >
            <span className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-2">Next</span>
            <span className="text-lg font-serif group-hover:text-[var(--primary)] transition-colors">{nextProject.title}</span>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
