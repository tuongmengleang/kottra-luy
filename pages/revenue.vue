<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
})
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.revenue.title')" class="capitalize" />
    </PageHeader>

    <PageBody>
      <PageSection>
        <div class="grid grid-col-6 gap-5">
          <div class="col-span-4"></div>
          <div class="col-span-2"></div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<style lang="scss">
@import 'gridjs/dist/theme/mermaid.min.css';
</style>
