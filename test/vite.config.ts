import { defineConfig } from "vite";

import posthtml from "@malobre/vite-plugin-posthtml";

export default defineConfig({
  plugins: [posthtml({ plugins: [] })],
});
