import type { Config } from 'tailwindcss';

import adapter from '@sveltejs/adapter-static';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {}
  },

  plugins: [],

  darkMode: 'selector',
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
    })
  }
} satisfies Config;
