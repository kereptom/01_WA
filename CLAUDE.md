# CLAUDE.md

## Project

01_WA — greenfield project. No code yet.

## Workflow Rules
- After completing any feature or fix, run the tests
- After tests pass, commit with a descriptive message
- Push to the current branch on GitHub
- If on a feature branch, create a PR when the feature is complete

## Deploy
- The `main` branch auto-deploys to Vercel
- Push to `main` only when the feature is tested and stable
- Use feature branches for development: `feature/feature-name`

## Tech Stack
- Next.js 14 with App Router
- TypeScript strict mode
- Tailwind CSS
- Deployed on Vercel

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run test` — run tests
- `vercel --prod` — manual production deploy

## Conventions
