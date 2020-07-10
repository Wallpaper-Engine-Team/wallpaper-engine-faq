const en = require('../../app_strings/en.json');
const es = require('../../app_strings/es.json');
const fr = require('../../app_strings/fr.json');
const ja = require('../../app_strings/ja.json');
const ko = require('../../app_strings/ko.json');
const pt = require('../../app_strings/pt.json');
const ru = require('../../app_strings/ru.json');
const th = require('../../app_strings/th.json');
const tr = require('../../app_strings/tr.json');
const zh = require('../../app_strings/zh.json');
const zhtw = require('../../app_strings/zh-tw.json');

module.exports = {
	title: 'Wallpaper Engine - Troubleshooting & FAQ',
	locales: {
		'/en/': {
			lang: 'en',
			title: en.title,
			description: en.description,
		},
		'/es/': {
			lang: 'es',
			title: es.title,
			description: es.description,
		},
		'/fr/': {
			lang: 'fr',
			title: fr.title,
			description: fr.description,
		},
		'/ja/': {
			lang: 'ja',
			title: ja.title,
			description: ja.description,
		},
		'/ko/': {
			lang: 'ko',
			title: ko.title,
			description: ko.description,
		},
		'/pt/': {
			lang: 'pt',
			title: pt.title,
			description: pt.description,
		},
		'/ru/': {
			lang: 'ru',
			title: ru.title,
			description: ru.description,
		},
		'/th/': {
			lang: 'th',
			title: th.title,
			description: th.description,
		},
		'/tr/': {
			lang: 'tr',
			title: tr.title,
			description: tr.description,
		},
		'/zh/': {
			lang: 'zh',
			title: zh.title,
			description: zh.description,
		},
		'/zh-tw/': {
			lang: 'zh-tw',
			title: zhtw.title,
			description: zhtw.description,
		},
	},
	themeConfig: {
		logo: '/img/wallpaperenginelogo.png',
		nextLinks: false,
		prevLinks: false,
		locales: {
			'/es/': {
				contactUs: es.contactUs,
				searchPlaceholder: es.searchPlaceholder,
				selectText: es.language_name,
				label: es.language_name,
				ariaLabel: es.language_name,
				sidebar: {
					'/': getTopLevelSidebar('/es/', es.sidebar_windows, es.sidebar_crashes, es.sidebar_videos, es.sidebar_analysis, es.sidebar_audio, es.sidebar_performance, es.sidebar_noshow, es.sidebar_browser, es.sidebar_downloads, es.sidebar_general),
				}
			},
			'/fr/': {
				contactUs: fr.contactUs,
				searchPlaceholder: fr.searchPlaceholder,
				selectText: fr.language_name,
				label: fr.language_name,
				ariaLabel: fr.language_name,
				sidebar: {
					'/': getTopLevelSidebar('/fr/', fr.sidebar_windows, fr.sidebar_crashes, fr.sidebar_videos, fr.sidebar_analysis, fr.sidebar_audio, fr.sidebar_performance, fr.sidebar_noshow, fr.sidebar_browser, fr.sidebar_downloads, fr.sidebar_general),
				}
			},
			'/ja/': {
				contactUs: ja.contactUs,
				searchPlaceholder: ja.searchPlaceholder,
				selectText: ja.language_name,
				label: ja.language_name,
				ariaLabel: ja.language_name,
				sidebar: {
					'/': getTopLevelSidebar('/ja/', ja.sidebar_windows, ja.sidebar_crashes, ja.sidebar_videos, ja.sidebar_analysis, ja.sidebar_audio, ja.sidebar_performance, ja.sidebar_noshow, ja.sidebar_browser, ja.sidebar_downloads, ja.sidebar_general),
				}
			},
			'/ko/': {
				contactUs: ko.contactUs,
				searchPlaceholder: ko.searchPlaceholder,
				selectText: ko.language_name,
				label: ko.language_name,
				ariaLabel: ko.language_name,
				sidebar: {
					'/': getTopLevelSidebar('/ko/', ko.sidebar_windows, ko.sidebar_crashes, ko.sidebar_videos, ko.sidebar_analysis, ko.sidebar_audio, ko.sidebar_performance, ko.sidebar_noshow, ko.sidebar_browser, ko.sidebar_downloads, ko.sidebar_general),
				}
			},
			'/pt/': {
				contactUs: pt.contactUs,
				searchPlaceholder: pt.searchPlaceholder,
				selectText: pt.language_name,
				label: pt.language_name,
				ariaLabel: pt.language_name,
				sidebar: {
					'/': getTopLevelSidebar('/pt/', pt.sidebar_windows, pt.sidebar_crashes, pt.sidebar_videos, pt.sidebar_analysis, pt.sidebar_audio, pt.sidebar_performance, pt.sidebar_noshow, pt.sidebar_browser, pt.sidebar_downloads, pt.sidebar_general),
				}
			},
			'/ru/': {
				contactUs: ru.contactUs,
				searchPlaceholder: ru.searchPlaceholder,
				selectText: ru.language_name,
				label: ru.language_name,
				ariaLabel: ru.language_name,
				sidebar: {
					'/': getTopLevelSidebar('/ru/', ru.sidebar_windows, ru.sidebar_crashes, ru.sidebar_videos, ru.sidebar_analysis, ru.sidebar_audio, ru.sidebar_performance, ru.sidebar_noshow, ru.sidebar_browser, ru.sidebar_downloads, ru.sidebar_general),
				}
			},
			'/th/': {
				contactUs: th.contactUs,
				searchPlaceholder: th.searchPlaceholder,
				selectText: th.language_name,
				label: th.language_name,
				ariaLabel: th.language_name,
				sidebar: {
					'/': getTopLevelSidebar('/th/', th.sidebar_windows, th.sidebar_crashes, th.sidebar_videos, th.sidebar_analysis, th.sidebar_audio, th.sidebar_performance, th.sidebar_noshow, th.sidebar_browser, th.sidebar_downloads, th.sidebar_general),
				}
			},
			'/tr/': {
				contactUs: tr.contactUs,
				searchPlaceholder: tr.searchPlaceholder,
				selectText: tr.language_name,
				label: tr.language_name,
				ariaLabel: tr.language_name,
				sidebar: {
					'/': getTopLevelSidebar('/tr/', tr.sidebar_windows, tr.sidebar_crashes, tr.sidebar_videos, tr.sidebar_analysis, tr.sidebar_audio, tr.sidebar_performance, tr.sidebar_noshow, tr.sidebar_browser, tr.sidebar_downloads, tr.sidebar_general),
				}
			},
			'/zh/': {
				contactUs: zh.contactUs,
				searchPlaceholder: zh.searchPlaceholder,
				selectText: zh.language_name,
				label: zh.language_name,
				ariaLabel: zh.language_name,
				sidebar: {
					'/': getTopLevelSidebar('/zh/', zh.sidebar_windows, zh.sidebar_crashes, zh.sidebar_videos, zh.sidebar_analysis, zh.sidebar_audio, zh.sidebar_performance, zh.sidebar_noshow, zh.sidebar_browser, zh.sidebar_downloads, zh.sidebar_general),
				}
			},
			'/zh-tw/': {
				contactUs: zhtw.contactUs,
				searchPlaceholder: zhtw.searchPlaceholder,
				selectText: zhtw.language_name,
				label: zhtw.language_name,
				ariaLabel: zhtw.language_name,
				sidebar: {
					'/': getTopLevelSidebar('/zh-tw/', zhtw.sidebar_windows, zhtw.sidebar_crashes, zhtw.sidebar_videos, zhtw.sidebar_analysis, zhtw.sidebar_audio, zhtw.sidebar_performance, zhtw.sidebar_noshow, zhtw.sidebar_browser, zhtw.sidebar_downloads, zhtw.sidebar_general),
				}
			},
			'/en/': {
				contactUs: en.contactUs,
				searchPlaceholder: en.searchPlaceholder,
				selectText: en.language_name,
				label: en.language_name,
				ariaLabel: en.language_name,
				sidebar: {
					'/': getTopLevelSidebar('/en/', en.sidebar_windows, en.sidebar_crashes, en.sidebar_videos, en.sidebar_analysis, en.sidebar_audio, en.sidebar_performance, en.sidebar_noshow, en.sidebar_browser, en.sidebar_downloads, en.sidebar_general),
				}
			},
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
				locale + 'crash/dxsupport',
				locale + 'crash/battleye',
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
				locale + 'noshow/notplaying',
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