<template>
  <div>
    <h1>Index Page</h1>
    <nuxt-link to="/signin">Sign In</nuxt-link>
    <pre>{{ categories }}</pre>
    <button
      v-if="user"
      type="button"
      class="block px-3 py-1 bg-red-500 rounded-md hover:bg-red-600"
      @click="signOut"
    >
      LogOut
    </button>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'auth',
  layout: 'dashboard',
})
const user = useSupabaseUser()
const client = useSupabaseClient()

// *** Fetch Categories List
const { data: categories } = await useAsyncData('categories', async () => {
  const { data } = await client.from('categories').select('id, name')
  return data
})

const signOut = async () => {
  await client.auth.signOut()
  location.reload()
}
</script>
