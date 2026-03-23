# Isabel Borgen — Digital Marketing Portfolio

> Personal portfolio website for Isabel Borgen — MSc Digital Marketing & Analytics candidate at TBS Barcelona. Features an AI chatbot powered by the Anthropic Claude API.

## Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS + CSS custom variables
- **Animations**: Framer Motion
- **AI Chatbot**: Anthropic Claude API (server-side proxy)
- **Contact Form**: Formspree
- **Deployment**: Vercel

---

## Getting Started

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd portfolio
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the `/portfolio` directory (see `.env.local.example`):

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Anthropic API key:

```
ANTHROPIC_API_KEY=sk-ant-...your-key-here...
```

Get your API key at: [https://console.anthropic.com/](https://console.anthropic.com/)

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Deployment to Vercel

### One-click Deploy

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import from GitHub
3. Select the `portfolio` folder as the root directory
4. Add environment variable in Vercel Dashboard:
   - **Name**: `ANTHROPIC_API_KEY`
   - **Value**: `sk-ant-...your-key...`
5. Deploy!

### Environment Variables in Vercel

Go to: **Project Settings → Environment Variables** and add:

| Name | Value |
|------|-------|
| `ANTHROPIC_API_KEY` | Your Anthropic API key |

---

## Customization Guide

### Replace Placeholder Projects

Edit `components/Projects.tsx` — look for `// [PLACEHOLDER — replace with real project]` comments.
Replace:
- `title`, `description`, `tags` with your real project details
- `link` with the URL to your case study

### Add Your Photo

Replace the portrait placeholder in `components/About.tsx` with a real `<Image>` tag:
```tsx
import Image from 'next/image'
// ...
<Image
  src="/images/isabel.jpg"
  alt="Isabel Borgen"
  fill
  className="object-cover rounded-2xl"
/>
```
Add your photo to `/public/images/isabel.jpg`.

### Update Contact Form (Formspree)

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy your endpoint ID (e.g., `xvgzawkb`)
3. In `components/Contact.tsx`, replace the Formspree URL:
```tsx
const res = await fetch('https://formspree.io/f/YOUR_ENDPOINT_ID', {
```

### Update CV Download

Add your CV PDF to `/public/cv-isabel-borgen.pdf`. The chatbot panel has a "Download CV" button that links to this file.

---

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Fonts, metadata, global styles
│   ├── page.tsx            # Assembles all sections
│   ├── globals.css         # CSS variables, animations
│   └── api/
│       └── chat/
│           └── route.ts    # Claude API proxy (NEVER exposes API key)
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx        # [PLACEHOLDER] — replace with real projects
│   ├── Certificates.tsx
│   ├── Chatbot.tsx         # AI chatbot (floating, bottom-right)
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
│   └── images/             # Add your photo and assets here
├── .env.local.example
└── README.md
```

---

## Security Notes

- The Anthropic API key is **never exposed to the client**. All Claude calls go through `/api/chat/route.ts` (server-side Next.js route).
- Your key must be set as `ANTHROPIC_API_KEY` in `.env.local` (local) or Vercel environment variables (production).

---

*Built with purpose in Barcelona — 2025*
