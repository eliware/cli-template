# AGENTS.md

## Project

Repository: `eliware/cli-template`. Purpose: provide a reusable Node.js command-line application baseline for Eliware projects.

## Scope and boundaries

Scope: this repository owns the starter CLI, its tests, package metadata, documentation, and local deployment configuration. It does not own shared Eliware requirements, production credentials, or production release and deployment execution. This AGENTS.md applies repository-wide; any nearer AGENTS.md applies within its subdirectory.

## Layout

Required structure: `bin/eliware-cli-template.mjs` is the executable entrypoint. `src/` contains implementation and `tests/` mirrors it. `docs/` contains end-user documentation; `specs/` contains repository-specific directives. `.knit/deploy.yaml` defines development deployment commands.

## Development

These development instructions apply repository-wide; nearer AGENTS.md files provide instructions within each subdirectory.

Use Node.js 26, npm, and native ESM `.mjs` modules. Read README.md, applicable specifications, implementation, and tests before changing behavior. Every source and test module must have a single responsibility: one cohesive purpose and one reason to change. Business-logic modules and coordinators are valid, including coordinators of coordinators, when each module does only its own responsibility. When a change introduces a distinct responsibility, create a focused submodule with a mirrored test and wire it through its owner; do not add the new responsibility to an existing module. During ordinary review, refactor them when you find mixed responsibilities. Passing the 100-line source and 200-line test maxima does not prove a module is cohesive or permit mixed responsibilities. The maxima are blocking; passing them does not prove a module has one responsibility.

Keep each `.mjs` under `src/` mirrored by exactly one `.test.mjs` under `tests/`; do not add unmatched test files. Keep CLI-specific tests at the lowest module level that proves their behavior.

## Validation

Use Node.js 26 with npm and the native ESM module system. Runtime environment configuration: none; CLI options are arguments and package.json is metadata. Node-specific validation runs through `eliware-test` using `npm test`. Run `npm ci` after dependency changes and `npm test` before handoff. Aggregate validation runs Jest with 100% statement, branch, function, and line coverage, lint, format-check, audit, package validation, and applicable profile checks through `eliware-test`. Use `npm run lint`, `npm run format`, `npm run format:check`, `npm run audit`, or `npm run pack` for targeted stages. CI runs `npm ci` followed by `npm test`.

## Security

Keep credentials, tokens, private keys, and machine-specific values out of version control. Do not expose secrets in CLI output or logs.

## Changes

Keep changes actionable, current, and concise. A documented project-specific deviation does not waive any convention ID or validation stage. Project-specific requirements may add to shared requirements but must not weaken them. Do not publish, release, deploy, or modify external systems without explicit authorization through the applicable Operations handoff.

## Application

The executable entrypoint is `bin/eliware-cli-template.mjs`; implementation is under `src/`. The starter supports help, version, and argument validation only. Its lifecycle is a short-lived invocation that exits after writing output; it has no configuration source, persistent state, network listener, or shutdown resources. The safe operating boundary excludes external operations.

## CLI

The executable command is `eliware-cli-template`; it validates command-line arguments and defaults to help when no arguments are supplied. `--help` and `--version` exit successfully; invalid arguments return exit code 2. Test argument validation for supported and unsupported input. The starter has no state-changing commands, so destructive actions and dry-run controls do not apply. It is a short-lived process with no shutdown resources. Keep output free of credentials and document supported platforms separately from CI-tested platforms.

## npm publication

The public package is `@eliware/cli-template`; `package.json.version` is its release version source. The exact `package.json.files` allowlist is `bin/`, `src/`, `docs/`, `specs/`, `README.md`, `AGENTS.md`, `LICENSE`, and `RELEASE_NOTES.md`. The exact pack validation command is `eliware-test --pack`; `npm run pack` runs it. Require the pack stage to pass before publication. The workflow uses npm Trusted Publishing with provenance and verifies the exact package version in the registry. Publication requires explicit authorization through the Operations release handoff; these instructions do not authorize publishing.
