import { defineNuxtPlugin } from '#app'
import { Expenses } from '~/types/expenses'

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

      // formatDate: (date: Date) => {
      //   function pad(s: any) {
      //     return s < 10 ? '0' + s : s
      //   }
      //   const d = new Date(date)
      //   return [pad(d.getMonth() + 1), pad(d.getDate()), d.getFullYear()].join(
      //     '/'
      //   )
      // },

      formatDate: (date: Date) => {
        const d = new Date(date)
        const month = (d.getMonth() + 1).toString().padStart(2, '0')
        const day = d.getDate().toString().padStart(2, '0')
        const year = d.getFullYear()
        return [year, month, day].join('-')
      },

      currentMonth: () => {
        const now = new Date()
        return {
          start:
            now.getFullYear() +
            '-' +
            (now.getMonth() + 1).toString().padStart(2, '0') +
            '-' +
            '01',
          end:
            now.getFullYear() +
            '-' +
            (now.getMonth() + 1).toString().padStart(2, '0') +
            '-' +
            '31',
        }
      },

      groupByCurrency: (arr: Array<Expenses>) => {
        const result: [] = []
        arr.reduce((res, value) => {
          if (!res[value.currency]) {
            res[value.currency] = { currency: value.currency, amount: 0 }
            result.push(res[value.currency])
          }
          res[value.currency].amount += value.amount
          return res
        })
        return result
      },
    },
  }
})
