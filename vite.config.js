import { defineConfig } from "vite";
import react from "vite-plugin-react-swc";

export default defineConfig({
  base: process.env.GITHUB_PAGES === "true" ? "/human-copy-landing-v3-premium/" : "/",
  plugins: [react()],
});
