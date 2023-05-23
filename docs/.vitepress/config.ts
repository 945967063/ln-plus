import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'
export default defineConfig({
  title: 'LNPlus基础组件文档',
  description: '基于Element-plus基础组件封装使用',
  lang: 'cn-ZH',
  base: '/ln-plus/',
  lastUpdated: true,
  themeConfig: {
    logo: '/favicon.ico',
    siteTitle: 'LNPlus基础组件文档',
    outline: 3,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/945967063/l-plus' },
    ],
    nav: [
      {
        text: '安装指南',
        link: '/components/',
      },
      { text: '基础组件', link: '/components/TButton/base.md' },
      {
        text: 'GitHub地址',
        link: 'https://github.com/945967063/l-plus',
      },
    ],
    sidebar: {
      '/components': [
        {
          text: '常用组件',
          items: [{ text: '阅片组件', link: '/components/TButton/base.md' }],
        },
        {
          text: '复杂组件',
          items: [
            // {
            //   text: '条件查询组件',
            //   link: '/components/TQueryCondition/base.md',
            // },
          ],
        },
      ],
    },
  },
  markdown: {
    headers: {
      level: [0, 0],
    },
    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: 'github-light', dark: 'github-dark' },
    config(md) {
      md.use(demoBlockPlugin, {
        customClass: 'demoblock-custom',
      })
    },
  },
})
