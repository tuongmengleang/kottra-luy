<script lang="ts" setup></script>

<template>
  <button type="button" class="hamburger" @click="$emit('onClick')">
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
  </button>
</template>

<style lang="scss" scoped>
.hamburger {
  @apply hidden <sm:block <sm:mb-3;
  cursor: pointer;
  &.active {
    .line {
      &:nth-child(1) {
        transform: translateY(9px) rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: translateY(-9px) rotate(-45deg);
      }
    }
  }
  .line {
    @apply block w-[30px] h-[3px] bg-gray-400;
    margin-block: 6px;
    border-radius: 4px;
    transition: transform 0.5s, opacity 0.25s;
  }
}
</style>
