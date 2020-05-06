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
					'/': getTopLevelSidebar('/en/', "General", "Crashes", "Video Wallpapers", "Error Analysis", "Audio", "Performance", "Wallpapers not showing", "User Interface", "Downloads / Steam"),
				}
			},
			'/de/': {
				selectText: 'Sprachen',
				label: 'Deutsch',
				ariaLabel: 'Sprachen',
				sidebar: {
					'/de/': getTopLevelSidebar('/de/', "Allgemein", "Abstürze", "Video-Wallpaper", "Fehleranalyse", "Audio", "Leistung", "Nicht sichtbare Wallpaper", "Benutzeroberfläche", "Downloads / Steam"),
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

function getTopLevelSidebar(locale, generalGroup, crashGroup, videoGroup, debugGroup, audioGroup, performanceGroup, notShowingGroup, interfaceGroup, steamGroup) {
	return [
		{
			title: generalGroup,
			collapsable: false,
			children: [
				locale + 'general/autostart',
				locale + 'general/brokensleep',
				locale + 'general/rgb',
				locale + 'general/focusloss',
				locale + 'general/bits',
				locale + 'general/restoredefaults',
				locale + 'general/export',
				locale + 'general/tray',
				locale + 'general/linuxmacos',
				locale + 'general/aero',
			]
		},
		{
			title: steamGroup,
			collapsable: false,
			children: [
				locale + 'steam/backup',
			]
		},
		{
			title: notShowingGroup,
			collapsable: false,
			children: [
				locale + 'noshow/nowallpaper',
				locale + 'noshow/notplaying',

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
			title: interfaceGroup,
			collapsable: false,
			children: [
				locale + 'interface/broken',
				locale + 'interface/transparent',

			]
		},
		{
			title: videoGroup,
			collapsable: false,
			children: [
				locale + 'videos/lav',
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
			title: performanceGroup,
			collapsable: false,
			children: [
				locale + 'performance/gpu',
				locale + 'performance/game',
				locale + 'performance/refresh',
				locale + 'performance/dwm',
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