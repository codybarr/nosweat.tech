module.exports = {
	theme: {
		extend: {
			spacing: {
				'80': '20rem',
				'108': '27rem'
			},
			borderWidth: {
				'14': '14px'
			},
			colors: {
				background: {
					primary: 'var(--bg-background-primary)',
					secondary: 'var(--bg-background-secondary)',
					tertiary: 'var(--bg-background-tertiary)',
					'tertiary-hover': 'var(--bg-background-tertiary-hover)',

					contrast: 'var(--bg-background-contrast)',

					form: 'var(--bg-background-form)'
				},

				copy: {
					primary: 'var(--text-copy-primary)',
					secondary: 'var(--text-copy-hover)',
					tertiary: 'var(--text-copy-tertiary)'
				},

				'border-color': {
					primary: 'var(--border-border-color-primary)',
					accent: 'var(--text-copy-secondary)'
				},

				transparent: 'transparent',

				black: '#000',
				white: '#fff',

				primary: 'var(--bg-background-primary)',
				secondary: 'var(--bg-background-secondary)',
				tertiary: 'var(--bg-background-tertiary)',

				green: {
					100: '#f0fff4',
					200: '#c6f6d5',
					300: '#9ae6b4',
					400: '#68d391',
					500: '#48bb78',
					600: '#38a169',
					700: '#2f855a',
					800: '#276749',
					900: '#22543d'
				},

				gray: {
					100: '#f7fafc',
					200: '#edf2f7',
					300: '#e2e8f0',
					400: '#cbd5e0',
					500: '#a0aec0',
					600: '#718096',
					700: '#4a5568',
					800: '#2d3748',
					900: '#1a202c'
				}
			},
			boxShadow: {
				xl:
					'0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)'
			},
			fontFamily: {
				sans: [
					'Nunito Sans',
					'Roboto',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'"Helvetica Neue"',
					'Arial',
					'"Noto Sans"',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"'
				],
				serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
				mono: [
					'Avenir',
					'Menlo',
					'Monaco',
					'Consolas',
					'"Liberation Mono"',
					'"Courier New"',
					'monospace'
				]
			}
		},
		container: {
			padding: '1rem'
		}
	},
	variants: {
		// Some useful comment
	},
	plugins: [
		// Some useful comment
	]
}
