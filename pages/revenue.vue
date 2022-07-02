<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.revenue.title')" class="capitalize" />
    </PageHeader>

    <PageBody>
      <div class="w-full">
        <table>
          <thead>
            <tr>
              <td>{{ $t('pages.revenue.title') }}</td>
            </tr>
            <tr>
              <button type="button" title="Download CSV">Download CSV</button>
            </tr>
            <tr>
              <button type="button" title="Download CSV">
                Add {{ $t('pages.revenue.title') }}
              </button>
            </tr>
          </thead>
        </table>
      </div>
    </PageBody>
  </PageWrapper>
</template>
