/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: [
    'text-right',
    'md:text-right',
  ],
	theme: {
		extend: {},
	},
	plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["dark"],
  },
}
