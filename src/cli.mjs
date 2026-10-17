import { log as defaultLog } from "@eliware/common";
import { parseArguments } from "./arguments.mjs";

export function runCli(args, { version, log = defaultLog, write = console.log }) {
  const parsed = parseArguments(args);
  if (parsed.type === "help") {
    write("Usage: eliware-cli-template [--help] [--version]");
    return 0;
  }
  if (parsed.type === "version") {
    write(version);
    return 0;
  }

  log.error(`Unknown argument: ${parsed.argument}`);
  return 2;
}
