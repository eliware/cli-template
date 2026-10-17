export function parseArguments(args) {
  if (args.length === 0 || (args.length === 1 && args[0] === "--help")) {
    return { type: "help" };
  }

  if (args.length === 1 && args[0] === "--version") {
    return { type: "version" };
  }

  return { type: "unknown", argument: args[0] };
}
