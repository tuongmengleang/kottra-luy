<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  color: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'md',
  },
})

// state:styles
const defaultStyle = `
  box-border relative z-30 inline-flex items-center justify-center w-auto overflow-hidden font-bold text-white transition-all duration-300 rounded-md cursor-pointer group ring-offset-2 ring-1 ease focus:outline-none
`
const styles = reactive<{
  [key: string]: string
}>({
  primary:
    'text-white bg-blue-600 hover:bg-blue-500 border-blue-500 ring-blue-300 ring-offset-blue-200 hover:ring-offset-blue-500',
  danger:
    'text-white bg-red-600 hover:bg-red-500 border-red-500 ring-red-300 ring-offset-red-200 hover:ring-offset-red-500',
})

const sizes = reactive<{
  [key: string]: string
}>({
  lg: 'h-12 px-8 text-lg',
  md: 'h-10 px-6 text-base',
  sm: 'h-8 px-4 text-sm',
  xs: 'h-6 px-3 text-xs',
})

const selectedStyle = computed(() => styles[props.color] || styles.primary)
const selectedSize = computed(() => sizes[props.size] || sizes.lg)

// methods
const onClick = (event: MouseEvent) => {
  event.preventDefault()
}
</script>

<template>
  <button
    :type="`${props.type}`"
    :class="`${defaultStyle} ${selectedStyle} ${selectedSize}`"
    @click="onClick"
  >
    <span
      class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
    ></span>
    <span
      class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"
    ></span>
    <span class="relative z-20 flex items-center text-sm">
      <slot />
    </span>
  </button>
</template>
