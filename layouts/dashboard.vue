<template>
  <div class="w-full h-full">
    <slot name="app-before" />
    <div id="app-before"></div>

    <!-- Layout -->
    <div class="flex flex-row w-full h-full">
      <!-- SideBar -->
      <DashboardSidebar />

      <!-- Content -->
      <div class="flex-1 w-full h-full bg-gray-100 dark:bg-gray-800">
        <!-- Navbar -->
        <DashboardNavbar />

        <!-- Page -->
        <div class="w-full p-3">
          <slot />
        </div>
      </div>
    </div>

    <slot name="app-after" />
    <div id="app-after"></div>
  </div>
</template>
