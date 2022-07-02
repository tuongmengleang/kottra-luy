<script lang="ts" setup>
import expenses from '../server/data/expenses.json'
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.expenses.title')" class="capitalize" />
    </PageHeader>

    <PageBody>
      <ClientOnly>
        <div class="mt-8 border border-gray-200 rounded-lg pb-2">
          <!-- Header Table -->
          <div class="w-full flex items-center p-5">
            <div class="text-xl text-black font-semibold">
              <h1>{{ $t('pages.expenses.title') }} List</h1>
            </div>
            <div class="flex items-center gap-5 ml-auto">
              <Button size="md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2 <sm:mr-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
                </svg>
                <span class="<sm:hidden">Download CSV</span>
              </Button>
              <Button size="md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2 <sm:mr-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span class="<sm:hidden"
                  >Add {{ $t('pages.expenses.title') }}</span
                >
              </Button>
            </div>
          </div>

          <!-- Table -->
          <table class="w-full border-t border-gray-200">
            <thead>
              <tr>
                <th class="py-3 px-3">No</th>
                <th>Amount</th>
                <th>Type</th>
                <th class="w-30"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in expenses"
                :key="index"
                class="h-14 text-center even:bg-white odd:bg-gray-100"
              >
                <td>{{ item.id }}</td>
                <td>{{ item.amount }}</td>
                <td>{{ item.category }}</td>
                <td class="flex items-center justify-center gap-5 h-14">
                  <button
                    type="button"
                    title="Delete"
                    class="p-1 rounded-full text-black hover:bg-red-200 hover:text-red-500 focus:bg-red-200 focus:text-red-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    title="Edit"
                    class="p-1 rounded-full text-black hover:bg-blue-200 hover:text-blue-500 focus:bg-blue-200 focus:text-blue-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody></tbody>
          </table>
        </div>
      </ClientOnly>
    </PageBody>
  </PageWrapper>
</template>
