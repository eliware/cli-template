import { expect, jest, test } from "@jest/globals";
import { reportUnknownArgument } from "../src/errors.mjs";

test("writes the unsupported argument", () => {
  const write = jest.fn();

  reportUnknownArgument("--unknown", write);

  expect(write).toHaveBeenCalledWith("Unknown argument: --unknown");
});
