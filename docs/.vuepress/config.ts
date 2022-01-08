import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/interview-questions-frontend/',
  lang: 'ru',
  title: 'Вью(Vue) интерВью',
  description: 'Данный проект создан для удобного проведения интервью',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',

    navbar: [
      // { text: 'Home', link: '/' },
      { text: 'Javascript', link: '/javascript/' },
      { text: 'React', link: '/react/' },
      // { text: 'External', link: 'https://google.com' }
    ],
  },
})
