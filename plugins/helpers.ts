import { defineNuxtPlugin } from '#app'
export default defineNuxtPlugin(() => {
  return {
    provide: {
      getPagination: (page: number, size: number) => {
        // const limit = size ? +size : 3
        // const from = page ? page * limit : 0
        // const to = page ? from + size - 1 : size - 1

        const limit = size ? +size : 3
        const from = page ? page * limit : 0
        const to = page ? from + size : size

        return { from, to }
      },

      pagination: (items: any, per: any) => {
        const result: object = Array.from(
          { length: Math.ceil(items / per) },
          (_, i) => ({
            page: i + 1,
            offset: i * per,
            range: [i * per + 1, Math.min((i + 1) * per, items)],
            total: Math.min((i + 1) * per, items) - i * per,
          })
        )
        return result
      },
    },
  }
})
