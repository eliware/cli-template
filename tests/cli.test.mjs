import { expect, test, jest } from "@jest/globals";
import { runCli } from "../src/cli.mjs";

test.each([{ args: [] }, { args: ["--help"] }])("shows usage", ({ args }) => {
  const write = jest.fn();
  expect(runCli(args, { version: "9.0.0", write })).toBe(0);
  expect(write).toHaveBeenCalledWith("Usage: eliware-cli-template [--help] [--version]");
});

test("prints the supplied package version", () => {
  const write = jest.fn();
  expect(runCli(["--version"], { version: "9.0.0", write })).toBe(0);
  expect(write).toHaveBeenCalledWith("9.0.0");
});

test("reports an unknown argument and returns the usage error code", () => {
  const log = { error: jest.fn() };
  expect(runCli(["--unknown"], { version: "9.0.0", log, write: jest.fn() })).toBe(2);
  expect(log.error).toHaveBeenCalledWith("Unknown argument: --unknown");
});

test("rejects extra arguments after a supported option", () => {
  const log = { error: jest.fn() };
  expect(runCli(["--version", "extra"], { version: "9.0.0", log })).toBe(2);
  expect(log.error).toHaveBeenCalledWith("Unknown argument: --version");
});
