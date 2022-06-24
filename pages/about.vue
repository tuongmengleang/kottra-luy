<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <PageWrapper class="flex flex-col justify-center items-center">
    <PageHeader>
      <PageTitle :text="$t('pages.about.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <div class="flex flex-col items-center">
        <img
          src="https://avatars.githubusercontent.com/u/56217606?v=4"
          class="inline-block rounded-full"
          alt="tuongmengleang"
          width="100"
          height="100"
        />
        <Button
          size="xs"
          type="opposite"
          text="Tuong Mengleang (@tuongmengleang)"
          class="font-extrabold mt-4"
          href="https://github.com/tuongmengleang"
        />
      </div>
    </PageBody>
  </PageWrapper>
</template>
