import { defineNuxtConfig } from 'nuxt'
import { IntlifyModuleOptions } from '@intlify/nuxt3'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

declare module '@nuxt/schema' {
  interface NuxtConfig {
    intlify?: IntlifyModuleOptions
  }
}

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // ssr: false,
  // add
  app: {
    head: {
      title: 'Kottra Luy',
      titleTemplate: '%s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Log in to Kottra Luy to Start note your expenses and revenue by yourself.',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Kottra Luy' },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'Log in to Kottra Luy to Start note your expenses and revenue by yourself.',
        },
        { hid: 'twitter:image', name: 'twitter:image', content: '/cover.png' },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'Kottra Luy',
        },
        { hid: 'og:title', property: 'og:title', content: 'Kottra Luy' },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Log in to Kottra Luy to Start note your expenses and revenue by yourself.',
        },
        { hid: 'og:image', property: 'og:image', content: '/cover.png' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  // css
  css: [
    'virtual:windi-base.css',
    'virtual:windi-components.css',
    'virtual:windi-utilities.css',
    '~/assets/sass/app.scss',
  ],

  // plugins
  plugins: ['~/plugins/navbar.ts'],

  // modules
  modules: ['@nuxtjs/supabase', 'nuxt-icons'],

  // build
  build: {
    transpile: ['@headlessui/vue'],
  },

  // build modules
  buildModules: [
    'nuxt-windicss',
    '@nuxtjs/eslint-module',
    'unplugin-icons/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/svg',
    '@intlify/nuxt3',
    '@vueuse/nuxt',
  ],

  // experimental features
  experimental: {
    reactivityTransform: true,
  },

  // auto import components
  components: true,

  // vite plugins
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
              @import "@/assets/sass/utilities/_variables.scss";
          `,
        },
      },
    },
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
    ],
  },

  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en',
      fallbackLocale: 'en',
      availableLocales: ['en', 'kh', 'ja'],
    },
  },

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  // windicss
  windicss: {
    analyze: {
      analysis: {
        interpretUtilities: false,
      },
      server: {
        port: 4000,
        open: false,
      },
    },
    scan: true,
  },

  // Supabase
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
  },
})
