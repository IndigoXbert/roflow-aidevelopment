# Railway Migration Guide — When & How to Split the Backend

## Current Architecture (Vercel-only)

Everything runs on Vercel as a single Next.js app:

```
ro-flow.com/           → Next.js pages (frontend)
ro-flow.com/api/*      → Next.js Route Handlers (backend)
```

The Claude API calls happen inside `web/src/app/api/` as serverless functions.

## When to Split onto Railway

You need a separate backend when any of these become true:

- **Long-running requests** — Vercel serverless functions timeout at 10s (free) or 60s (Pro). If Claude API calls or code generation take longer, you'll need a persistent server.
- **WebSockets / real-time** — If you want live streaming of Claude responses or real-time collaboration, Vercel doesn't support persistent WebSocket connections.
- **Background jobs** — Queued tasks, scheduled jobs, or multi-step generation pipelines that run in the background.
- **Heavy compute** — If you add code linting, bundling, or Luau validation on the server side.
- **State / memory** — If the server needs to hold state between requests (e.g., multi-turn conversation context in memory rather than a database).

## How to Split

### 1. Restore the `server/` directory

The original Express backend is still in the repo under `server/`. It has:
- `server/src/index.ts` — Express app with health endpoint
- `server/package.json` — deps including `@anthropic-ai/sdk`, `express`, `cors`, `dotenv`
- `server/tsconfig.json` — TypeScript config
- `server/.env.example` — env var template

### 2. Move API route logic into Express

For each file in `web/src/app/api/*/route.ts`, create a corresponding Express route:

```ts
// server/src/routes/generate.ts
import { Router } from "express";
import Anthropic from "@anthropic-ai/sdk";

const router = Router();
const anthropic = new Anthropic();

router.post("/generate", async (req, res) => {
  const { prompt } = req.body;
  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    messages: [{ role: "user", content: prompt }],
  });
  res.json({ result: message.content });
});

export default router;
```

### 3. Deploy to Railway

1. Go to [railway.app](https://railway.app), sign in with GitHub
2. New Project → GitHub Repository → select this repo
3. Configure the service:
   - **Root Directory:** `server`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `node dist/index.js`
4. Add environment variables:
   - `ANTHROPIC_API_KEY` = your key
   - `PORT` = 4000
5. Deploy

### 4. Add custom domain on Railway

1. Service → Settings → Networking → Custom Domain
2. Add `api.ro-flow.com`
3. Railway gives you a CNAME value
4. In Vercel DNS, add:
   ```
   Name:  api
   Type:  CNAME
   Value: (Railway's CNAME value)
   TTL:   60
   ```

### 5. Point the frontend at the new backend

Add to Vercel environment variables:
```
NEXT_PUBLIC_API_URL=https://api.ro-flow.com
```

Update frontend fetch calls:
```ts
const API = process.env.NEXT_PUBLIC_API_URL || "";
const res = await fetch(`${API}/api/generate`, { ... });
```

### 6. Remove API routes from Next.js

Delete `web/src/app/api/` once the Express backend is handling all requests.
Remove `@anthropic-ai/sdk` from `web/package.json`.

---

## Cost Comparison

| Setup | Free Tier | Notes |
|-------|-----------|-------|
| Vercel only | Yes (Hobby) | 10s function timeout, 100GB bandwidth |
| Vercel + Railway | Vercel free + Railway $5/mo | No timeout limits, persistent server |
