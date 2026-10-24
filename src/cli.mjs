import { parseArguments } from "./arguments.mjs";
import { reportUnknownArgument } from "./errors.mjs";
import { writeHelp } from "./help.mjs";

export function runCli(args, { version, write = console.log }) {
  const parsed = parseArguments(args);
  if (parsed.type === "help") {
    writeHelp(write);
    return 0;
  }
  if (parsed.type === "version") {
    write(version);
    return 0;
  }

  reportUnknownArgument(parsed.argument, write);
  return 2;
}
