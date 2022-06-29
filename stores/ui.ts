import { defineStore } from 'pinia'

export interface UIState {
  isOpenDrawer: boolean
}

export const useUI = defineStore('ui', {
  state: (): UIState => ({
    isOpenDrawer: false,
  }),
  actions: {
    open() {
      this.isOpenDrawer = true
    },
    close() {
      this.isOpenDrawer = false
    },
  },
})
