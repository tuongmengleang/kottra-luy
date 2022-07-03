<script lang="ts" setup>
definePageMeta({
  layout: 'page',
  middleware: 'auth',
})
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.dashboard.title')" class="capitalize" />
    </PageHeader>

    <PageBody>
      <PageSection>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
