<template>
  <div class="w-1/5 overflow-scroll max-h-screen p-4">
    <div class="px-4 h-8 flex" v-if="fetchedData.length">
      Items: {{fetchedData.length}}
      <loader v-if="loading" class="px-4" />
    </div>
    <ul v-for="data in fetchedData" :key="data.guid">
      <entry-item :entry-data="data" />
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import Loader from '~/components/Loader'
import EntryItem from '~/components/EntryItem'

export default {
  components: {
    EntryItem,
    Loader
  },
  computed: mapState([
    'fetchedData',
    'loading'
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
