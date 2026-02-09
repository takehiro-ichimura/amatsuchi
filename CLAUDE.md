# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Amatsuchi is a CSS/JavaScript framework for building vertical-scroll responsive websites, designed for Japanese vertical text (縦書き) layout. Originally created for the web magazine "Henko" (偏向). Published on npm as `amatsuchi`.

## Build Commands

- **Development build:** `npm start` (runs Webpack in development mode)
- **Production build:** `npm run build` (runs Webpack in production mode, minified)
- **Install dependencies:** `npm install`
- **No test suite or linter is configured.**

## Architecture

- **`src/index.js`** — Main JavaScript entry point, bundled to `dist/main.js`. Contains three core functions:
  - `burasageParagraphProcess()` — Measures text and positions hanging punctuation (ぶら下げ) in vertical text
  - `amatsuchiProcess()` — Debounced resize handler that recalculates punctuation placement
  - `amaFloatDisplayNoneOnMobile()` — Controls float button visibility on scroll for mobile
- **`src/scss/amatsuchi.scss`** — Main SCSS stylesheet, compiled to `dist/amatsuchi.css`. Implements vertical writing mode (`writing-mode: vertical-rl`) with horizontal scroll, cross-browser fixes, and utility classes for text decoration, emphasis marks, and layout
- **`dist/`** — Compiled output (CSS + JS bundles with source maps), checked into git
- **`example/`** — HTML files demonstrating framework usage

## Key Dependencies

- `destyle.css` — CSS reset, bundled into the compiled stylesheet
- `css-browser` — Browser detection for Chrome-specific vertical text adjustments
- `cross-env` — Cross-platform `NODE_ENV` setting for build scripts

## Node Version

Requires Node 19.4.0 (specified in `.node-version`).

## Conventions

- Commit messages and documentation are primarily in Japanese
- CSS class names use romanized Japanese (e.g., `.burasage`, `.bo-ten`, `.jisage`, `.midashi-box`)
- Webpack config is minimal — only sets mode via `NODE_ENV`
