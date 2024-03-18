/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        'hover-hover': {'raw': '(hover: hover)'},
      },
      cursor: {
        default: 'url(./src/public/cursor5.png), default',
        pointer: 'url(./src/public/cursor4.png), pointer',
      },
    },
  },
  plugins: []
  
};


