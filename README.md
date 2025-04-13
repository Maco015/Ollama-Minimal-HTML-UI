# Ollama HTML UI

A minimal interface in pure HTML/CSS for talking with Ollama.

All code exists in a minimal amount of files so it is as auditable as possible.

Run this program by opening or hosting `index.html`. That's it! No special compilation or any of that garbage 🪽

![The interface](./docs/interface.png)

# Features

- Syntax highlighting
- All markdown is automatically sanitized and rendered as markdown
- Message streams display
- Custom IP address and model setting

# Purpose

I am sick of seeing a bunch of random interfaces that depend on a whole bunch of nonsense. I know I want something simple that works that I can trust. You're here, so you probably do too.

- Minimal third-parties
- No dependency managers (`NPM`/`PIP`/etc...) -- All external scripts loaded are in `/external/`
- No online scripts (cdnjs etc...)
