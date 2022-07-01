<script lang="ts" setup>
const openDrawer = () => {
  // const sidebar: any = document.querySelector('#sidebar')
  // sidebar.classList.remove('<sm:left-[-300px]')
  // sidebar.classList.add('left-0')
}
</script>

<template>
  <div id="app-container" class="w-full h-full">
    <slot name="app-before" />
    <div id="app-before"></div>
    <div class="relative w-full h-full flex flex-row">
      <!-- Sidebar -->
      <LayoutSidebar />
      <!-- Content -->
      <div class="w-full h-full bg-white">
        <!-- Header -->
        <div class="p-4">
          <Button size="md" @click="openDrawer">
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
                d="M4 8h16M4 16h16"
              />
            </svg>
          </Button>
        </div>
        <slot />
      </div>
    </div>
    <slot name="app-after" />
    <div id="app-after"></div>
  </div>
</template>
