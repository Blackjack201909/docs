import { defineConfig, type DefaultTheme } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
	lang: "zh-Hans",
	title: "音乐喷泉互动点播系统",

	description: "https://penquan.3210202.xyz",

	lastUpdated: false,
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
		hostname: "https://penquan.3210202.xyz",
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

		// editLink: {
		// 	pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
		// 	text: "在 GitHub 上编辑此页面",
		// },

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
			message: '深圳示联科技有限公司',
			copyright: `Copyright © 2017-${new Date().getFullYear()}`,
		},

		// socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
		// carbonAds: { code: "CEBDT27Y", placement: "vuejsorg" },

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
      // { text: "首页", link: "/", activeMatch: "/" },
		{ text: "指南", link: "/guide/点播节目", activeMatch: "/guide/" },
		{
			text: "服务",
         link: "/service/为什么要用", 
			activeMatch: "/service/",
			// items: [
			// 	{ text: "互动点播系统", link: "/service/为什么要用" },
			// 	{ text: "免费服务", link: "/service/信息更新" },
			// 	{ text: "付费服务", link: "/service/喷泉脚本" },
			// 	{ text: "试运营", link: "/service/试运营" },
			// ],
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
			text: "安装手机客户端",
			collapsed: false,
			items: [
            { text: "输入网址", link: "输入网址" },
				{ text: "扫描二维码", link: "扫描二维码" },
			],
		},
		{
			text: "基本功能：",
			collapsed: false,
			items: [
				{ text: "点播节目", link: "点播节目" },
				{ text: "与喷泉互动", link: "与喷泉互动" },
				{ text: "插播留言", link: "插播留言" }
			],
		},
		{
			text: "高级功能：",
			collapsed: false,
			items: [
            { text: "自制媒体上传", link: "自制媒体上传" },
				{ text: "自制广告", link: "自制广告" },
				{ text: "自制通知、启示", link: "自制通知启示" },
            { text: "活动专场", link: "活动专场" },
			],
		},
		{
			text: "其他：",
			collapsed: true,
			items: [
            { text: "问与答", link: "问与答" },
				{ text: "互动进阶", link: "互动进阶" }
			],
		}
	]
}

function sidebarService(): DefaultTheme.SidebarItem[] {
	return [
      {
			text: "互动点播系统：",
			collapsed: false,
			items: [
				{ text: "为什么要用？", link: "为什么要用" },
				{ text: "如何接入？", link: "如何接入" },
				{ text: "试运营", link: "试运营" },
			],
		},
		{
			text: "免费服务：",
			collapsed: false,
			items: [
				{ text: "信息更新", link: "信息更新" },
				{ text: "初步评估", link: "初步评估" },
				{ text: "音乐点播", link: "音乐点播" },
				{ text: "测试验证", link: "测试验证" },
			],
		},
		{
			text: "付费服务：",
			collapsed: true,
			items: [
				{ text: "喷泉脚本", link: "喷泉脚本" },
            { text: "实时互动子系统", link: "实时互动子系统" },
				{ text: "无人值守子系统", link: "无人值守子系统" },
				{ text: "信息插播子系统", link: "信息插播子系统" }
			],
		},
	]
}
