<template>
  <div class="flex flex-col m-4 rounded-lg border border-grey-600 shadow-md">
    <div class="flex font-bold mb-2 bg-gray-800 p-2 text-sm rounded-lg">
      <span v-html="entryData.title" />
    </div>
    <div class="p-4">
      <a :href="entryData.url" target="_blank">
        <div class="font-bold" v-html="entryData.summary" />
      </a>
      <div class="italic">
        {{ publishDate }}
        <a class="uppercase text-lg font-bold tracking-widest underline text-blue-500 pl-4"
        :href="entryData.url" target="_blank">Link</a>
      </div>
      <div class="mb-2" v-html="entryData.description" />
      <div v-if="shouldShowContentSection"
      v-html="entryData.content_html" />
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
    publishDate() { return moment(this.entryData.date_published).format('MMMM Do @ h:mma') },
    shouldShowContentSection() {
      return this.options.includes('show-content') && !this.entryData.title.includes('Hacker News')
    }
  },
  mounted() {
    console.log(this.entryData)
  }
}
</script>

<style>
  img {
    width: 100%;
    max-width: 300px !important;
  }
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
