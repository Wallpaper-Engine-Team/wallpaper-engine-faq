module.exports = {
	title: 'Wallpaper Engine FAQ',
	locales: {
		'/en/': {
			lang: 'en-US',
			title: 'Wallpaper Engine - Troubleshooting & FAQ',
			description: 'This websites covers frequent Wallpaper Engine-related questions and issues',
		}
	},
	themeConfig: {
		logo: '/img/wallpaperenginelogo.png',
		locales: {
			'/en/': {
				selectText: 'Languages',
				label: 'English',
				ariaLabel: 'Languages',
				sidebar: {
					'/': getTopLevelSidebar('/en/', "General", "Crashes", "Video Wallpapers", "Error Analysis & Contact", "Audio", "Performance", "Wallpapers not showing", "User Interface", "Steam / Downloads / Uploads"),
				}
			}
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
				locale + 'general/multiscreencenter',
				locale + 'general/editingwallpapers'
			]
		},
		{
			title: steamGroup,
			collapsable: false,
			children: [
				locale + 'steam/download',
				locale + 'steam/steamworks',
				locale + 'steam/redownload',
				locale + 'steam/backup',
				locale + 'steam/uploads',
				locale + 'steam/ingame'
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
				locale + 'interface/emptyresults',
				locale + 'interface/exclude',
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
				locale + 'debug/scantool',
				locale + 'debug/contact'
			]
		}
	]
}