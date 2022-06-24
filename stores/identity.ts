import { defineStore } from 'pinia'

export interface IIdentityState {
  firstName: string
  lastName: string
}

export const useIdentity = defineStore('identity', {
  state: (): IIdentityState => ({
    firstName: 'Tuong',
    lastName: 'Mengleang',
  }),
  actions: {
    setFirstName(firstName: string) {
      this.firstName = firstName
    },
    setLastName(lastName: string) {
      this.lastName = lastName
    },
    reset() {
      this.firstName = 'Tuong'
      this.lastName = 'Mengleang'
    },
  },
  getters: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
  },
})
