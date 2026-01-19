import { defineConfig } from "vite";
import react from "vite-plugin-react-swc";

export default defineConfig({
  base: "/human-copy-landing-v3-premium/",
  plugins: [react()],
});
