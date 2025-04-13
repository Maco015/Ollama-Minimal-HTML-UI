# Ollama HTML UI

**_The simplest Ollama interface that actually works. Written in pure HTML/CSS for talking with Ollama._**

All code exists in a minimal amount of files so it is as auditable as possible. If you know JavaScript/HTML/CSS, you should be able to understand all code in this repository!

Run this program by opening or hosting `index.html`. That's it! No special compilation or any of that garbage 🪽

![The interface](./docs/interface.png)

# Features

- Syntax highlighting
- All markdown is automatically sanitized and rendered as markdown
- Message streams display
- Custom IP address and model setting
- Message history

# Purpose

I am sick of seeing a bunch of random interfaces that depend on a whole bunch of nonsense. I know I want something simple that works that I can trust. You're here, so you probably do too.

- Minimal third-parties
- No dependency managers (`NPM`/`PIP`/etc...) -- All external scripts loaded are in `/external/`
- No online scripts (cdnjs etc...)

# `/external/` Notes

This repository has some dependence on third-parties for Markdown support. If you don't trust these, download your own copy from:

- `highlight.min.js`: https://highlightjs.org/
- `theme.css`: Choose any one from https://github.com/highlightjs/highlight.js/tree/main/src/styles
- `markdown-it.js`: https://github.com/markdown-it/markdown-it
