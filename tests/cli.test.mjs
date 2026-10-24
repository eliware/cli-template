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
  const write = jest.fn();
  expect(runCli(["--unknown"], { version: "9.0.0", write })).toBe(2);
  expect(write).toHaveBeenCalledWith("Unknown argument: --unknown");
});

test("writes an unknown argument through the default output", () => {
  const write = jest.spyOn(console, "log").mockImplementation(() => {});

  expect(runCli(["--unknown"], { version: "9.0.0" })).toBe(2);
  expect(write).toHaveBeenCalledWith("Unknown argument: --unknown");

  write.mockRestore();
});

test("rejects extra arguments after a supported option", () => {
  const write = jest.fn();
  expect(runCli(["--version", "extra"], { version: "9.0.0", write })).toBe(2);
  expect(write).toHaveBeenCalledWith("Unknown argument: --version");
});
