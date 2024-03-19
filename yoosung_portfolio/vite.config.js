import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
	   rollupOptions: {
		 external: ['/Users/roy/Library/Caches/typescript/5.3/node_modules/@types/matter-js/index'], // Add other external dependencies here
	   },
	},
   });