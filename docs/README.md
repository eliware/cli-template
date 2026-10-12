# CLI guide

Use this guide to create and use a command-line application from this template.

## Create a CLI

1. Create a repository from this template.
2. Set the package name, description, URLs, and keywords.
3. Replace the template command behavior.
4. Add one test file for each source module.
5. Document each command and option in the root README.

## Install and run

Install Node.js 26 or later and npm 12 or later. Run `npm ci` in the repository root.

The package installs the `eliware-cli-template` command. Run `eliware-cli-template --help` to show help. Run `eliware-cli-template --version` to show the package version. Run the command with no arguments to show help.

The starter accepts no other arguments. An unsupported argument prints an error and returns exit code 2. Successful help and version commands return exit code 0.

## Change command behavior

The executable is `bin/eliware-cli-template.mjs`. The parser and command behavior live in `src/cli.mjs`. Tests live in `tests/cli.test.mjs`.

Add commands only when the derived product needs them. Document their arguments, defaults, errors, and exit codes. Add controls before a command can delete data or change external state.

## Release

The package publishes to npm with provenance after validation. The package version must match the `vMAJOR.MINOR.PATCH` Git tag. Do not treat a badge or package file as proof that a version is available.

## Validate

Run `npm test` before handoff. It runs tests, lint, formatting, audit, package checks, and profile checks.
