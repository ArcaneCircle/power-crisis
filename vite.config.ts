import { webxdcViteConfigNoLegacy } from "@webxdc/vite-plugins";
import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(
  webxdcViteConfigNoLegacy({
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
  }),
);
