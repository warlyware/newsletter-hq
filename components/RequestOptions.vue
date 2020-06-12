<template>
  <ul>
    <li>

    </li>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      filterOptions: []
    }
  },
  watch: {
    filterOptions(newVal) {
      this.updateFilterOptions(newVal)
    }
  },
  methods: {
    ...mapMutations([
      'updateFilterOptions'
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>
