import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
        // default options are shown. On some platforms
        // these options are set automatically — see below
        pages: 'docs',
        assets: 'docs/static',
        fallback: `/404.html`,
        precompress: false,
        strict: true
    }),
    paths: {
        base: process.argv.includes('dev') ? '' : "/mjfinder",
    }
  },

  preprocess: [vitePreprocess({})],
};

export default config;