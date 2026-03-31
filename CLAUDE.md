# RoFlow AI Development

Fully optimised Roblox development product.

## Project Root

This is the top-level project root. Claude should always start here to see all layers of the codebase.

## Repository Structure

This is a monorepo. All project layers live under this root:

```
roflow-aidevelopment/
├── web/              → Next.js 15 + React 19 + TypeScript frontend (port 3000)
├── server/           → Express 5 + TypeScript backend (port 4000)
├── plugin/           → Roblox Studio plugin (placeholder)
├── claude-setup.md   → Vision doc — system goals & agent roles
├── CLAUDE.md         → This file - project context for Claude Code
├── README.md
├── LICENSE
└── .gitignore
```

## Development Notes

- Platform: Roblox (Luau) — target runtime
- Frontend: Next.js 15 with App Router, TypeScript, React 19
- Backend: Express 5, TypeScript, Claude API via @anthropic-ai/sdk
- Dev servers: `web/` on port 3000, `server/` on port 4000
- Use `tsx watch` for backend hot-reload during development
