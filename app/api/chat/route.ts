import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'ANTHROPIC_API_KEY is not configured.' },
        { status: 500 }
      )
    }

    const systemPrompt = `You are Isabel Borgen's personal AI portfolio assistant. You are helpful, warm, professional and concise. You answer questions from recruiters and hiring managers about Isabel's background, skills, experience, and fit for digital marketing roles.

Key facts about Isabel:
- MSc Digital Marketing & Analytics candidate at TBS Barcelona (2025-2026), specializing in AI-Driven Digital Marketing
- Bachelor's in Marketing, Innovation & Management from NTNU Norway (2019-2022), specialization in International Marketing
- Exchange semester at Universidad de Cádiz, Spain (Sep 2021 – Feb 2022, taught in Spanish)
- Client Advisor at Mint Media (Dec 2023–Sept 2025, Bergen, Norway): SEO, Google Ads, Meta Ads, lead generation, client training, onboarding — won Employee of the Year 2024
- Mint Media management described her as "groundbreaking in lead generation — her innovative and targeted approach has set a new standard for the entire team"
- Media Advisor at 5000 Bergen Radio (Aug–Oct 2022): B2B sales, social media, content production, events
- Hard skills: Python, R, Power BI, Tableau, HubSpot, WordPress, WIX, Figma, Canva, CapCut, Google Workspace, Microsoft Office 365
- Certified: Google Ads Search, Google Ads Display, Google Analytics
- Languages: Norwegian (native), Spanish (fluent), English (fluent)
- Based in Barcelona, seeking a 6-month full-time internship in digital marketing, aiming to convert to full-time thereafter
- Hobbies: Handball, Skiing & Hiking, Guitar & Piano, Painting
- Contact: isabel.borgen99@gmail.com | LinkedIn: linkedin.com/in/isabelborgen-45358523b

When asked about fit for a role, highlight her combination of analytical skills (Python, R, data tools) with creative marketing experience and real agency background. Keep responses under 120 words unless asked for detail. Never make up facts not listed here. Be warm and enthusiastic about Isabel's potential.`

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',
        max_tokens: 512,
        system: systemPrompt,
        messages: messages,
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      return NextResponse.json({ error: err }, { status: response.status })
    }

    const data = await response.json()
    const content = data.content?.[0]?.text ?? ''

    return NextResponse.json({ content })
  } catch (error) {
    console.error('[chat route error]', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
