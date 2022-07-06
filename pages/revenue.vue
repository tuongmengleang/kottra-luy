<script lang="ts" setup>
definePageMeta({
  layout: 'page',
  middleware: 'auth',
})
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.revenue.title')" class="capitalize" />
    </PageHeader>

    <PageBody>
      <div class="w-full">
        <table id="wrapper"></table>
      </div>
    </PageBody>
  </PageWrapper>
</template>
