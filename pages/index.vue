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
        <!--- Dashboard Card --->
        <div
          class="grid grid-cols-4 gap-5 <sm:grid-cols-1 <md:grid-cols-2 <lg:grid-cols-2"
        >
          <div class="w-full p-4 rounded-2xl dark-shadow">
            <div class="flex text-2xl text-black dark:text-white">
              <IconTabler:wallet />
              <button type="button" class="ml-auto">
                <IconHeroicons-outline:dots-vertical
                  class="self-start text-sm"
                />
              </button>
            </div>
            <div class="pt-4 pb-2 text-3xl font-bold">
              <h3>$143,624</h3>
            </div>
            <span class="text-sm">Your bank balance</span>
          </div>

          <div :key="n" class="w-full p-4 rounded-2xl dark-shadow">
            <div class="flex text-2xl text-black dark:text-white">
              <IconHeroicons-outline:fire />
              <button type="button" class="ml-auto">
                <IconHeroicons-outline:dots-vertical
                  class="self-start text-sm"
                />
              </button>
            </div>
            <div class="pt-4 pb-2 text-3xl font-bold">
              <h3>7</h3>
            </div>
            <span class="text-sm">Employees working today</span>
          </div>

          <div :key="n" class="w-full p-4 rounded-2xl dark-shadow">
            <div class="flex text-2xl text-black dark:text-white">
              <IconGg:credit-card />
              <button type="button" class="ml-auto">
                <IconHeroicons-outline:dots-vertical
                  class="self-start text-sm"
                />
              </button>
            </div>
            <div class="pt-4 pb-2 text-3xl font-bold">
              <h3>$3,287.49</h3>
            </div>
            <span class="text-sm">This week's card spending</span>
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
