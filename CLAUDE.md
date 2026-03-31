# RoFlow AI Development

Fully optimised Roblox development product.

## Project Root

This is the top-level project root. Claude should always start here to see all layers of the codebase.

## Repository Structure

This is a monorepo. All project layers live under this root:

```
roflow-aidevelopment/
├── web/                  → Next.js 15 + React 19 + TypeScript (frontend + API)
│   └── src/app/api/      → Backend API routes (Vercel serverless functions)
├── server/               → Express backend (reserved for Railway migration)
├── plugin/               → Roblox Studio plugin (placeholder)
├── claude-setup.md       → Vision doc — system goals & agent roles
├── railway-migration.md  → Guide for splitting backend onto Railway
├── CLAUDE.md             → This file - project context for Claude Code
├── README.md
├── LICENSE
└── .gitignore
```

## Development Notes

- Platform: Roblox (Luau) — target runtime
- Frontend + API: Next.js 15 with App Router, TypeScript, React 19
- Claude integration: @anthropic-ai/sdk in Next.js API routes
- Deployment: Vercel (single deploy for frontend + API)
- Domain: ro-flow.com
- Dev server: `cd web && npm run dev` → localhost:3000
- The `server/` directory is kept for potential future Railway migration (see railway-migration.md)
