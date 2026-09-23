# AGENTS.md

## Project

`@eliware/cli-template` is an ESM Node.js CLI template using dotenv, `@eliware/common`, Jest, and linting.

## Scope and boundaries

- This template owns the starter CLI, commands, examples, tests, metadata, and local execution guidance.
- Do not publish, tag, deploy, or change external platform state without explicit authorization.

## Layout

- `cli-template.mjs` is the thin CLI entrypoint; `.env.example` documents configuration.
- `examples/`, `src/`, and `tests/` contain starter material for derived projects.

## Development

- Use Node.js 26 and native ESM.
- Read README.md, applicable specs, and the shared Docs, Conventions, and Operations authorities before changing files.
- Keep commands, `--help`, `--version`, exit codes, and destructive-action controls documented and testable.
- Keep `.env.example` current and never commit `.env` or credentials.
- Preserve the documented clone, rename, install, start, test, and customization workflow.
- Keep application startup and shutdown examples safe and explicit.
- Keep runtime configuration and lifecycle behavior documented in README.md.

## Validation

Run `npm test`, `npm run test:gaps`, `npm run lint`, `npm run typecheck`, and `npm run pack` after template changes. Do not start services unintentionally.

## Security

Never commit `.env`, tokens, passwords, private keys, or credential-bearing URLs.

## Changes

Update README, environment examples, package metadata, command behavior, and template files together. Do not bump versions, tag, publish, or deploy unless explicitly requested.
