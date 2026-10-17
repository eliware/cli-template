import { expect, test } from "@jest/globals";
import { parseArguments } from "../src/arguments.mjs";

test.each([
  [[], { type: "help" }],
  [["--help"], { type: "help" }],
  [["--version"], { type: "version" }],
  [["--unknown"], { type: "unknown", argument: "--unknown" }],
  [["--version", "extra"], { type: "unknown", argument: "--version" }],
])("classifies arguments %j", (args, expected) => {
  expect(parseArguments(args)).toEqual(expected);
});
