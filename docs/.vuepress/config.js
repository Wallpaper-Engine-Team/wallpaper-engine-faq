module.exports = {
	title: 'Wallpaper Engine FAQ',
	locales: {
		'/en/': {
			lang: 'en-US',
			title: 'Wallpaper Engine - Troubleshooting & FAQ',
			description: 'This websites covers frequent Wallpaper Engine-related questions and issues',
		},
		'/de/': {
			lang: 'de-DE',
			title: 'Wallpaper Engine - Problemlösungen & Häufige Fragen',
			description: 'Diese Website befasst sich mit häufig gestellten Fragen und Problemen rund um Wallpaper Engine'
		},
	},
	themeConfig: {
		logo: '/img/wallpaperenginelogo.png',
		locales: {
			'/en/': {
				selectText: 'Languages',
				label: 'English',
				ariaLabel: 'Languages',
				sidebar: {
					'/': getTopLevelSidebar('/en/', 'General', "Video Wallpapers", "Error Analysis"),
				}
			},
			'/de/': {
				selectText: 'Sprachen',
				label: 'Deutsch',
				ariaLabel: 'Sprachen',
				sidebar: {
					'/de/': getTopLevelSidebar('/de/', 'Allgemein', "Video-Wallpaper", "Fehleranalyse"),
				}
			},
		}
	},
	plugins: [
		['@vuepress/back-to-top', true],
		['@vuepress/google-analytics', { ga: '' }],
		['vuepress-plugin-redirect', { locales: true, fuzzyLocales: true } ],
	],
};

function getTopLevelSidebar(locale, generalGroup, videoGroup, debugGroup) {
	return [
		{
			title: generalGroup,
			collapsable: false,
			children: [
				locale + 'general/bsod',
			]
		},
		{
			title: videoGroup,
			collapsable: false,
			children: [
				locale + 'videos/notplaying',
				locale + 'videos/lav',
				locale + 'videos/windows-n',
				locale + 'videos/performance',
				locale + 'videos/artifacts',
				locale + 'videos/redline',
			]
		},
		{
			title: debugGroup,
			collapsable: false,
			children: [
				locale + 'debug/scantool'
			]
		}
	]
}