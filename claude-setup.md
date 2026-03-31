# RoFlow — Vision & Agent Roles

## System Goals

RoFlow is an AI-driven Roblox game development platform that guides users through a step-based workflow — from initial game idea to a playable Roblox experience. Each step is orchestrated by Claude, which acts as the core intelligence layer.

## Architecture Overview

```
User (Browser)  →  Next.js Frontend  →  Express Backend  →  Claude API
                                                          →  Roblox Studio Plugin (future)
```

## Agent Roles

### 1. Idea Intake Agent
- Collects the user's game concept via conversational prompts
- Produces a structured game brief (genre, mechanics, setting, target audience)

### 2. Design Agent
- Takes the game brief and generates a Game Design Document (GDD)
- Covers: core loop, progression, monetization, UI/UX wireframes

### 3. Code Generation Agent
- Converts GDD sections into Luau scripts for Roblox Studio
- Generates server scripts, local scripts, module scripts, and UI code

### 4. Review Agent
- Validates generated code for correctness, performance, and best practices
- Suggests improvements before the user pushes to Roblox Studio

### 5. Deployment Agent (future)
- Interfaces with the Roblox Studio plugin to push assets and scripts
- Handles place publishing and testing workflows

## Step-Based User Flow

1. **Idea Intake** — describe your game concept
2. **Design** — AI generates a full GDD
3. **Build** — AI produces Luau code from the GDD
4. **Review** — AI checks and refines the output
5. **Deploy** — push to Roblox Studio (future)
