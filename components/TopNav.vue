<template>
  <div class="flex justify-center items-center py-4 shadow-lg">
    <div class="px-2">
      Filter
    </div>
    <input v-model="filterTerm"
    class="p-2 border border-black"
    type="text"
    @input="$emit('filter-term-updated', filterTerm)">
  </div>
</template>

<script>
export default {
  data: () => ({
    filterTerm: ''
  })
}
</script>

<style lang="scss" scoped>

</style>
