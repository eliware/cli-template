import { expect, jest, test } from "@jest/globals";
import { writeHelp } from "../src/help.mjs";

test("writes the command usage", () => {
  const write = jest.fn();

  writeHelp(write);

  expect(write).toHaveBeenNthCalledWith(1, "Usage: eliware-cli-template [--help] [--version]");
  expect(write).toHaveBeenNthCalledWith(2, "Print command help or the package version.");
  expect(write).toHaveBeenNthCalledWith(3, "--help     Print this help.");
  expect(write).toHaveBeenNthCalledWith(4, "--version  Print the package version.");
  expect(write).toHaveBeenNthCalledWith(5, "No arguments print this help.");
  expect(write).toHaveBeenNthCalledWith(7, "Other arguments log an error and set exit code 2.");
});
