<template>
  <div class="w-1/5 overflow-scroll max-h-screen p-4 pt-16">
    <div class="absolute top-0 py-6 flex bg-gray-900 w-full px-4 font-bold">
      {{ entries.length }} Results
      <loader v-if="loading" class="px-4" />
    </div>
    <ul v-for="entry in entries" :key="entry.guid">
      <entry-item :entry-data="entry" />
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import moment from 'moment'

import Loader from '~/components/Loader'
import EntryItem from '~/components/EntryItem'

export default {
  components: {
    EntryItem,
    Loader
  },
  computed: {
    ...mapState([
      'fetchedData',
      'loading',
      'selectedDisplayOptions'
    ]),
    entries() {
      if (this.selectedDisplayOptions.includes('last-7-days')) {
        return this.fetchedData.filter(entry => {
          return moment(entry.pubDate).isAfter(moment(Date.now()).subtract(7, 'days'))
        })
      }
      return this.fetchedData
    }
  },
  methods: {
    ...mapMutations([
      'display/updateOptions'
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>
