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
        fallback: "404.html",
        precompress: false,
        strict: true
    }),
    paths: {
        base: "/mjfinder",
        //Får errors som klagar (vet inte var)
        //Error: 404 / does not begin with `base`, which is configured in `paths.base` and can be imported from `$app/paths` - see https://kit.svelte.dev/docs/configuration#paths for more info (linked from /mjfinder/)
        //Försvinner om base är ""
        relative: false
    }
  },

  preprocess: [vitePreprocess({})],
};

export default config;