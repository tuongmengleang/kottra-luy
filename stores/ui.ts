import { defineStore } from 'pinia'

export interface UIState {
  isOpenDrawer: boolean
}

export const useUI = defineStore('ui', {
  state: (): UIState => ({
    isOpenDrawer: false,
  }),
  actions: {
    toggle() {
      this.isOpenDrawer = !this.isOpenDrawer
    },
    close() {
      this.isOpenDrawer = false
    },
  },
})
