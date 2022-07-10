<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.expenses.title')" class="capitalize" />
    </PageHeader>

    <PageBody>
      <!-- Content Body -->
      <div>
        <div class="mt-4 dark:border-gray-500 rounded-lg overflow-hidden">
          <!-- Header Table -->
          <div class="w-full flex items-center p-5">
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
              <Button size="md" @click="openDialog()">
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
          <table class="w-full" :class="{ loading: pending }">
            <thead class="border-b border-gray-300">
              <tr>
                <th class="py-3 px-3">Date</th>
                <th>Amount</th>
                <th>Cash On</th>
                <th>Currency</th>
                <th class="w-30">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in expenses.data"
                :key="index"
                class="text-center hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg"
              >
                <th>{{ $formatDate(item.created_at) }}</th>
                <td>{{ item.amount }}</td>
                <td>{{ item.cash_on }}</td>
                <td>
                  <span
                    class="px-2 py-1 rounded-lg text-xs font-semibold"
                    :class="[
                      item.currency === 0
                        ? 'bg-red-200 text-red-400'
                        : 'bg-blue-200 text-blue-400',
                    ]"
                  >
                    {{ item.currency === 0 ? 'KHR' : 'USD' }}
                  </span>
                </td>
                <td class="flex items-center justify-center gap-5 h-14">
                  <button
                    type="button"
                    title="Delete"
                    class="p-1 rounded-full text-black dark:text-white hover:bg-red-200 hover:text-red-500 focus:bg-red-200 focus:text-red-500"
                    @click="deleteRow(item.id)"
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
                    class="p-1 rounded-full text-black dark:text-white hover:bg-blue-200 hover:text-blue-500 focus:bg-blue-200 focus:text-blue-500"
                    @click="editRow(item)"
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
          </table>
        </div>

        <!-- Pagination -->
        <div class="w-full flex items-center justify-center">
          <div
            class="flex items-center justify-center flex-wrap gap-3 mt-5 mx-auto px-3 py-1 rounded-xl dark-shadow"
          >
            <a
              class="w-10 h-10 flex items-center justify-center hover:bg-gray-200 rounded-full text-blue-500"
              :class="{ 'text-blue-300 pointer-events-none': page === 0 }"
              @click="prev"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </a>
            <a
              v-for="(item, index) in pagination"
              :key="index"
              class="w-10 h-10 flex items-center justify-center rounded-full font-semibold"
              :class="[
                item.page - 1 === page
                  ? 'text-white bg-blue-500'
                  : 'text-gray-600 hover:bg-gray-200',
              ]"
              @click="changePagination(item.page - 1)"
            >
              {{ item.page }}
            </a>
            <a
              class="w-10 h-10 flex items-center justify-center hover:bg-gray-200 rounded-full text-blue-500"
              :class="{
                'text-blue-300 pointer-events-none':
                  pagination[pagination.length - 1].page - 1 === page,
              }"
              @click="next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Dialog Add | Edit  -->
      <Dialog v-model="active">
        <template #dialog-title>
          <h1 class="text-lg font-bold">Add Expenses</h1>
        </template>
        <template #dialog-content>
          <div v-show="errorSubmit" class="alert alert-error shadow-lg mb-3">
            <div>
              <button type="button" @click="errorSubmit = false">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <span class="text-sm"
                >Error! Expenses failed created, Please try again.</span
              >
            </div>
          </div>
          <form>
            <!-- amount field -->
            <div class="form-control w-full max-w-full pb-2">
              <label class="label">
                <span class="label-text">Amount</span>
              </label>
              <input
                v-model="amount"
                type="text"
                placeholder="Enter amount"
                class="input input-md input-bordered w-full max-w-full bg-transparent text-black tracking-wider"
                :class="{ 'input-error': errorMessageAmount }"
              />
              <span
                v-show="errorMessageAmount"
                class="mt-2 text-sm text-red-500 font-semibold"
                >Amount is required!</span
              >
            </div>

            <!-- cash on field -->
            <div class="form-control w-full max-w-full">
              <label class="label">
                <span class="label-text">Cost on</span>
              </label>
              <input
                v-model="cash_on"
                type="text"
                placeholder="Enter cost on"
                class="input input-md input-bordered w-full max-w-full bg-transparent text-black tracking-wider"
                :class="{ 'input-error': errorMessageCashOn }"
              />
              <span
                v-show="errorMessageCashOn"
                class="mt-2 text-sm text-red-500 font-semibold"
                >Cost on is required!</span
              >
            </div>

            <!-- currency field -->
            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text">Currency</span>
              </label>
              <div class="flex items-center gap-3 text-gray-500">
                <span>KHR</span>
                <Switch
                  v-model="currency"
                  :class="currency ? 'bg-blue-600' : 'bg-blue-500'"
                  class="relative inline-flex h-[30px] w-[66px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                  <span class="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    :class="currency ? 'translate-x-9' : 'translate-x-0'"
                    class="pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
                  />
                </Switch>
                <span>USD</span>
              </div>
            </div>
          </form>
        </template>
        <template #dialog-footer>
          <Button
            type="button"
            color="secondary"
            size="md"
            class="w-full"
            @click="active = false"
            >Cancel</Button
          >
          <Button
            type="button"
            color="primary"
            size="md"
            :loading="isSubmitting"
            class="w-full"
            @click.prevent="onSubmit"
            >Confirm</Button
          >
        </template>
      </Dialog>

      <Dialog v-model="active2">
        <template #dialog-content>
          <div class="w-full text-center">
            <IconHeroicons-outline:trash
              class="text-red-500 text-4xl mx-auto mb-4"
            />
            <h3 class="text-xl text-gray-600 font-semibold">
              Are you sure you want to <br />
              permanently erase the item in the Bin?
            </h3>
            <p class="text-sm text-gray-400 mt-3">
              You can't undo this action.
            </p>
          </div>
        </template>
        <template #dialog-footer>
          <Button
            type="button"
            color="secondary"
            size="md"
            class="w-full"
            @click="active2 = false"
            >Cancel</Button
          >
          <Button
            type="button"
            color="primary"
            size="md"
            class="w-full"
            :loading="loadingDelete"
            @click="onDelete"
            >Confirm</Button
          >
        </template>
      </Dialog>
    </PageBody>
  </PageWrapper>
</template>

<script lang="ts" setup>
import { Switch } from '@headlessui/vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { Expenses } from '~/types/expenses'

definePageMeta({
  layout: 'page',
  middleware: 'auth',
})

const nuxtApp = useNuxtApp()
const client = useSupabaseClient()
const user = useSupabaseUser()

// Binding Data
const active = ref(false)
const active2 = ref(false)
const errorSubmit = ref(false)
const status = ref(0)
// Binding Form
const id = ref('')
const currency = ref(false)
const page = ref(0)
const limit = ref(9)

// ******* Fetch Data ************ //
const {
  data: expenses,
  refresh,
  pending,
} = await useAsyncData('expenses', async () => {
  const { from, to } = nuxtApp.$getPagination(page.value, limit.value)
  const { data, count } = await client
    .from<Expenses>('expenses')
    .select('id, amount, cash_on, currency, created_at', { count: 'exact' })
    .eq('user_id', user.value.id)
    .order('created_at', { ascending: false })
    .range(from, to)
  return { data, count }
})

// ******* Pagination ************ //
const pagination: any = nuxtApp.$pagination(expenses.value.count, limit.value)
const changePagination = (pagination: number) => {
  page.value = pagination
  refresh()
}

const next = () => {
  if (pagination[pagination.length - 1].page - 1 > page.value) {
    page.value++
    refresh()
  }
}
const prev = () => {
  if (page.value > 0) {
    page.value--
    refresh()
  }
}

// ******* Add Or Edit ************ //
const { handleSubmit, resetForm, isSubmitting } = useForm()
const { value: amount, errorMessage: errorMessageAmount } = useField(
  'amount',
  yup.string().required()
)
const { value: cash_on, errorMessage: errorMessageCashOn } = useField(
  'cash_on',
  yup.string().required()
)

// ******* Functions
const openDialog = () => {
  active.value = true
  status.value = 0
  resetForm()
}

const onSubmit = handleSubmit(async (values) => {
  errorSubmit.value = false
  if (status.value === 0) {
    const { error } = await client.from('expenses').insert([
      {
        user_id: user.value.id,
        amount: values.amount,
        cash_on: values.cash_on,
        currency: currency.value ? 1 : 0,
      },
    ])
    if (error) errorSubmit.value = true
    else {
      page.value = 0
      refresh()
      active.value = false
      resetForm()
    }
  } else {
    const { error } = await client
      .from('expenses')
      .update({
        amount: values.amount,
        cash_on: values.cash_on,
        currency: currency.value ? 1 : 0,
      })
      .eq('id', id.value)
    if (error) errorSubmit.value = true
    else {
      refresh()
      active.value = false
      resetForm()
    }
  }
})

const editRow = (expenses: any) => {
  status.value = 1
  id.value = expenses.id
  amount.value = expenses.amount
  cash_on.value = expenses.cash_on
  currency.value = expenses.currency === 1
  active.value = true
}

// ******* Delete ************ //
const loadingDelete = ref(false)
const deleteRow = (uuid: string) => {
  active2.value = true
  id.value = uuid
}
const onDelete = async () => {
  loadingDelete.value = true
  const { error } = await client
    .from('expenses')
    .delete()
    .match({ id: id.value })
  if (error) alert('Something went wrong! please try again.')
  loadingDelete.value = false
  active2.value = false
  refresh()
}
</script>
