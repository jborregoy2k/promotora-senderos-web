import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const vinextCli = fileURLToPath(
  new URL("./node_modules/vinext/dist/cli.js", import.meta.url),
);
const child = spawn(process.execPath, [vinextCli, "build"], {
  env: {
    ...process.env,
    GODADDY_NODE_HOSTING: "1",
  },
  stdio: "inherit",
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exitCode = code ?? 1;
});
