<template>
  <div id="source-list">
    <ul>
      <li v-for="source in sources" :key="source.url">
        <input type="checkbox"
        :value="source.url"
        v-model="selectedSources"> {{ source.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  data: () => ({
    sources: [{
      name: 'Ars Technica - Technology Lab',
      url: 'http://feeds.arstechnica.com/arstechnica/technology-lab'
    }, {
      name: 'Ars Technica - Gear and Gadgets',
      url: 'http://feeds.arstechnica.com/arstechnica/gadgets'
    }, {
      name: 'Ars Technica - Features',
      url: 'http://feeds.arstechnica.com/arstechnica/features'
    }, {
      name: 'Hacker News',
      url: 'https://news.ycombinator.com/rss'
    }],
    selectedSources: []
  }),
  methods: {
    ...mapMutations([
      'updateSources'
    ]),
    ...mapActions([
      'fetchSourceData'
    ])
  },
  watch: {
    selectedSources(newVal) {
      console.log('newVal', newVal)
      this.updateSources(newVal)
      this.fetchSourceData()
    }
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
