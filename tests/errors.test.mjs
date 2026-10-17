import { expect, jest, test } from "@jest/globals";
import { reportUnknownArgument } from "../src/errors.mjs";

test("logs the unsupported argument", () => {
  const log = { error: jest.fn() };

  reportUnknownArgument("--unknown", log);

  expect(log.error).toHaveBeenCalledWith("Unknown argument: --unknown");
});
