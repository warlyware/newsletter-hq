<template>
  <div class="flex flex-col m-4 rounded-lg border border-grey-600 shadow-md">
    <div class="flex font-bold mb-2 bg-gray-200 p-2 text-sm">
      <div v-if="entryData.feed.image" class="pr-2">
        <img :src="entryData.feed.image" class="w-6">
      </div>
      <span v-html="entryData.feed.title" />
    </div>
    <div class="p-4">
      <a :href="entryData.link" target="_blank">
        <div class="font-bold" v-html="entryData.title">
          {{ entryData.title }}
        </div>
      </a>
      <div class="italic">
        <a :href="entryData.link" target="_blank">Link</a> --
        ({{ publishDate }})
      </div>
      <div class="py-4 -mx-2 clearfix">
        <div v-for="category in entryData.categories"
        :key="category"
        class="bg-blue-200 rounded p-1 px-2 mx-2 float-left">
          <span v-html="category" />
        </div>
      </div>
      <div class="mb-2" v-html="entryData.description" />
      <div v-if="options.includes('show-content')"
      v-html="entryData.content" />
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'

export default {
  props: {
    entryData: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState({
      options: 'selectedDisplayOptions'
    }),
    publishDate() { return moment(this.entryData.pubDate).format('MMMM Do @ h:mm:ss a') }
  },
  mounted() {
    console.log(this.entryData)
  }
}
</script>

<style>
  .intro-left {
    @apply float-left
  }
  figure {
    @apply w-64 p-4;
  }
  p {
    @apply p-2;
  }
</style>
