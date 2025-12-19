import { defineConfig } from 'vitepress'

export default defineConfig({
  // 标题（浏览器后缀）
  title: "Lalo",
  // 描述
  description: "Lalo Blog",
  // 语言
  lang: 'zh-CN',
  // 根目录，如果需要部署成htpps://github.com/blog/的形式，则设置/blog/
  base: '/lalo.github.io/',
  // 文档最后更新时间展示
  lastUpdated: true,
  // 去除浏览器链接中的.html后缀
  cleanUrls: true,
  // markdown显示行数
  markdown: {
    lineNumbers: true,
  },
  // head设置
  head: [
    // 浏览器中图标 (SVG favicon)
    ["link", {rel: "icon", href: "/lalo.github.io/favicon.svg", type: "image/svg+xml"}],
    // 备用 PNG favicon
    ["link", {rel: "alternate icon", href: "/lalo.github.io/favicon.png", type: "image/png"}],
    // Apple Touch Icon
    ["link", {rel: "apple-touch-icon", href: "/lalo.github.io/logo.svg"}],
    // 添加百度统计代码
    //['script', {},
    //`
    //  var _hmt = _hmt || [];
    //  (function() {
    //    var hm = document.createElement("script");
    //    hm.src = "https://hm.baidu.com/hm.js?自己申请";
    //    var s = document.getElementsByTagName("script")[0];
    //    s.parentNode.insertBefore(hm, s);
    //  })();
    //`
    //]
  ],
  // 主题设置
  themeConfig: {
    // 左上角logo
    logo: '/logo.svg',
    // 首页右上角导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/aboutme' }
    ],
    // 文章左侧导航栏
    sidebar: [
      {
        text: '👤 关于',
        items: [
          { text: 'About Me', link: '/aboutme' }
        ]
      },
      {
        text: '📝 文章',
        collapsed: false,
        items: [
          { text: '我的第一篇博客', link: '/posts/first-post' }
        ]
      }
    ],
    // 文章底部导航栏的自定义配置，默认是英语
    docFooter: {
			prev: '上一篇',
			next: '下一篇',
		},
    // 文章右侧目录展示级别和标题
    outline: {
      level: [2, 6],
      label: '文章目录'
    },
    // 文章更新时间的前缀文本
    lastUpdatedText: '最后更新时间',
    // 开启本地搜索（左上角）
    search: {
      provider: 'local',
    },
    // 右上角Github链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/SalamancaLaluo/lalo.github.io/' }
    ],
    // 页脚
    footer: {
			copyright: 'Copyright © 2025-present Lalo',
		}
  }
})
