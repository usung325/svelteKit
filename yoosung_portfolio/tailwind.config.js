/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      cursor: {
        default: 'url(./src/public/cursor1.png), default',
        pointer: 'url(./src/public/cursor1.png), pointer',
      },
    },
  },
  plugins: []
};


