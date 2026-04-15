// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

const astroPrerenderEntrypoint = fileURLToPath(
  new URL("./node_modules/astro/dist/entrypoints/prerender.js", import.meta.url),
);

const astroLegacyEntrypoint = fileURLToPath(
  new URL("./node_modules/astro/dist/entrypoints/legacy.js", import.meta.url),
);

// Some Windows environments fail to resolve Astro's exported entrypoints during build.
// Alias the internal files directly so local builds remain stable.
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "astro/entrypoints/prerender": astroPrerenderEntrypoint,
        "astro/entrypoints/legacy": astroLegacyEntrypoint,
      },
    },
  },
});
