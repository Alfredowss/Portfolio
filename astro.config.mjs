// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	server: {
		host: true,
		port: 4321
	},
	vite: {
		plugins: [ tailwindcss() ]
	},
	site: 'https://Alfredowss.github.io',
	integrations: [mdx(), sitemap()],
});
