<template>
  <div class="p-4" id="source-list">
    <display-options />
    <request-options />

    <hr class="my-4">

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

import DisplayOptions from '~/components/DisplayOptions'
import RequestOptions from '~/components/RequestOptions'
import sources from '~/constants/sources.json'

export default {
  components: {
    RequestOptions,
    DisplayOptions
  },
  data: () => ({
    sources,
    selectedSources: []
  }),
  watch: {
    selectedSources(newVal) {
      this.updateSources(newVal)
      this.fetchSourceData()
    }
  },
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
