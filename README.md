# RoFlow — AI-Driven Roblox Game Development

Build Roblox games through an AI-powered, step-based workflow: describe your idea, get a full game design, generate Luau code, review, and deploy.

## Project Structure

```
roflow-aidevelopment/
├── web/                  → Next.js + TypeScript (frontend + API routes)
│   └── src/app/api/      → Backend API (runs as Vercel serverless functions)
├── server/               → Express backend (unused — for Railway migration later)
├── plugin/               → Roblox Studio plugin (placeholder)
├── claude-setup.md       → Vision doc — system goals & agent roles
├── railway-migration.md  → Guide for splitting backend onto Railway
├── CLAUDE.md             → Project context for Claude Code
└── .gitignore
```

## Prerequisites

- Node.js 20+
- npm 10+
- An Anthropic API key

## Setup

```bash
cd web && npm install
```

## Environment Variables

Copy the example and add your key:

```bash
cp web/.env.example web/.env.local
# Edit web/.env.local and set ANTHROPIC_API_KEY
```

## Development

```bash
cd web && npm run dev
# → http://localhost:3000       (frontend)
# → http://localhost:3000/api/* (API routes)
```

Verify the API:

```bash
curl http://localhost:3000/api/health
# → {"status":"ok"}
```

## Deployment (Vercel)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import your repo
3. Set **Root Directory** to `web`
4. Add environment variable: `ANTHROPIC_API_KEY` = your key
5. Deploy
6. Add your custom domain in Project Settings → Domains

See [railway-migration.md](railway-migration.md) if you later need to split the backend onto its own server.

## Architecture

See [claude-setup.md](claude-setup.md) for the full vision, agent roles, and step-based user flow.

## License

See [LICENSE](LICENSE).
