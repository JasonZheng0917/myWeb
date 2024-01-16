import { defaultTheme } from '@vuepress/theme-default'

export default {
    title: 'Jason Zheng',
    base: '/myWeb',
    head: [
        [
            'link', {rel: 'icon',href: '/myWeb/bookmarkIcon/letter-j.png'}
        ]
    ],
    themeColor: true,
    theme: defaultTheme({
        logo: '/bughello.gif',
        sidebar: false,
        navbar: [
            {
                text: '首頁',
                link: '/',
            },
            {
                text: '關於我',
                link: '/handbook/about.md',
                activeMatch: '^/handbook'
            },
            // {
            //     text: 'MyProjects',
            //     children: [{text: 'Demo',link: 'https://github.com/JasonZheng0917'}],
            // },
            { text: 'Github', link: 'https://github.com/JasonZheng0917' }
        ]
    })
}