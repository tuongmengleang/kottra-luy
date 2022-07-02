<script lang="ts" setup>
import { useUI } from '~/stores/ui'
const ui = useUI()
</script>

<template>
  <div class="w-full p-3">
    <header class="w-full flex items-center px-3 py-2 bg-gray-100 rounded-xl">
      <button
        type="button"
        class="hidden p-1 rounded-lg bg-white mr-2 <sm:block"
        @click="ui.open"
      >
        <IconHeroicons-outline:menu-alt-1 class="text-xl" />
      </button>
      <!-- Search box -->
      <div class="flex items-center border rounded-xl py-2 px-1">
        <IconRi:search-2-line class="text-lg text-gray-500 ml-1" />
        <!-- search box -->
        <input
          type="text"
          placeholder="Search ..."
          class="bg-transparent outline-none text-black px-2"
        />
      </div>
      <div class="flex items-center gap-5 ml-auto">
        <button type="button" class="relative">
          <IconHeroicons-outline:bell class="text-xl hover:text-blue-500" />
          <span
            class="absolute top-0 -right-1 w-2 h-2 bg-red-600 rounded-full"
          ></span>
        </button>
        <!-- avatar user -->
        <Avatar size="40">
          <img
            src="https://lh3.googleusercontent.com/nZe2FsuLG8KE3oLmYcBqAmKe0QvNb_VynY--HIfQcyFsfrbkUP9ekTiIaZSNoOYbwKDGjyJGHsiauCLH-tC6clp6E651eP05rpDJx8M=w600"
            alt=""
          />
        </Avatar>
      </div>
    </header>
  </div>
</template>
