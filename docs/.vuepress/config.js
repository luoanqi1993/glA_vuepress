module.exports = {
  base:'/glA_vuepress/',
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/'},
      { text: '配置', link: '/config/' },
      { text: '插件', link: '/plugin/' },
      { text: '主题', link: '/theme/' },
      { text: '关于', link: 'https://www.vuepress.cn/' },
      { text: '友链', link: 'https://www.vuepress.cn/' },
      {
        text: '学习笔记',
        ariaLabel: '这是提示语',
        items: [
          { text: '笔记', link: '/', target:'_self' },
          { text: '其他链接', link: 'https://www.vuepress.cn/', target:'_blank' }
        ]
      }
    ],
    sidebar:{
      '/guide/':[
        {
          title: '指南',
          collapsable: false,
          children: [
            '',
            'test001',
            'test002',
          ]
        },
        {
          title: '深入',
          collapsable: false,
          children: [
            'test003',
            'test004',
          ]
        },
      ],
      "/plugin/":[
        {
          title: '插件',
          collapsable: false,
          children: [
            ['','介绍'],
            'plugin01',
            'plugin02',
          ]
        },
        {
          title: '官方插件',
          collapsable: false,
          children: [
            'plugin03',
            'plugin04',
          ]
        },
      ],
      "/theme/":[
        {
          title: '主题',
          collapsable: false,
          children: [
            ['','介绍'],
            'theme01',
            'theme02',
          ]
        },
      ],
    },
    search: true, // 启用搜索框
    sidebarDepth: 1,  // 0 禁用标题  1 标题为二级  2 标题到三级
    lastUpdated: 'Last Updated',
    smoothScroll: true, // 页面滚动
  },
  serviceWorker:true
}