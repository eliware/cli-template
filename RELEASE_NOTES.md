# Release Notes

## 15.0.1 — 2026-10-26

### Changed

- Update the package version to 15.0.1.
- Upgrade @eliware/test to version 15.0.1 and refresh its dependencies.

## 15.0.0 — 2026-10-24

### Changed

- Align package metadata, repository guidance, CLI documentation, and specifications with Eliware Test v15.
- Upgrade @eliware/test to version 15 and refresh its dependencies.
- Remove @eliware/common because maintained code does not import it.
- Split CLI argument parsing, help output, and error reporting into focused modules with dedicated tests.
- Write unsupported argument errors through the CLI output and return exit code 2.
- Update the CLI guide with template setup callouts, command behavior, release limits, and validation steps.
- Mark the guide for replacement with end-user documentation after scaffolding.
- Add an npm install command placeholder and instructions for private or unpublished packages.
- Replace the legacy publish workflow with the canonical npm workflow and verify release tags against package versions.
- Update CI to use checkout v7 and fetch full Git history for release checks.
- Align GitHub and Knit workflows with shared deployment commands.
- Add focused test commands and document final aggregate validation.
- Add package files and metadata required for npm package validation.

## 12.0.0 — 2026-10-12

### Changed

- Align package metadata, documentation, and validation with v12 conventions.
- Update shared packages and npm publication workflows.
- Document commands, arguments, defaults, errors, exit codes, and package contents.
- State that package files do not prove registry availability.

## 11.0.0 — 2026-10-03

### Changed

- Align repository metadata, documentation, specifications, and workflows with the v11 conventions.
