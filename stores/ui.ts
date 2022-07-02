import { defineStore } from 'pinia'

export interface UIState {
  isOpenDrawer: boolean
  isOpenDialog: boolean
}

export const useUI = defineStore('ui', {
  state: (): UIState => ({
    isOpenDrawer: false,
    isOpenDialog: false,
  }),
  actions: {
    open() {
      this.isOpenDrawer = true
    },
    close() {
      this.isOpenDrawer = false
    },
    openDialog() {
      this.isOpenDialog = true
    },
    closeDialog() {
      this.isOpenDialog = false
    },
  },
})
