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
            <div class="flex items-center text-2xl text-black dark:text-white">
              <IconTabler:wallet />
              <button type="button" class="ml-auto">
                <IconHeroicons-outline:dots-vertical
                  class="self-start text-sm"
                />
              </button>
            </div>
            <div
              class="flex flex-col gap-1 divide-y divide-dashed divide-blue-500"
            >
              <div class="w-full py-1 text-center text-2xl font-bold">
                <!--                <h3>{{ totalAmount['1']?.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) || '' }}</h3>-->
                <h3>$ 105</h3>
              </div>
              <div class="w-full py-1 text-center text-2xl font-bold">
                <!--                <h3>{{ totalAmount['0']?.toLocaleString('en-US', { style: 'currency', currency: 'KHR' }) || '' }}</h3>-->
                <h3>KHR 250,000</h3>
              </div>
            </div>
            <!--            <span class="text-md">ការចំណាយប្រចាំខែសរុប</span>-->
            <span class="text-md">Monthly expenses</span>
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
