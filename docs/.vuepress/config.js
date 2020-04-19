module.exports = {
	title: 'Wallpaper Engine FAQ',
	locales: {
		'/': {
			lang: 'en-US',
			title: 'Wallpaper Engine - Frequently Asked Questions (FAQ)',
			description: 'This websites covers frequent Wallpaper Engine-related questions and issues',
		},
		'/de/': {
			lang: 'de-DE',
			title: 'Wallpaper Engine - Häufige Fragen (FAQ)',
			description: 'Diese Website befasst sich mit häufig gestellten Fragen und Problemen rund um Wallpaper Engine'
		},
	},
	themeConfig: {
		locales: {
			'/': {
				selectText: 'Languages',
				label: 'English',
				ariaLabel: 'Languages',
			},
			'/de/': {
				selectText: 'Sprachen',
				label: 'Deutsch',
				ariaLabel: 'Sprachen',
			},
		}
	},
	plugins: [
		['@vuepress/back-to-top', true],
		['@vuepress/google-analytics', { ga: '' }],
	],
};