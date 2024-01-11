/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'purple': 'rgb(211, 134, 255)',
			'white': 'rgb(219, 220, 227)',
		},
		borderRadius: {
			DEFAULT: '10px',
		},
		extend: {
			colors: {
				linkPurple: 'rgb(167, 108, 220)',
				lightPurple: 'rgb(198, 152, 238)',
				lightWhite: 'rgb(230, 231, 255)',
				gray: 'rgb(148 163 184)',
				lightGray: 'rgb(160 185 200)'
			},
			backgroundColor: {
				main: 'rgb(34, 30, 48)',
				light: 'rgb(44, 40, 58)',
				hover: 'rgb(40, 38, 56)',
			},
			keyframes: {
				typing: {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				blink: {
					'0%, 100%': { borderColor: 'transparent' },
					'50%': { borderColor: 'rgb(117, 61, 168)' },
			   },
			},
			animation: {
				typing: 'typing 2s steps(20, end) forwards, blink .75s infinite'
			},
		},
	plugins: [],
	}
}
