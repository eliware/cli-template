# AGENTS.md

## Project

Repository: `eliware/cli-template`. Purpose: provide a reusable Node.js command-line application baseline for Eliware projects.

## Scope and boundaries

Scope: this repository owns the starter CLI, its tests, package metadata, documentation, and local deployment configuration. It does not own shared Eliware requirements, production credentials, or production release and deployment execution. This AGENTS.md applies repository-wide; any nearer AGENTS.md applies within its subdirectory.

## Layout

Required structure: `bin/eliware-cli-template.mjs` is the executable entrypoint. `src/` contains implementation and `tests/` mirrors it. `docs/` contains end-user documentation; `specs/` contains repository-specific directives. `.knit/deploy.yaml` defines development deployment commands.

## Development

Before changing files, read the root README.md, applicable AGENTS.md instructions, applicable documentation, and applicable specifications.

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

Supported platforms: Windows, macOS, and Linux. Validation evidence: Ubuntu is directly validated by GitHub Actions CI; Windows and macOS compatibility is inferred from platform-neutral Node.js APIs, not directly tested here.

The executable command is eliware-cli-template, implemented by bin/eliware-cli-template.mjs. It parses --help and --version, defaults to help with no arguments, and validates unsupported arguments with exit code 2; help and version return 0. No command changes state, so dry-run controls do not apply. Validation evidence: Ubuntu is directly validated in GitHub Actions CI. Windows and macOS compatibility is inferred from platform-neutral Node.js APIs; neither is directly tested here.

## npm publication

Package identity: @eliware/cli-template. Version source: package.json.version. The exact package.json.files allowlist is src/, docs/, README.md, AGENTS.md, LICENSE, RELEASE_NOTES.md, bin/. Pack validation command: eliware-test --pack (also npm run pack). Pack validation result: require pass before release. npm provenance mechanism: npm Trusted Publishing with provenance. Exact-version public npm registry verification: verify the exact package.json version for @eliware/cli-template at registry.npmjs.org. Release approval and execution ownership: Eli and the project developer run TagIt preflight; Eli decides readiness and instructs DevOps; DevOps executes the authorized release. Release authorization and handoff: publication requires explicit authorization through the Operations release handoff; this section grants no permission.
