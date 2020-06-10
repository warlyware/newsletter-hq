<template>
  <div class="flex justify-center items-center py-4 shadow-lg">
    <div class="px-2">
      Filter
    </div>
    <input v-model="filterTerm"
    class="p-2 border border-black"
    type="text"
    @input="emitInput">
  </div>
</template>

<script>
export default {
  data: () => ({
    filterTerm: ''
  }),
  methods: {
    emitInput(text) {
      console.log('emitInput')
      this.$emit('filter-term-updated', this.filterTerm)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
