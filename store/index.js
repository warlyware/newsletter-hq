export const state = () => ({
  selectedUrls: [],
  fetchedData: {}
})

export const getters = {
  selectedUrls() {
    return state.selectedUrls
  }
}

export const mutations = {
  updateSources(state, sources) {
    console.log('updateSources', sources)
    state.selectedUrls = sources
  },
  addSource(state, url) {
    state.selectedUrls.push(url)
  },
  removeSource(state, url) {
    state.selectedUrls.pop(url)
  }
}

export const actions = {
  async fetchSourceData({ state }) {
    console.log('fetching urls: ', state.selectedUrls)
    const reqs = state.selectedUrls.map((url) => {
      return this.$axios.get('https://api.rss2json.com/v1/api.json', {
        params: {
          rss_url: url,
          api_key: process.env.RSS_2_JSON_API_KEY,
          count: 20
        }
      })
    })

    const responses = await Promise.all(reqs)

    console.log(responses)
    return responses
  }
}
