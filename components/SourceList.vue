<template>
  <div class="p-4" id="source-list">
    <div class="bg-gray-800 p-2 rounded">
      <div class="text-lg">
        Options
      </div>
      <display-options />
      <request-options />
    </div>

    <hr class="my-4">
    <ul>
      <li v-for="(sourceGroup, groupName) in sources"
      :key="groupName" class="p-2 mb-4 bg-gray-800 rounded">
        <div class="text-lg">
          {{ groupName }}
        </div>
        <div v-for="source in sourceGroup"
        :key="source.url">
          <input type="checkbox"
          :checked="true"
          :value="source.url"
          v-model="selectedSources"> {{ source.name }}
        </div>

        <div v-if="groupName === 'Hacker News'"
        class="flex flex-col py-2">
          <div class="pb-2">
            Count: {{ hackerNewsOptions.count }}
            <input type="range" class="w-full"
            min="1" max="100" value="40"
            v-model="hackerNewsOptions.count">
          </div>
          <div class="pb-2">
            Points: {{ hackerNewsOptions.points }}
            <br>
            <input type="range" class="w-full"
            min="1" max="2000" value="350"
            v-model="hackerNewsOptions.points">
          </div>
          <div>
            Comments: {{ hackerNewsOptions.comments }}
            <input type="range" class="w-full"
            min="1" max="1000" value="100"
            v-model="hackerNewsOptions.comments">
          </div>
        </div>
      </li>
    </ul>
    <button @click="fetch"
    class="p-2 bg-blue-600 rounded text-white w-full">
      Refetch
    </button>
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
    selectedSources: [],
    hackerNewsOptions: {
      count: 40,
      points: 350,
      comments: 100
    }
  }),
  watch: {
    selectedSources(urls) {
      this.updateSources(this.addQueryStringToUrls(urls))
      this.fetchSourceData()
    }
  },
  mounted() {
    setTimeout(() => { this.selectedSources = this.$store.state.selectedUrls })
  },
  methods: {
    ...mapMutations([
      'updateDisplayOptions',
      'updateSources'
    ]),
    ...mapActions([
      'fetchSourceData'
    ]),
    fetch() {
      this.updateSources(this.addQueryStringToUrls(this.selectedSources))
      this.fetchSourceData()
    },
    isHackerNews(url) { return url.includes('hnrss') },
    addQueryStringToUrls(urls) {
      return urls.map(url => {
        return this.isHackerNews(url) ? this.handleHackerNewsQueryString(url) : url
      })
    },
    handleHackerNewsQueryString(url) {
      const { count, points, comments } = this.hackerNewsOptions
      return `${url}?count=${count}&points=${points}&comments=${comments}`
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

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #4CAF50;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #4CAF50;
  cursor: pointer;
}
</style>
