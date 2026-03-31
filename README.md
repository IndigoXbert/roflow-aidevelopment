# RoFlow — AI-Driven Roblox Game Development

Build Roblox games through an AI-powered, step-based workflow: describe your idea, get a full game design, generate Luau code, review, and deploy.

## Project Structure

```
roflow-aidevelopment/
├── web/              → Next.js + TypeScript frontend (port 3000)
├── server/           → Express + TypeScript backend  (port 4000)
├── plugin/           → Roblox Studio plugin (placeholder)
├── claude-setup.md   → Vision doc — system goals & agent roles
├── CLAUDE.md         → Project context for Claude Code
└── .gitignore
```

## Prerequisites

- Node.js 20+
- npm 10+
- An Anthropic API key (for the server)

## Setup

```bash
# Install frontend dependencies
cd web && npm install

# Install backend dependencies
cd ../server && npm install

# Configure environment
cp server/.env.example server/.env
# Edit server/.env and add your ANTHROPIC_API_KEY
```

## Development

Run the frontend and backend in separate terminals:

```bash
# Terminal 1 — Frontend (http://localhost:3000)
cd web && npm run dev

# Terminal 2 — Backend (http://localhost:4000)
cd server && npm run dev
```

Verify the backend is running:

```bash
curl http://localhost:4000/health
# → {"status":"ok"}
```

## Architecture

See [claude-setup.md](claude-setup.md) for the full vision, agent roles, and step-based user flow.

## License

See [LICENSE](LICENSE).
