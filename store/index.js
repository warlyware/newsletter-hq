export const state = () => ({
  selectedUrls: [],
  fetchedData: {},
  selectedDisplayOptions: []
})

export const getters = {
  selectedUrls() {
    return state.selectedUrls
  }
}

export const mutations = {
  updateFetchedData(state, fetchedData) {
    state.fetchedData = fetchedData
  },
  updateSources(state, sources) {
    state.selectedUrls = sources
  },
  updateDisplayOptions(state, options) {
    state.selectedDisplayOptions = options
  },
  addSource(state, url) {
    state.selectedUrls.push(url)
  },
  removeSource(state, url) {
    state.selectedUrls.pop(url)
  }
}

export const actions = {
  async fetchSourceData({ state, commit }) {
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

    const allItems = responses.map(({ data }) => {
      const { feed, items } = data
      return items.map(item => ({ ...item, feed }))
    })

    commit('updateFetchedData', ...allItems)
    return allItems
  }
}
