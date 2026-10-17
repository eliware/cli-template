import { expect, jest, test } from "@jest/globals";
import { writeHelp } from "../src/help.mjs";

test("writes the command usage", () => {
  const write = jest.fn();

  writeHelp(write);

  expect(write).toHaveBeenCalledWith("Usage: eliware-cli-template [--help] [--version]");
});
