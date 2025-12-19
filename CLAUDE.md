# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VitePress-based personal blog/portfolio site for "Lalo". The site is deployed to GitHub Pages at the `/lalo.github.io/` base path.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server with hot reload
npm run docs:dev

# Build static site for production
npm run docs:build

# Preview production build locally
npm run docs:preview
```

## Architecture

- **docs/**: Main content directory containing all markdown pages
- **docs/.vitepress/config.mts**: VitePress configuration (TypeScript) - site settings, navigation, sidebar, theme options
- **docs/.vitepress/theme/**: Custom theme extending VitePress default theme with green color scheme
- **docs/public/**: Static assets (logo, images)

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds and deploys to GitHub Pages on push to main branch. Build output goes to `docs/.vitepress/dist`.

## Key Configuration Notes

- Base path is `/lalo.github.io/` (required for GitHub Pages subdirectory)
- Language is Chinese (zh-CN)
- Clean URLs enabled (no .html extensions)
- Markdown line numbers enabled
- Local search enabled
