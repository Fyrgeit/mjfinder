import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-static";

const dev = process.argv.includes("dev");

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
        // default options are shown. On some platforms
        // these options are set automatically — see below
        pages: 'docs',
        assets: 'docs/static',
        fallback: "404.html",
        precompress: false,
        strict: true
    }),
    paths: {
        base: dev ? "" : process.env.BASE_PATH
    }
  },

  preprocess: [vitePreprocess({})],
};

export default config;