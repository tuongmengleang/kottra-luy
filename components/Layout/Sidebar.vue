<script lang="ts" setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
const user = useSupabaseUser()
const client = useSupabaseClient()
// const router = useRouter()

const closeDrawer = () => {
  const sidebar: any = document.querySelector('#sidebar')
  const hamburger: any = document.querySelector('.hamburger')
  sidebar.classList.remove('left-0')
  sidebar.classList.add('<sm:left-[-250px]')
  hamburger.classList.remove('active')
}

const signOut = async () => {
  await client.auth.signOut()
  window.location.reload()
  // router.push({ path: '/signin' })
}
</script>

<template>
  <div
    id="sidebar"
    ref="sidebar"
    v-click-outside="closeDrawer"
    class="max-w-[300px] w-[300px] <sm:w-[250px] <sm:fixed <sm:left-[-250px] h-full flex flex-col bg-white border-r border-gray-200 dark:border-gray-400 z-10 transition-all duration-300 dark:bg-[#2B2E43]"
  >
    <!-- Logo -->
    <div class="flex items-center p-4">
      <img class="w-12 h-12 rounded-full" src="/favicon.ico" alt="" />
      <h3 class="w-full text-center text-lg font-bold ml-3">Kottra Luy</h3>
    </div>
    <!-- Menu -->
    <div class="flex-1 w-full h-full mt-6">
      <ul class="px-3">
        <li class="py-1">
          <a
            href="#"
            class="w-full inline-block flex items-center gap-3 px-4 py-2 text-gray-700 font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg dark:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Tasks
          </a>
        </li>
        <li class="py-1">
          <a
            href="#"
            class="w-full inline-block flex items-center gap-3 px-4 py-2 text-gray-700 font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg dark:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Activities
          </a>
        </li>
        <li class="py-5">
          <hr />
        </li>
        <li class="py-1">
          <NuxtLink
            to="/"
            class="w-full inline-block flex items-center gap-3 px-4 py-2 text-gray-700 font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg dark:text-gray-200"
            @click.prevent="closeDrawer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            Dashboard
          </NuxtLink>
        </li>
        <li class="py-1">
          <NuxtLink
            to="/expenses"
            class="w-full inline-block flex items-center gap-3 px-4 py-2 text-gray-700 font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg dark:text-gray-200"
            @click.prevent="closeDrawer"
          >
            <IconUil:money-insert class="text-xl" />
            Expenses
          </NuxtLink>
        </li>
        <li class="py-1">
          <NuxtLink
            to="/revenue"
            class="w-full inline-block flex items-center gap-3 px-4 py-2 text-gray-700 font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg dark:text-gray-200"
            @click.prevent="closeDrawer"
          >
            <IconUil:money-withdraw class="text-xl" />
            Revenue
          </NuxtLink>
        </li>
        <li class="py-1">
          <a
            href="#"
            class="w-full inline-block flex items-center gap-3 px-4 py-2 text-gray-700 font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg dark:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Calendar
          </a>
        </li>
      </ul>
    </div>
    <!-- Footer -->
    <div class="py-5 px-4">
      <Menu as="div" class="relative">
        <MenuButton>
          <div class="flex items-center">
            <Avatar v-if="user" class="flex-none self-start" size="40">
              <img
                :src="user.user_metadata.avatar_url"
                :alt="user.user_metadata.full_name"
              />
            </Avatar>
            <div v-if="user" class="flex-1 ml-2">
              <h4
                class="text-lg text-black text-left font-semibold leading-4 dark:text-white"
              >
                {{ user.user_metadata.full_name }}
              </h4>
              <p
                class="max-w-[150px] truncate text-sm text-gray-500 dark:text-gray-300"
              >
                {{ user.user_metadata.email }}
              </p>
            </div>
          </div>
        </MenuButton>
        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute bottom-[3.5rem] left-0 mt-2 w-56 origin-bottom-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-blue-500 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold',
                  ]"
                >
                  <IconGg:profile class="text-lg mr-2" />
                  Profile
                </button>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button
                  type="button"
                  :class="[
                    active ? 'bg-red-200 text-red-600' : 'text-red-600',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold',
                  ]"
                  @click="signOut"
                >
                  <IconHeroicons-solid:logout class="text-lg mr-2" />
                  Log Out
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.router-link-active {
  @apply text-blue-600 bg-blue-100 dark:hover:bg-gray-700;
}
</style>
