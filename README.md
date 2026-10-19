# [![eliware.org](https://eliware.org/logos/brand.png)](https://discord.gg/M6aTR9eTwN)

## @eliware/cli-template [![npm](https://img.shields.io/npm/v/@eliware/cli-template)](https://www.npmjs.com/package/@eliware/cli-template) [![License](https://img.shields.io/github/license/eliware/cli-template)](https://github.com/eliware/cli-template/blob/main/LICENSE) [![CI](https://github.com/eliware/cli-template/actions/workflows/ci.yaml/badge.svg)](https://github.com/eliware/cli-template/actions/workflows/ci.yaml)

A Node.js CLI template with explicit commands, help, version, and safe execution boundaries.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Setup](#setup)
- [Usage](#usage)
- [Development](#development)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Security](#security)
- [Configuration](#configuration)
- [Operations](#operations)
- [Commands](#commands)
- [Exit codes](#exit-codes)
- [Support](#support)
- [Links](#links)
- [License](#license)

## Features

This template starts Node.js command-line applications. Each derived application owns its behavior and operating decisions.

## Requirements

Use Node.js 26 or later and npm 12 or later for repository validation.

## Setup

Create a repository from this template. Replace the template name, description, URLs, keywords, and sample content.
Run `npm ci` from the repository root.

## Usage

Follow this README and the [user guide](docs/README.md). Read [release notes](RELEASE_NOTES.md) for release history.

## Development

Read [AGENTS.md](AGENTS.md) and [the specifications index](specs/README.md) before you change files.
Keep documents and records in the repository that owns them.

## Testing

Run `npm test` before handoff. It runs the repository checks through `eliware-test`.

## Troubleshooting

## Security

Keep credentials, secrets, private data, and runtime state out of Git.
Use only approved secret stores for secret values.

## Configuration

The starter has no runtime settings. It does not read environment variables or configuration files.

## Operations

The starter prints help, a version, or an error. It does not change files or connect to a network.
Use the approved release process to publish the package.

## Commands

Run `eliware-cli-template --help` to print usage. Run `eliware-cli-template --version` to print the package version. Run the command with no arguments to print usage.
The starter accepts no other arguments. An unsupported argument returns exit code 2. The starter does not change state.

## Exit codes

| Code | Meaning                                       |
| ---- | --------------------------------------------- |
| `0`  | Help, version, or usage completed.            |
| `2`  | The command received an unsupported argument. |

## Support

For help, questions, or to chat with the author and community, visit:

[![Discord](https://eliware.org/logos/discord_96.png)](https://discord.gg/M6aTR9eTwN)[![eliware.org](https://eliware.org/logos/eliware_96.png)](https://discord.gg/M6aTR9eTwN)

**[eliware.org on Discord](https://discord.gg/M6aTR9eTwN)**

## Links

- [Home Page](https://eliware.org)
- [GitHub Org](https://github.com/eliware)
- [GitHub Repo](https://github.com/eliware/cli-template)
- [Bug Reports](https://github.com/eliware/cli-template/issues)
- [npm](https://www.npmjs.com/package/@eliware/cli-template)
- [Discord](https://discord.gg/M6aTR9eTwN)

## License

[MIT © Eliware](LICENSE)
