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
      </div>
    </div>

    <!--    <div class="flex flex-col min-h-screen">-->
    <!--      <slot name="header">-->
    <!--&lt;!&ndash;        <DashboardNavbar>&ndash;&gt;-->
    <!--&lt;!&ndash;          <template #drawer>&ndash;&gt;-->
    <!--&lt;!&ndash;            <DashboardSidebar mode="mobile" />&ndash;&gt;-->
    <!--&lt;!&ndash;          </template>&ndash;&gt;-->
    <!--&lt;!&ndash;        </DashboardNavbar>&ndash;&gt;-->
    <!--      </slot>-->
    <!--      <div class="flex-1 w-full flex flex-row">-->
    <!--        <div-->
    <!--          class="relative flex-1 flex flex-row mx-auto max-w-8xl w-full h-full"-->
    <!--        >-->
    <!--          <div class=" border-r border-gray-100">-->
    <!--            <DashboardSidebar />-->
    <!--          </div>-->
    <!--          <div class="flex flex-col p-4">-->
    <!--            <slot />-->
    <!--            <slot name="footer">-->
    <!--&lt;!&ndash;              <PageFooter />&ndash;&gt;-->
    <!--            </slot>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <slot name="app-after" />
    <div id="app-after"></div>
  </div>
</template>
