<template>
  <ul>
    <li>
      <input type="checkbox"
      v-model="displayOptions"
      value="show-content"> Show content
    </li>
    <li>
      <input type="checkbox"
      v-model="displayOptions"
      value="last-7-days"> Limit to last 7 days
    </li>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      displayOptions: []
    }
  },
  watch: {
    displayOptions(newVal) {
      this.updateDisplayOptions(newVal)
    }
  },
  methods: {
    ...mapMutations([
      'updateDisplayOptions'
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>
