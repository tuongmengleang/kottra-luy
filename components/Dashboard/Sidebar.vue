<script lang="ts" setup>
import { useUI } from '~/stores/ui'
const ui = useUI()
</script>

<template>
  <div
    ref="sidebar"
    v-click-outside="ui.close"
    class="relative flex flex-col w-70 transition-all ease-in-out delay-150 duration-300 border-r border-gray-20 dark:border-gray-600 dark:bg-black <sm:absolute <sm:h-full <sm:bg-white overflow-auto ease-in-out transition-all duration-300 z-30 <sm:transform"
    :class="ui.isOpenDrawer ? 'translate-x-0' : '<sm:-translate-x-full'"
  >
    <!-- Sidebar Logo -->
    <div class="w-full flex items-center py-6 px-5">
      <img
        class="flex-none w-12 h-12 rounded-full"
        src="/favicon.ico"
        alt="logo"
      />
      <span class="text-xl font-bold ml-4">Kottra Luy</span>
    </div>

    <!-- Sidebar Menus -->
    <div class="w-full h-full overflow-x-hidden overflow-y-auto flex-1 mt-5">
      <ul>
        <li class="px-3 py-1 first:pt-0">
          <NuxtLink
            to="/"
            class="flex items-center w-full h-full text-lg text-gray-400 hover:text-blue-600 dark:text-white font-bold px-3 py-3 rounded-xl hover:bg-blue-100 dark:hover:bg-gray-700"
            @click.prevent="ui.close"
          >
            <IconMajesticons:dashboard-line class="shrink-0 text-xl" />
            <span class="ml-4 overflow-hidden whitespace-nowrap"
              >Dashboard</span
            >
          </NuxtLink>
        </li>
        <li class="px-3 py-1">
          <NuxtLink
            to="/expenses"
            class="flex items-center w-full h-full text-lg text-gray-400 hover:text-blue-600 dark:text-white font-bold px-3 py-3 rounded-xl hover:bg-blue-100 dark:hover:bg-gray-700"
            @click.prevent="ui.close"
          >
            <IconUil:money-insert class="text-xl" />
            <span class="ml-4">Expenses</span>
          </NuxtLink>
        </li>
        <li class="px-3 py-1">
          <NuxtLink
            to="/revenue"
            class="flex items-center w-full h-full text-lg text-gray-400 hover:text-blue-600 dark:text-white font-bold px-3 py-3 rounded-xl hover:bg-blue-100 dark:hover:bg-gray-700"
            @click.prevent="ui.close"
          >
            <IconUil:money-withdraw class="text-xl" />
            <span class="ml-4">Revenue</span>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- Sidebar Bottom -->
    <div class="w-full py-6 px-5">
      <!--      <button type="button" title="LogOut" class="w-full flex items-center gap-5 py-3 px-3 bg-red-500 shadow rounded-xl text-white font-bold hover:bg-red-600 transition transform delay-150 hover:-translate-y-2 hover:shadow-xl ease-in duration-200">-->
      <!--        <IconHeroiconsOutline:login class="text-xl"/>-->
      <!--        LogOut-->
      <!--      </button>-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.router-link-active {
  @apply text-blue-600 bg-blue-100 dark:hover:bg-gray-700;
}
</style>
