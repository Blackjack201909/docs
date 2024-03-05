import { defineConfig, type DefaultTheme } from "vitepress"

// const zhSearch: DefaultTheme.AlgoliaSearchOptions["locales"] = {
// 	zh: {
// 		placeholder: "搜索文档",
// 		translations: {
// 			button: {
// 				buttonText: "搜索文档",
// 				buttonAriaLabel: "搜索文档",
// 			},
// 			modal: {
// 				searchBox: {
// 					resetButtonTitle: "清除查询条件",
// 					resetButtonAriaLabel: "清除查询条件",
// 					cancelButtonText: "取消",
// 					cancelButtonAriaLabel: "取消",
// 				},
// 				startScreen: {
// 					recentSearchesTitle: "搜索历史",
// 					noRecentSearchesText: "没有搜索历史",
// 					saveRecentSearchButtonTitle: "保存至搜索历史",
// 					removeRecentSearchButtonTitle: "从搜索历史中移除",
// 					favoriteSearchesTitle: "收藏",
// 					removeFavoriteSearchButtonTitle: "从收藏中移除",
// 				},
// 				errorScreen: {
// 					titleText: "无法获取结果",
// 					helpText: "你可能需要检查你的网络连接",
// 				},
// 				footer: {
// 					selectText: "选择",
// 					navigateText: "切换",
// 					closeText: "关闭",
// 					searchByText: "搜索提供者",
// 				},
// 				noResultsScreen: {
// 					noResultsText: "无法找到相关结果",
// 					suggestedQueryText: "你可以尝试查询",
// 					reportMissingResultsText: "你认为该查询应该有结果？",
// 					reportMissingResultsLinkText: "点击反馈",
// 				},
// 			},
// 		},
// 	},
// }

// https://vitepress.dev/reference/site-config
export default defineConfig({
	lang: "zh-Hans",
	title: "音乐喷泉互动点播系统",

	description: "https://penquan.3210202.xyz",

	lastUpdated: true,
	cleanUrls: true,
	metaChunk: true,

	markdown: {
		math: true,
		codeTransformers: [
			// We use `[!!code` in demo to prevent transformation, here we revert it back.
			{
				postprocess(code) {
					return code.replace(/\[\!\!code/g, "[!code")
				},
			},
		],
	},

	sitemap: {
		hostname: "https://vitepress.dev",
		transformItems(items) {
			return items.filter(item => !item.url.includes("migration"))
		},
	},

	/* prettier-ignore */
	head: [
   ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
   ['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
   ['meta', { name: 'theme-color', content: '#5f67ee' }],
   ['meta', { property: 'og:type', content: 'website' }],
   ['meta', { property: 'og:locale', content: 'en' }],
   ['meta', { property: 'og:title', content: 'VitePress | Vite & Vue Powered Static Site Generator' }],
   ['meta', { property: 'og:site_name', content: 'VitePress' }],
   ['meta', { property: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
   ['meta', { property: 'og:url', content: 'https://vitepress.dev/' }],
   ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
 ],

	themeConfig: {
		nav: nav(),
		sidebar: {
			"/guide/": { base: "/guide/", items: sidebarGuide() },
			"/service/": { base: "/service/", items: sidebarService() },
			// "/query/": sidebarQuery(),
		},

		logo: "/ICON_喷泉.png",

		search: {
			provider: "local",
			options: {
				locales: {
					zh: {
						translations: {
							button: {
								buttonText: "搜索文档",
								buttonAriaLabel: "搜索文档",
							},
							modal: {
								noResultsText: "无法找到相关结果",
								resetButtonTitle: "清除查询条件",
								footer: {
									selectText: "选择",
									navigateText: "切换",
								},
							},
						},
					},
				},
			}
		},

		editLink: {
			pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
			text: "在 GitHub 上编辑此页面",
		},

		docFooter: {
			prev: "上一页",
			next: "下一页",
		},

		outline: {
			label: "页面导航",
		},

		lastUpdated: {
			text: "最后更新于",
			formatOptions: {
				dateStyle: "short",
				timeStyle: "medium",
			}
		},

		footer: {
			message:
				'深圳示联科技有限公司<a href="https://github.com/vuejs/vitepress/blob/main/LICENSE"> </a>',
			copyright: `Copyright © 2017-${new Date().getFullYear()} <a href="https://github.com/yyx990803"></a>`,
		},

		socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
		carbonAds: { code: "CEBDT27Y", placement: "vuejsorg" },

		// langMenuLabel: '多语言',
		returnToTopLabel: "回到顶部",
		sidebarMenuLabel: "菜单",
		darkModeSwitchLabel: "主题",
		lightModeSwitchTitle: "切换到浅色模式",
		darkModeSwitchTitle: "切换到深色模式",
	},
})

function nav(): DefaultTheme.NavItem[] {
	return [
		{ text: "指南", link: "/guide/手机怎么控", activeMatch: "/guide/" },
		{
			text: "服务",
			activeMatch: "/service/",
			items: [
				{ text: "系统升级", link: "/service/系统升级" },
				{ text: "系统测试", link: "/service/系统测试" },
				{ text: "系统托管", link: "/service/系统托管" },
				{ text: "设计监理", link: "/service/设计监理" },
			],
		},
		// {
		// 	text: "联系",
		// 	link: "/query/frontend/手机小程序定制",
		// 	activeMatch: "/query/",
		// 	items: [
		// 		{
		// 			items: [
		// 				{ text: "手机小程序定制", link: "/query/frontend/手机小程序定制" },
		// 				{ text: "编写喷泉节目脚本", link: "/query/frontend/编写喷泉节目脚本" },
		// 				{ text: "教程", link: "/query/frontend/教程" },
		// 			],
		// 		},
		// 		{
		// 			items: [
		// 				{ text: "已建成喷泉咨询", link: "/query/business/已建成喷泉咨询" },
		// 				{ text: "在建喷泉咨询", link: "/query/business/在建喷泉咨询" },
		// 			],
		// 		},
		// 	],
		// },
	]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "问最多的问题：",
			collapsed: false,
			items: [
				// { text: "指南", link: "/guide/指南" },
				{ text: "手机怎么控？", link: "手机怎么控" },
				{ text: "喷泉怎么演？", link: "喷泉怎么演" },
				{ text: "什么喷泉才能被手机控制？", link: "什么喷泉才能被手机控制" },
				{ text: "还有什么玩法？", link: "还有什么玩法" },
			],
		},
		{
			text: "手机点播操作：",
			collapsed: false,
			items: [
				{ text: "搜索小程序", link: "搜索小程序" },
				{ text: "打开小程序", link: "打开小程序" },
				{ text: "预订节目", link: "预订节目" },
			],
		},
		{
			text: "更多玩法：",
			collapsed: false,
			items: [
				{ text: "进阶玩法", link: "进阶玩法" },
				{ text: "常见问题", link: "常见问题" },
			],
		},
	]
}

function sidebarService(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: "系统升级：",
			collapsed: false,
			items: [
				{ text: "快速评估", link: "快速评估" },
				{ text: "前期初试", link: "前期初试" },
				{ text: "平行部署", link: "平行部署" },
				{ text: "验收运营", link: "验收运营" },
			],
		},
		{
			text: "其他服务：",
			collapsed: false,
			items: [
				{ text: "系统测试", link: "系统测试" },
				{ text: "系统托管", link: "系统托管" },
				{ text: "设计监理", link: "设计监理" },
			],
		},
	]
}
