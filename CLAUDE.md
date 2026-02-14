# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Amatsuchi is a CSS/JS framework for vertical writing (`writing-mode: vertical-rl`), horizontal scrolling, and responsive web design. It targets Japanese web publications and is used by the web magazine "偏向" (https://65bunjitsu.tokyo/). Published on npm as `amatsuchi`.

## Build Commands

- **Development build:** `npm start` (runs webpack in development mode)
- **Production build:** `npm run build` (runs webpack in production mode, outputs to `dist/`)
- **No test or lint commands are configured.**

## Architecture

The framework has two layers:

### CSS Layer (`src/scss/amatsuchi.scss`)
- Imports `destyle.css` for reset/normalization
- Sets `writing-mode: vertical-rl` on `<body>` with horizontal scroll
- Provides semantic utility classes for Japanese typography (see README.md for class documentation)
- Uses CSS custom properties for theming: `--moji-color`, `--rinku-color`, `--rinku-hover-bg`, `--rinku-hover-color`, `--float-color`, `--float-bg`
- Contains Chrome-specific overrides (`.chrome` class) because Chrome renders `overline`/`underline` differently in vertical writing mode
- Mobile-specific styles use a `.mobile` class applied to `<html>` by `css-browser`

### JavaScript Layer (`src/index.js`)
- **Punctuation hanging (burasage):** Activated by adding `burasage` class to the `<body>`. Measures paragraph widths to determine if trailing punctuation (`。、」』〟）)`) should hang. Wraps hanging punctuation in `<span class="auto-burasage">`. Recalculates on window resize via debounce.
- **Browser detection:** Uses `css-browser` package to apply browser-specific classes (e.g., `.chrome`, `.mobile`) to `<html>`
- **Float button:** Hides/shows `#ama-float` element during scroll on mobile, adjusting position based on scroll offset

### Build System
- Webpack 5 with minimal config (`webpack.config.js` is 3 lines)
- Entry: `src/index.js` (JS) and `src/scss/amatsuchi.scss` (styles)
- Output: `dist/main.js` and `dist/amatsuchi.css`

## Key Notes

- Node version: 19.4.0 (specified in `.node-version`)
- When adding new hanging punctuation characters, update both the `burasageTargetList` array and the regex in `burasageParagraphProcess` in `src/index.js` (marked with `ぶら下げ文字追加時はここを編集`)
- Example HTML files in `example/` can be opened directly in a browser to test the framework
- The codebase and documentation are primarily in Japanese
