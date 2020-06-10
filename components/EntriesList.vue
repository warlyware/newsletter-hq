<template>
  <div class="w-1/5 overflow-scroll max-h-screen p-4">
    <ul v-for="data in fetchedData" :key="data.guid">
      <entry-item :entry-data="data" />
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import EntryItem from '~/components/EntryItem'

export default {
  components: {
    EntryItem
  },
  computed: mapState([
    'fetchedData'
  ]),
  methods: {
    ...mapMutations([
      'display/updateOptions'
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>
