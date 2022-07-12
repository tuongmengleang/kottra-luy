<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.dashboard.title')" class="capitalize" />
    </PageHeader>

    <PageBody>
      <!--- Dashboard Card --->
      <div
        class="grid grid-cols-4 gap-5 <sm:grid-cols-1 <md:grid-cols-2 <lg:grid-cols-2 mt-4"
      >
        <div class="w-full p-4 rounded-2xl dark-shadow">
          <div class="flex items-center text-2xl text-black dark:text-white">
            <IconTabler:wallet />
            <button type="button" class="ml-auto">
              <IconHeroicons-outline:dots-vertical class="self-start text-sm" />
            </button>
          </div>
          <div
            v-if="expenses"
            class="flex flex-col gap-1 divide-y divide-dashed divide-blue-500"
          >
            <div class="w-full text-center text-2xl font-bold">
              <h3 class="py-3">
                {{
                  expenses.total[1].amount.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })
                }}
              </h3>
            </div>
            <div class="w-full text-center text-2xl font-bold">
              <h3 class="py-3">
                {{
                  expenses.total[0].amount.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'KHR',
                  })
                }}
              </h3>
            </div>
          </div>
          <!--      <span class="text-md">ការចំណាយប្រចាំខែសរុប</span>-->
          <span class="text-md">Monthly expenses</span>
        </div>

        <div class="w-full p-4 rounded-2xl dark-shadow">
          <div class="flex text-2xl text-black dark:text-white">
            <IconHeroicons-outline:fire />
            <button type="button" class="ml-auto">
              <IconHeroicons-outline:dots-vertical class="self-start text-sm" />
            </button>
          </div>
          <div class="pt-4 pb-2 text-3xl font-bold">
            <h3>7</h3>
          </div>
          <span class="text-sm">Employees working today</span>
        </div>

        <div class="w-full p-4 rounded-2xl dark-shadow">
          <div class="flex text-2xl text-black dark:text-white">
            <IconGg:credit-card />
            <button type="button" class="ml-auto">
              <IconHeroicons-outline:dots-vertical class="self-start text-sm" />
            </button>
          </div>
          <div class="pt-4 pb-2 text-3xl font-bold">
            <h3>$3,287.49</h3>
          </div>
          <span class="text-sm">This week's card spending</span>
        </div>
      </div>
    </PageBody>
  </PageWrapper>
</template>

<script lang="ts" setup>
import { Expenses } from '~/types/expenses'
definePageMeta({
  layout: 'page',
  middleware: 'auth',
})
const nuxtApp = useNuxtApp()

const client = useSupabaseClient()
const { data: expenses } = await useAsyncData('count', async () => {
  const { data } = await client
    .from<Expenses>('expenses')
    .select('amount, currency')
  const total = nuxtApp.$groupByCurrency(data)
  return { data, total }
})
// console.log('useAsyncData :', expenses.value)
// const data = nuxtApp.$groupByCurrency(expenses.value)
// console.log('data :', data)
</script>
