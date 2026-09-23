# [![eliware.org](https://eliware.org/logos/brand.png)](https://discord.gg/M6aTR9eTwN)

## @eliware/cli-template [![license](https://img.shields.io/github/license/eliware/cli-template.svg)](LICENSE)[![build status](https://github.com/eliware/cli-template/actions/workflows/nodejs.yml/badge.svg)](https://github.com/eliware/cli-template/actions)

Documentation: [docs](docs/README.md) · [specifications](specs/README.md) · [examples](examples/README.md) · [release notes](RELEASE_NOTES.md)

A starter template for new Node.js projects. Use this as a foundation for your next application or service.

---

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Development](#development)
- [Testing](#testing)
- [Errors / Troubleshooting](#errors--troubleshooting)
- [Security](#security)
- [Customization](#customization)
- [Support](#support)
- [License](#license)
- [Links](#links)

## Features

- Pre-configured for Node.js (ESM)
- Environment variable support via dotenv
- Logging and signal handling via `@eliware/common`
- Jest for testing
- MIT License

## Requirements

- Node.js 26 or newer
- A new CLI project directory and environment appropriate to the command you build from this template

## Setup

1. **Clone this template:**

   ```bash
   git clone https://github.com/eliware/cli-template.git
   cd cli-template
   rm -rf .git
   git init
   npm install
   ```

2. **Update project details:**
   - Edit `package.json` (name, description, author, etc.)
   - Update this `README.md` as needed
   - Change the license if required

## Usage

Use this repository as a starting point for a command-line application. Define
commands, options, `--help`, `--version`, exit codes, and safe behavior before
adding external side effects.

## Commands

The template entrypoint is `cli-template.mjs` and is exposed as
`eliware-cli-template`. Derived CLIs should document every command, option,
environment variable, and destructive-action safeguard here.

## Exit codes

Derived CLIs must document stable exit-code meanings and return non-zero status
for invalid input or failed operations.

## Development

- Main entry: `cli-template.mjs`
- Start your app:

  ```bash
  node cli-template.mjs
  ```

- Add your code in new files and import as needed.

## Testing

- Run tests and coverage-gap checks with:

  ```bash
  npm test
  npm run test:gaps
  npm run lint
   npm run pack
  ```

- Add your tests in the `__tests__` folder or alongside your code.

## Template inheritance

Keep the template relationship when cloning specialized templates. Use `origin` for the new project and `upstream` for this template, then fetch and review upstream changes before merging.

## Customization

- Replace or extend the logging and signal handling as needed.
- Add dependencies and scripts to fit your project.
- Remove or modify template files and sections.

## Troubleshooting

This repository is a starter application, not a production service. Replace placeholder metadata and application logic after cloning. Keep `.env` local, verify configuration before startup, and use `registerSignals`/`registerHandlers` for explicit graceful shutdown and error handling.

## Security

Never commit `.env`, tokens, passwords, private keys, or credential-bearing URLs. Store secrets in the deployment environment or secret manager, and review dependencies and permissions before deploying a derived project.

## Support

For help, questions, or to chat with the author and community, visit:

[![Discord](https://eliware.org/logos/discord_96.png)](https://discord.gg/M6aTR9eTwN)[![eliware.org](https://eliware.org/logos/eliware_96.png)](https://discord.gg/M6aTR9eTwN)

**[eliware.org on Discord](https://discord.gg/M6aTR9eTwN)**

## License

[MIT © 2025 Eli Sterling, eliware.org](LICENSE)

## Links

- [Home Page](https://eliware.org)
- [GitHub Repo](https://github.com/eliware/cli-template)
- [GitHub Org](https://github.com/eliware)
- [GitHub Personal](https://github.com/eli-sterling)
- [Discord](https://discord.gg/M6aTR9eTwN)
