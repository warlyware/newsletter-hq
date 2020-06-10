<template>
  <div>
    <top-nav class="w-full" @filter-term-updated="updateFilter" />
    {{ filterTerm }}
    <div class="app-container flex">
      <source-list class="w-1/5 border-r min-h-screen pt-32" />
      <entries-list class="w-4/5" />
    </div>
  </div>
</template>

<script>
import TopNav from '~/components/TopNav'
import EntriesList from '~/components/EntriesList'
import SourceList from '~/components/SourceList'

export default {
  components: {
    EntriesList,
    SourceList,
    TopNav
  },
  data: () => ({
    filterTerm: ''
  }),
  methods: {
    updateFilter(text) {
      console.log('event', text)
      this.filterTerm = text
    }
  }
}
</script>

<style>
.app-container {
  @apply min-h-screen flex justify-center items-center text-center;
}
</style>
