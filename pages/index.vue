<template>
  <div class="app-container flex">
    <source-list class="w-1/5 border-r min-h-screen pt-32" />
    <entries-list class="w-4/5" />
  </div>
</template>

<script>
import EntriesList from '~/components/EntriesList'
import SourceList from '~/components/SourceList'

export default {
  components: {
    EntriesList,
    SourceList
  }
}
</script>

<style>
.app-container {
  @apply min-h-screen flex justify-center items-center;
}
</style>
