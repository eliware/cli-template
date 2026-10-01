import { log as defaultLog } from "@eliware/common";

export function runCli(args, { version, log = defaultLog, write = console.log }) {
  if (args.length === 0 || args[0] === "--help") {
    write("Usage: eliware-cli-template [--help] [--version]");
    return 0;
  }

  if (args.length === 1 && args[0] === "--version") {
    write(version);
    return 0;
  }

  log.error(`Unknown argument: ${args[0]}`);
  return 2;
}
