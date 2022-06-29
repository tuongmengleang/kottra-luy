<script lang="ts" setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { useUI } from '~/stores/ui'
const user = useSupabaseUser()
const ui = useUI()
</script>

<template>
  <div class="w-full p-3">
    <div
      class="w-full h-16 flex items-center p-3 rounded-lg bg-white dark:bg-gray-700"
    >
      <!-- Burger Menu -->
      <button
        type="button"
        class="text-xl hidden <sm:block"
        @click.prevent="ui.toggle"
      >
        <IconLineMd:menu />
      </button>

      <!-- Avatar Dropdown -->
      <Menu as="div" class="relative ml-auto">
        <div>
          <MenuButton class="ml-auto">
            <avatar v-if="user" size="40">
              <img :src="user.user_metadata.avatar_url" alt="" />
            </avatar>
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="p-1">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-blue-100 text-blue-600' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-md',
                  ]"
                >
                  <IconHeroicons-outline:user-circle class="mr-2 text-lg" />
                  Profile
                </button>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-blue-100 text-blue-600' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-md',
                  ]"
                >
                  <IconHeroicons-solid:logout class="mr-2 text-lg" />
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
