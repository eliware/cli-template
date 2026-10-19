export function writeHelp(write) {
  write("Usage: eliware-cli-template [--help] [--version]");
  write("Print command help or the package version.");
  write("--help     Print this help.");
  write("--version  Print the package version.");
  write("No arguments print this help.");
  write("Use --help or --version as the only argument.");
  write("Other arguments log an error and set exit code 2.");
}
