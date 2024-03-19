import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import externalizeDeps from 'vite-plugin-externalize-deps';


export default defineConfig({
	plugins: [
		sveltekit(),
		externalizeDeps() // Use the plugin
	 ],
	build: {
	   rollupOptions: {
		 external: ['matter-js'] // Add other external dependencies here
	   },
	},
   });