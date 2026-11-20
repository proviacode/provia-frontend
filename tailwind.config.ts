import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				page: 'rgb(var(--c-page) / <alpha-value>)',
				bg: 'rgb(var(--c-bg) / <alpha-value>)',
				surface: 'rgb(var(--c-surface) / <alpha-value>)',
				card: 'rgb(var(--c-card) / <alpha-value>)',
				text: 'rgb(var(--c-text) / <alpha-value>)',
				muted: 'rgb(var(--c-muted) / <alpha-value>)',
				line: 'rgb(var(--c-line) / <alpha-value>)',
				/** Color de texto/íconos sobre fondos `bg-text` (botones primarios). */
				inverse: 'rgb(var(--c-inverse) / <alpha-value>)',
				/** Fondo más profundo (footer). */
				ink: 'rgb(var(--c-ink) / <alpha-value>)',
				primary: {
					DEFAULT: '#3aa8f7',
					strong: '#1e9ef5',
				},
			},
			boxShadow: {
				card: '0 20px 80px rgba(0, 0, 0, 0.35)',
				primary: '0 15px 40px rgba(58, 168, 247, 0.2)',
			},
			fontFamily: {
				sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
				mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
			},
		},
	},
	plugins: [],
};

export default config;
