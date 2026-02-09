# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

amatsuchi is a CSS/JavaScript library for creating vertical-text (縦書き), horizontal-scrolling, responsive Japanese websites. It leverages CSS Writing Modes Level 3 with cross-browser adjustments and includes JavaScript for punctuation hanging (ぶら下げ) and mobile float button behavior.

Published on npm as `amatsuchi`. Documentation and class references are in Japanese.

## Build Commands

```bash
npm start       # Development build (webpack, NODE_ENV=development)
npm run build   # Production build (webpack, NODE_ENV=production)
```

No test suite or linter is configured.

## Architecture

- **`src/index.js`** — Main JS entry point. Key functions:
  - `burasage()` / `burasageParagraphProcess()` — Punctuation hanging logic: wraps trailing punctuation in spans, measures width, applies negative margins
  - `amatsuchiProcess()` — Resize handler (debounced) for `.burasage` elements
  - `amaFloatDisplayNoneOnMobile()` — Hides `#ama-float` button during scroll on mobile
  - Uses `css-browser` for user-agent detection (browser-specific CSS adjustments)

- **`src/scss/amatsuchi.scss`** — Main stylesheet. Sets `writing-mode: vertical-rl` on `<body>`, imports `destyle.css` reset, defines CSS custom properties and utility classes (`.jisage`, `.burasage`, `.midashi-box`, `.bo-ten`, `.dash`, `.rinku`, `.yoko`, etc.)

- **`dist/`** — Compiled output (`amatsuchi.css`, `main.js`, source maps). These are checked into the repo for npm distribution.

- **`example/`** — HTML files demonstrating usage patterns.

## Key Conventions

- The library targets vertical writing mode (`writing-mode: vertical-rl`). All layout and decoration classes assume this context.
- SCSS uses `@use` imports (not `@import`).
- Node version: 19.4.0 (see `.node-version`).
- Webpack config is minimal — only sets `mode` from `NODE_ENV`, relying on webpack defaults for entry/output.
