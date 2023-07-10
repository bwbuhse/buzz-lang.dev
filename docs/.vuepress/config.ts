import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: 'buzz',

  description:
    'A small/lightweight statically typed scripting language (in development)',

  head: [
    ['meta', { name: 'theme-color', content: '#221328' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ]
  ],

  markdown: {
    code: {
      lineNumbers: false
    }
  },

  theme: defaultTheme({
    repo: '',
    colorMode: 'auto',
    editLink: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    logo: 'logo.png',
    navbar: [
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'Reference',
        link: '/reference/'
      },
      {
        text: 'Github',
        link: 'https://github.com/buzz-language/buzz'
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/VnMdNSdpNV'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          children: [
            '',
            'building-installing',
            'types-and-variables',
            'operators',
            'optionals',
            'functions',
            'generics',
            'enums',
            'control-flow',
            'objects',
            'protocols',
            'errors',
            'import-export',
            'fibers',
            'calling-native-code'
          ]
        }
      ],
      '/reference/': [
        {
          text: 'Reference',
          children: [
            'strings',
            'lists',
            'maps',
            'patterns',
            'fibers',
            'std',
            'buffer',
            'crypto',
            'debug',
            'fs',
            'gc',
            'io',
            'json',
            'math',
            'os'
          ]
        }
      ]
    }
  })
})