'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const GREETING = "Hi! I'm Isabel's AI assistant. Ask me anything about her experience, skills, or how she can help your team 👋"

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 200)
    }
  }, [open])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || loading) return

    const newMessages: Message[] = [...messages, { role: 'user', content: text }]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })
      const data = await res.json()
      if (data.content) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.content }])
      } else {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: "Sorry, I couldn't get a response. Please try again." },
        ])
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Connection error. Please try again in a moment.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute bottom-20 right-0 w-[340px] sm:w-[380px] rounded-2xl border border-[var(--border)] shadow-2xl overflow-hidden flex flex-col"
            style={{ background: 'var(--bg)', maxHeight: '520px' }}
            role="dialog"
            aria-label="Isabel Borgen AI Assistant"
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-4 border-b border-[var(--border)]"
              style={{ background: 'var(--card)' }}
            >
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold text-[var(--bg)]"
                  style={{ background: 'var(--primary)', fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                  aria-hidden="true"
                >
                  IB
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--fg)]">Isabel&apos;s AI</div>
                  <div className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    Online
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors cursor-pointer p-1 rounded-lg hover:bg-[var(--border)]"
                aria-label="Close chat"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto chat-scroll p-4 flex flex-col gap-3" style={{ minHeight: '200px', maxHeight: '320px' }}>
              {/* Greeting */}
              <div className="flex gap-2.5">
                <div
                  className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-semibold text-[var(--bg)] mt-0.5"
                  style={{ background: 'var(--primary)', fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                  aria-hidden="true"
                >
                  IB
                </div>
                <div
                  className="text-sm leading-relaxed p-3 rounded-xl rounded-tl-none max-w-[80%]"
                  style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--fg)' }}
                >
                  {GREETING}
                </div>
              </div>

              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  {msg.role === 'assistant' && (
                    <div
                      className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-semibold text-[var(--bg)] mt-0.5"
                      style={{ background: 'var(--primary)', fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                      aria-hidden="true"
                    >
                      IB
                    </div>
                  )}
                  <div
                    className="text-sm leading-relaxed p-3 rounded-xl max-w-[80%]"
                    style={
                      msg.role === 'user'
                        ? { background: 'var(--primary)', color: 'var(--bg)', borderRadius: '12px 12px 4px 12px' }
                        : { background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--fg)', borderRadius: '4px 12px 12px 12px' }
                    }
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <div className="flex gap-2.5">
                  <div
                    className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-semibold text-[var(--bg)] mt-0.5"
                    style={{ background: 'var(--primary)', fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                    aria-hidden="true"
                  >
                    IB
                  </div>
                  <div
                    className="flex items-center gap-1.5 p-3 rounded-xl rounded-tl-none"
                    style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                    aria-label="Typing..."
                  >
                    <div className="typing-dot" />
                    <div className="typing-dot" />
                    <div className="typing-dot" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested questions (first-time only) */}
            {messages.length === 0 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {[
                  'What are her key skills?',
                  'Is she available for internships?',
                  'Tell me about Mint Media',
                ].map((q) => (
                  <button
                    key={q}
                    onClick={() => { setInput(q); setTimeout(() => inputRef.current?.focus(), 50) }}
                    className="text-xs px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--muted)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Download CV */}
            <div className="px-4 py-2 border-t border-[var(--border)]" style={{ background: 'var(--card)' }}>
              <a
                href="/cv-isabel-borgen.pdf"
                download
                className="flex items-center gap-2 w-full justify-center text-xs font-medium text-[var(--primary)] hover:text-[var(--fg)] transition-colors py-1.5 cursor-pointer"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download CV
              </a>
            </div>

            {/* Input */}
            <div className="px-4 pb-4 pt-2 flex gap-2 border-t border-[var(--border)]">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Isabel..."
                aria-label="Chat message input"
                className="flex-1 text-sm px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--fg)] placeholder-[var(--muted)] outline-none focus:border-[var(--primary)] transition-colors"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-[var(--bg)] disabled:opacity-40 transition-opacity cursor-pointer flex-shrink-0"
                style={{ background: 'var(--primary)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <div className="relative">
        {/* Pulse rings */}
        {!open && (
          <>
            <span className="pulse-ring" style={{ animationDelay: '0s' }} />
            <span className="pulse-ring" style={{ animationDelay: '0.7s' }} />
          </>
        )}
        <motion.button
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
          style={{ background: open ? 'var(--fg)' : 'var(--primary)' }}
          aria-label={open ? 'Close AI assistant' : 'Open AI assistant'}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </motion.div>
            ) : (
              <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  )
}
