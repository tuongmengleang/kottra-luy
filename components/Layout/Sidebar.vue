<script lang="ts" setup>
const closeDrawer = () => {
  const sidebar: any = document.querySelector('#sidebar')
  const hamburger: any = document.querySelector('.hamburger')
  sidebar.classList.remove('left-0')
  sidebar.classList.add('<sm:left-[-250px]')
  hamburger.classList.remove('active')
}
</script>

<template>
  <div
    id="sidebar"
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
      <div class="w-full flex items-center">
        <Avatar class="flex-none self-start" size="40">
          <img
            src="https://images.pexels.com/photos/3616937/pexels-photo-3616937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </Avatar>
        <div class="ml-2">
          <h4
            class="text-lg text-black font-semibold leading-4 dark:text-white"
          >
            Hải Nguyễn
          </h4>
          <span class="text-sm text-gray-500 dark:text-gray-300"
            >nguyen168@gmail.com</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.router-link-active {
  @apply text-blue-600 bg-blue-100 dark:hover:bg-gray-700;
}
</style>
