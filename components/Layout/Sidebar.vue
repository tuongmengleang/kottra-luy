<script lang="ts" setup>
const closeDrawer = () => {
  const sidebar: any = document.querySelector('#sidebar')
  sidebar.classList.remove('left-0')
  sidebar.classList.add('<sm:left-[-300px]')
}
</script>

<template>
  <div
    id="sidebar"
    ref="sidebar"
    v-click-outside="closeDrawer"
    class="max-w-[300px] w-[300px] <sm:fixed <sm:left-[-300px] h-full flex flex-col bg-white border-r border-gray-200 z-50 transition-all duration-300"
  >
    <!-- Logo -->
    <div class="flex items-center p-4">
      <!--      <img class="w-12 h-12 rounded-full" src="https://i.pinimg.com/736x/44/56/c6/4456c6318ded21140688586bb77ef2e0.jpg" alt="">-->
      <img class="w-12 h-12 rounded-full" src="/favicon.ico" alt="" />
      <h3 class="w-full text-center text-lg font-bold ml-3">Kottra Luy</h3>
    </div>
    <!-- Menu -->
    <div class="flex-1 w-full h-full mt-6">
      <ul class="px-3">
        <li class="py-1">
          <a
            href="#"
            class="w-full inline-block flex items-center gap-3 px-4 py-2 text-gray-700 font-semibold hover:bg-gray-100 rounded-lg"
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
            class="w-full inline-block flex items-center gap-3 px-4 py-2 text-gray-700 font-semibold hover:bg-gray-100 rounded-lg"
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
          <a
            href="#"
            class="w-full inline-block flex items-center gap-3 px-4 py-2 text-gray-700 font-semibold hover:bg-blue-600 hover:text-white rounded-lg"
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
          </a>
        </li>
        <li class="py-1">
          <a
            href="#"
            class="w-full inline-block flex items-center gap-3 px-4 py-2 text-gray-700 font-semibold hover:bg-gray-100 rounded-lg"
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
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Teams
          </a>
        </li>
        <li class="py-1">
          <a
            href="#"
            class="w-full inline-block flex items-center gap-3 px-4 py-2 text-gray-700 font-semibold hover:bg-gray-100 rounded-lg"
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
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            Projects
          </a>
        </li>
        <li class="py-1">
          <a
            href="#"
            class="w-full inline-block flex items-center gap-3 px-4 py-2 text-gray-700 font-semibold hover:bg-gray-100 rounded-lg"
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
        <avatar class="flex-none self-start" size="40">
          <img
            src="https://images.pexels.com/photos/3616937/pexels-photo-3616937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </avatar>
        <div class="ml-2">
          <h4 class="text-lg text-black font-semibold leading-4">Hải Nguyễn</h4>
          <span class="text-sm text-gray-500">nguyen168@gmail.com</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
