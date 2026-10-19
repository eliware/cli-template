# CLI guide

Use this guide to create and use a command-line application from this template.

> After you create a repository from this template, replace this document with end-user documentation for your repository.

## Create a CLI

1. Create a repository from this template.
2. Set the package name, description, URLs, and keywords.
3. Replace the template command behavior.
4. Add one test file for each source module.
5. Document each command and option in the root README.

## Install and run

Install Node.js 26 or later and npm 12 or later. Run `npm ci` in the repository root.

> **Template setup — update this callout after you create a CLI repository.**
>
> This template has no published npm version. Set the package target to public npm, a private registry, or no publication. Add the approved consumer install command: `[ADD INSTALL COMMAND]`. State where users run the command: `[ADD INSTALL LOCATION]`.

After installation, the package provides the `eliware-cli-template` command. Run `eliware-cli-template --help` to show help. Run `eliware-cli-template --version` to show the package version. Run the command with no arguments to show help.

The starter accepts no other arguments. An unsupported argument prints an error and returns exit code 2. Help and version commands return exit code 0.

## Change command behavior

The executable is `bin/eliware-cli-template.mjs`. The parser and command behavior live in `src/cli.mjs`. Tests live in `tests/cli.test.mjs`.

Add commands only when the derived application needs them. Document their arguments, defaults, errors, and exit codes. Add controls before a command can delete data or change external state.

## Release

The template includes an npm publication workflow. Set the publication target and approval details for the derived CLI before release. Match the package version with the `vMAJOR.MINOR.PATCH` Git tag. Do not use a badge or package file as proof that a version is available.

## Validate

Run `npm test` before handoff. It runs tests, lint, formatting, audit, package checks, and profile checks.
