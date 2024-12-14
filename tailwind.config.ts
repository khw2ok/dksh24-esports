import type { Config } from 'tailwindcss';

import adapter from '@sveltejs/adapter-static';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {}
  },

  plugins: [],

  darkMode: 'selector'
} satisfies Config;
