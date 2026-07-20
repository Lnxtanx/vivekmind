# TanStack Start TypeScript Application

A modern React web application built with **TanStack Start**, **Vite**, **TypeScript**, and **Tailwind CSS**, deployed on **Cloudflare Workers**.

## Features

- ⚡ **Vite** - Next-generation frontend tooling
- 🚀 **TanStack Start** - Full-stack React framework with server-side rendering
- 🎨 **Tailwind CSS v4** - Utility-first CSS framework
- 🧩 **Radix UI** - Accessible, unstyled component primitives
- 🔀 **TanStack Router** - Type-safe routing for React
- ☁️ **Cloudflare Workers** - Serverless deployment platform
- 📝 **TypeScript** - Type-safe JavaScript
- ✅ **React Hook Form + Zod** - Form validation
- 📊 **Recharts** - Chart library for React

## Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

## Installation

```bash
# Install dependencies
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:8000`

## Building

### Production Build

```bash
npm run build
```

### Development Build

```bash
npm run build:dev
```

## Deployment

Deploy to Cloudflare Workers:

```bash
npm run deploy
```

This command builds the application and deploys it using Wrangler.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build for development |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run deploy` | Build and deploy to Cloudflare |

## Project Structure

```
├── src/
│   ├── components/     # Reusable UI components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions and configurations
│   ├── routes/         # Application routes (TanStack Router)
│   ├── assets/         # Static assets
│   ├── router.tsx      # Router configuration
│   ├── routeTree.gen.ts # Auto-generated route tree
│   └── styles.css      # Global styles
├── public/             # Public static files
├── client_entry.js     # Client entry point
├── vite.config.ts      # Vite configuration
├── wrangler.jsonc      # Cloudflare Workers configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## Configuration

### Vite

The Vite configuration (`vite.config.ts`) includes:
- Cloudflare Workers plugin for SSR
- TanStack Start plugin
- React plugin
- Tailwind CSS plugin
- TypeScript paths resolution

### Cloudflare Workers

The Wrangler configuration (`wrangler.jsonc`) defines:
- Worker name and compatibility settings
- Asset directory for static files
- Server entry point

## Tech Stack

- **Framework**: TanStack Start
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI
- **Routing**: TanStack Router
- **Forms**: React Hook Form + Zod
- **Deployment**: Cloudflare Workers

## License

Private
