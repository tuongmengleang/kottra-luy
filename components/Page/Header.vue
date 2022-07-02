<script lang="ts" setup>
const openDrawer = () => {
  const sidebar: any = document.querySelector('#sidebar')
  const hamburger: any = document.querySelector('.hamburger')
  sidebar.classList.remove('<sm:left-[-250px]')
  sidebar.classList.add('left-0')
  hamburger.classList.add('active')
}
</script>

<template>
  <div class="">
    <Hamburger @click="openDrawer()" />
    <slot />
  </div>
</template>
