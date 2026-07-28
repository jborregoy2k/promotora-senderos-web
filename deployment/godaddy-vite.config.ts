import vinext from "vinext";
import { defineConfig } from "vite";

// GoDaddy Node.js Hosting filters project-specific deployment folders during
// import, so this configuration must remain completely self-contained.
export default defineConfig({
  plugins: [vinext()],
});
