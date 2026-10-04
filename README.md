# [![eliware.org](https://eliware.org/logos/brand.png)](https://discord.gg/M6aTR9eTwN)

@eliware/cli-template [![npm](https://img.shields.io/npm/v/@eliware/cli-template)](https://www.npmjs.com/package/@eliware/cli-template) [![License](https://img.shields.io/github/license/eliware/cli-template)](https://github.com/eliware/cli-template/blob/main/LICENSE) [![CI](https://github.com/eliware/cli-template/actions/workflows/ci.yaml/badge.svg)](https://github.com/eliware/cli-template/actions/workflows/ci.yaml)

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
- [License](#license)
- [Links](#links)

## Features

This template owns a reusable CLI baseline; each derived CLI owns its commands, arguments, exit behavior, and destructive-action safeguards.

Package description: A Node.js CLI template with explicit commands, help, version, and safe execution boundaries. Author: Eliware <eliware@eliware.org>. License: MIT.

Purpose: provide a reusable Node.js command-line application baseline for Eliware projects.

The starter implements help, version, and invalid-argument handling. Replace the template identity and command behavior when creating a derived CLI.

## Requirements

Use Node.js 26 and npm. CI currently tests Ubuntu; Windows and macOS are intended but unverified.

## Setup

Clone or create a repository from this template, then run `npm ci`. Replace the package name, description, repository URLs, keywords, commands, and behavior before releasing a derived project.

## Usage

Run `npx @eliware/cli-template --help` after the package is available from npm. The executable is `eliware-cli-template`. `package.json.version` is the release version source; releases use matching `vMAJOR.MINOR.PATCH` Git tags. Do not treat the npm badge or install command as proof that an unreleased version is available.

## Development

Read [AGENTS.md](AGENTS.md), this README, [specs/README.md](specs/README.md), and [RELEASE_NOTES.md](RELEASE_NOTES.md) before changing the template. `bin/eliware-cli-template.mjs` is the executable entrypoint; `src/cli.mjs` owns argument behavior and is mirrored by `tests/cli.test.mjs`.

Documentation: [docs](docs/README.md) · [specifications](specs/README.md)

## Testing

Run `npm test` for Jest with 100% statement, branch, function, and line coverage, lint, format-check, audit, package validation, and applicable profile checks through `eliware-test`. Run `npm run format:check` for read-only formatting validation. CI runs `npm ci` followed by `npm test`.

## Troubleshooting

If the command does not run, check that Node.js 26 is installed and that dependencies are installed with `npm ci`. Unknown arguments return exit code 2. Run `npm test` to validate the checkout.

## Security

The starter has no commands that change state and no runtime secrets or configuration. Keep credentials, tokens, private keys, and machine-specific values out of version control and CLI output.

## Configuration

The CLI has no runtime configuration; its options are command-line arguments. Its operational boundaries exclude persistent state, network connections, and external operations. `package.json` and `.knit/deploy.yaml` are metadata, not runtime configuration.

## Operations

The starter only prints help, version, or an invalid-argument error. Each invocation starts, handles its arguments, then exits; there is no service or resource that needs shutdown. These are its operational boundaries: it does not open connections, modify files, or change external state. Its supported operational workflow is local command execution; publication requires a separate authorized release handoff.

## Commands

Supported platforms: Windows, macOS, and Linux. Validation evidence: Ubuntu is directly validated by GitHub Actions CI; Windows and macOS compatibility is inferred from platform-neutral Node.js APIs, not directly tested here.

Validation evidence: GitHub Actions CI directly validates Ubuntu. Windows and macOS are intended platforms by inference because the implementation uses platform-neutral Node.js APIs; neither is directly tested by this repository.

| Command                          | Behavior                              |
| -------------------------------- | ------------------------------------- |
| `eliware-cli-template --help`    | Print usage and exit 0.               |
| `eliware-cli-template --version` | Print the package version and exit 0. |
| `eliware-cli-template`           | Print usage and exit 0.               |

Examples: `eliware-cli-template --help` and `eliware-cli-template --version`. No command changes or deletes state, so no destructive-action control is needed. Keep this section complete when adding commands.

## Exit codes

| Code | Meaning                                        |
| ---- | ---------------------------------------------- |
| `0`  | Help, version, or no-argument usage completed. |
| `2`  | An unsupported argument was supplied.          |

Output contains only usage, the package version, or the supplied unsupported argument; do not include secrets or sensitive payloads. CI tests Ubuntu. Windows and macOS are intended platforms but have not been validated by this repository.

## Support

For help or discussion, join the Eliware community:

[![Discord](https://eliware.org/logos/discord_96.png)](https://discord.gg/M6aTR9eTwN)

**[eliware.org on Discord](https://discord.gg/M6aTR9eTwN)**

## License

[license](LICENSE)

## Links

- [docs](docs/README.md)
- [Home Page](https://github.com/eliware/cli-template#readme)
- [GitHub repository](https://github.com/eliware/cli-template.git)
- [Eliware](https://eliware.org)
- [GitHub organization](https://github.com/eliware)
- [Discord](https://discord.gg/M6aTR9eTwN)
- [specifications](specs/README.md)
- [Release Notes](RELEASE_NOTES.md)
- [npm Package](https://www.npmjs.com/package/@eliware/cli-template)
