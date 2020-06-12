<template>
  <div class="app-container flex">
    <div class="border-r min-h-screen">
      <h1 class="p-4 pb-0 text-yellow-500 text-3xl font-fira-code">
        THE GRINDBOARD
      </h1>
      <source-list class="w-1/5" />
    </div>
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
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&display=swap');

.app-container {
  @apply min-h-screen flex justify-center items-center;
}
.font-fira-code {
  font-family: 'Fira Code', monospace;
}
</style>
