<template>
  <div id="app-container" class="w-full h-full">
    <slot name="app-before" />
    <div id="app-before"></div>
    <div class="relative w-full h-full flex flex-row">
      <!-- Sidebar -->
      <LayoutSidebar />
      <!-- Content -->
      <div class="w-full h-full bg-white">
        <slot />
      </div>
    </div>
    <slot name="app-after" />
    <div id="app-after"></div>
  </div>
</template>
