<template>
  <div class="p-4" id="source-list">
    <div class="absolute top-0 p-4">
      <label>
        Filter
        <input v-model="filterTerm"
        class="p-2 border border-black"
        type="text"
        @input="$emit('filter-term-updated', filterTerm)">
      </label>
      <ul>
        <li class="py-2">
          <input type="checkbox"
          v-model="displayOptions"
          value="show-content"> show content
        </li>
      </ul>
    </div>

    <ul>
      <li v-for="source in sources" :key="source.url">
        <input type="checkbox"
        :checked="true"
        :value="source.url"
        v-model="selectedSources"> {{ source.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

import sources from '~/constants/sources.json'

export default {
  data: () => ({
    sources,
    selectedSources: [],
    filterTerm: '',
    displayOptions: []
  }),
  watch: {
    selectedSources(newVal) {
      this.updateSources(newVal)
      this.fetchSourceData()
    },
    displayOptions(newVal) {
      this.updateDisplayOptions(newVal)
    }
  },
  // mounted() {
  //   this.selectedSources = sources.map(({ url }) => url)
  //   this.updateSources(sources)
  //   this.fetchSourceData()
  // },
  methods: {
    ...mapMutations([
      'updateDisplayOptions',
      'updateSources'
    ]),
    ...mapActions([
      'fetchSourceData'
    ])
  }
}
</script>

<style scoped>
  #source-list {
    min-width: 300px;
  }
  ul {
    list-style-type: none;
  }
</style>
