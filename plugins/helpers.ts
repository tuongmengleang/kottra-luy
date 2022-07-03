import { defineNuxtPlugin } from '#app'
export default defineNuxtPlugin(() => {
  // now available on `nuxtApp.$injected`
  // nuxtApp.provide('injected', () => 'my injected function')

  // You can alternatively use this format, which comes with automatic type support
  return {
    provide: {
      injected: () => 'my injected function',
    },
  }
})
