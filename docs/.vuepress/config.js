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
					'/': getTopLevelSidebar('/en/', "General", "Crashes", "Video Wallpapers", "Error Analysis", "Audio", "Performance"),
				}
			},
			'/de/': {
				selectText: 'Sprachen',
				label: 'Deutsch',
				ariaLabel: 'Sprachen',
				sidebar: {
					'/de/': getTopLevelSidebar('/de/', "Allgemein", "Abstürze", "Video-Wallpaper", "Fehleranalyse", "Audio", "Leistung"),
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

function getTopLevelSidebar(locale, generalGroup, crashGroup, videoGroup, debugGroup, audioGroup, performanceGroup) {
	return [
		{
			title: generalGroup,
			collapsable: false,
			children: [
				locale + 'general/tray'
			]
		},
		{
			title: crashGroup,
			collapsable: false,
			children: [
				locale + 'crash/application',
				locale + 'crash/system',
			]
		},
		{
			title: performanceGroup,
			collapsable: false,
			children: [
				locale + 'performance/gpu',
			]
		},
		{
			title: videoGroup,
			collapsable: false,
			children: [
				locale + 'videos/lav',
				locale + 'videos/notplaying',
				locale + 'videos/windows-n',
				locale + 'videos/performance',
				locale + 'videos/artifacts',
				locale + 'videos/redline',
			]
		},
		{
			title: audioGroup,
			collapsable: false,
			children: [
				locale + 'audio/audiodetection',
				locale + 'audio/intermittent',
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