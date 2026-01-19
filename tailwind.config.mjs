/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				bg: '#f6f8fb',
				text: '#0f172a',
				muted: '#5c6475',
				primary: {
					DEFAULT: '#1e9ef5',
					strong: '#1087d5',
				},
				card: '#ffffff',
			},
			boxShadow: {
				card: '0 20px 80px rgba(15, 23, 42, 0.08)',
				primary: '0 15px 40px rgba(30, 158, 245, 0.25)',
			},
			fontFamily: {
				sans: ['DM Sans', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
			},
		},
	},
	plugins: [],
};


