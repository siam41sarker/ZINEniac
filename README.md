# ZINEniac

ZINEniac is an education and creative-arts platform offering enrichment programs, classes, camps, and events for children, teens, and adults. The site showcases programs across STEAM, arts, languages, mindfulness, and more, and provides an admin-managed events calendar, contact and registration flows, and transactional email communications.

🌐 **Live site:** [zineniac.com](https://www.zineniac.com)

## Overview

This project is the official ZINEniac website, built as a modern, responsive single-page application. It serves as the primary touchpoint for families, students, and partners to explore programs, browse upcoming events, and engage with ZINEniac's offerings.

## Features

- **Program catalog** — Detailed pages for STEAM, Robotics, 3D Programming, Arts & Crafts, Music, Yoga, Mindfulness, ESL, Acting, Magic, LEGO Legends, Trading Card Games, and more
- **Events calendar** — Browse upcoming events by date, with admin-managed event content
- **Audience hubs** — Dedicated experiences for Children, Adults, Schools, Camps, and Birthdays
- **Admin portal** — Secure, role-based access for managing events
- **Authentication** — Email-based sign-in with role-based access control
- **Transactional email** — Contact notifications, unsubscribe handling, and email suppression management
- **SEO-ready** — Semantic HTML, meta tags, and responsive layouts across all pages

## Tech Stack

- **Framework:** React 18 + Vite 5 + TypeScript 5
- **Styling:** Tailwind CSS v3 with a semantic design token system
- **UI components:** shadcn/ui (Radix primitives)
- **Backend:** Lovable Cloud (managed Supabase) — database, auth, storage, edge functions
- **Email:** Custom transactional email pipeline via edge functions
- **Testing:** Vitest

## Project Structure

```
src/
├── components/        Reusable UI and section components
│   └── ui/            shadcn/ui primitives
├── pages/             Route-level pages (programs, events, admin, legal)
├── hooks/             Custom React hooks (useIsAdmin, use-mobile, use-toast)
├── lib/               Utilities and admin auth helpers
├── integrations/
│   └── supabase/      Auto-generated client and types
└── index.css          Design tokens and global styles

supabase/
└── functions/         Edge functions (email, admin bootstrap, unsubscribe)
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, bun, or pnpm

### Installation

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:8080`.

### Testing

```bash
npm run test
```

## Admin Access

Admin functionality is restricted to authorized accounts only. Role assignments are managed through the `user_roles` table with server-side validation via a security-definer function — never trust client-side flags for privileged actions.

## Deployment

Backend functions and database migrations deploy on push.

## License

© ZINEniac. All rights reserved.
