import { defineNuxtPlugin } from '#app'
import Pagination from 'v-pagination-3'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Pagination', Pagination)
})
