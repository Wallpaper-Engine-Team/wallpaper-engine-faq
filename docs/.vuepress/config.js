module.exports = {
	title: 'Wallpaper Engine - Troubleshooting & FAQ',
	locales: {
		'/en/': {
			lang: 'en-US',
			title: 'Wallpaper Engine - Troubleshooting & FAQ',
			description: 'This websites covers frequent Wallpaper Engine-related questions and issues',
		}
	},
	themeConfig: {
		logo: '/img/wallpaperenginelogo.png',
		nextLinks: false,
		prevLinks: false,
		locales: {
			'/en/': {
				contactUs: 'Cannot fix your problem? Contact us!',
				searchPlaceholder: 'Keyword Search',
				selectText: 'Languages',
				label: 'English',
				ariaLabel: 'Languages',
				sidebar: {
					'/': getTopLevelSidebar('/en/', "Windows", "Crashes", "Video Wallpapers", "Error Analysis & Contact", "Audio", "Performance", "Wallpapers not showing", "Wallpaper Browser", "Steam / Downloads / Uploads", "General"),
				}
			}
		}
	},
	plugins: [
		['@vuepress/back-to-top', true],
		['@vuepress/google-analytics', { ga: 'UA-145121163-3' }],
		['vuepress-plugin-redirect', { locales: true } ],
		['sitemap', { hostname: 'https://help.wallpaperengine.io' } ],
		['robots', {
				host: "https://help.wallpaperengine.io",
				allowAll: true,      
				sitemap: "/sitemap.xml",
				policies: [
					{
						userAgent: '*',
					}
				]
			},
		],
	]
};

function getTopLevelSidebar(locale, windowsGroup, crashGroup, videoGroup, debugGroup, audioGroup, performanceGroup, notShowingGroup, interfaceGroup, steamGroup, functionalityGroup) {
	return [
		{
			title: functionalityGroup,
			collapsable: false,
			children: [
				locale + 'functionality/automaticstartup',
				locale + 'functionality/rgb',
				locale + 'functionality/restoredefaults',
				locale + 'functionality/export',
				locale + 'functionality/tray',
				locale + 'functionality/editingwallpapers',
				locale + 'functionality/linuxmacos',
				locale + 'functionality/applicationrules'
			]
		},
		{
			title: windowsGroup,
			collapsable: false,
			children: [
				locale + 'general/bits',
				locale + 'general/brokensleep',
				locale + 'general/focusloss',
				locale + 'general/multiscreencenter',
				locale + 'general/aero',
				locale + 'videos/windows-n',
			]
		},
		{
			title: steamGroup,
			collapsable: false,
			children: [
				locale + 'steam/download',
				locale + 'steam/steamworks',
				locale + 'steam/redownload',
				locale + 'steam/contentfile',
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
				locale + 'videos/performance',
				locale + 'videos/artifacts',
				locale + 'videos/redline',
				locale + 'videos/windows-n',
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