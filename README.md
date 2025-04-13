# Ollama Minimal HTML UI 🤖🥔

**_The simplest Ollama interface that actually works. Written in pure HTML/CSS for talking with Ollama._**

All code exists in a minimal amount of files so it is as auditable as possible. If you know JavaScript/HTML/CSS, you should be able to understand all code in this repository!

![The interface](./docs/interface.png)

## Features

- **Syntax Highlighting**: Automatically highlights syntax in code for better readability.
- **Markdown Support**: All markdown is automatically sanitized and rendered as markdown.
- **Message Streams Display**: Real-time display of message streams.
- **Custom IP Address and Model Setting**: Easily set custom IP addresses and model names.
- **Message History**: Keep track of your chat history and interact beyond on message.
- **Simple Auditable Code**: The code has been written in as few files and as vanilla as possible to make it easy for you to tell what is going on.

## Purpose

I am sick of seeing a bunch of random interfaces that depend on a whole bunch of nonsense. I know I want something simple that works that I can trust. You're here, so you probably do too.

- Minimal third-parties
- No dependency managers (`npm`/`pip`/etc...) -- All external scripts loaded are in `/external/`
- No online scripts (`cdnjs` etc...)

## Getting Started

Run this program by opening or hosting `index.html`.

That's it! No special compilation or any of that garbage 🪽

Want to see all chat history as vanilla text? Just write `chat_history` to the browser console to get its contents.

## `/external/` Notes

This repository has some dependence on third-parties for Markdown support. If you don't trust these, download your own copy from:

- `highlight.min.js`: [https://highlightjs.org/](https://highlightjs.org/)
- `theme.css`: Choose any one from [https://github.com/highlightjs/highlight.js/tree/main/src/styles](https://github.com/highlightjs/highlight.js/tree/main/src/styles)
- `markdown-it.js`: [https://github.com/markdown-it/markdown-it](https://github.com/markdown-it/markdown-it)

## Chat History Initial Message

In `chat-history.js`, there is an initial message that gives the AI information about you such as the date, timestamp, and browser agent. This can be useful for using AI to help you build stuff. If you don't want this functionality, just delete the initial message. Simple as that.

## Contributing

Feel free to fork this repository and contribute by opening a pull request. If you find any issues or have suggestions, please open an issue.
