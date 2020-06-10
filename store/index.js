export const state = () => ({
  loading: false,
  selectedUrls: [],
  fetchedData: [],
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
  updateLoading(state, loading) {
    state.loading = loading
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
    commit('updateLoading', true)
    try {
      const reqs = state.selectedUrls.map((url) => {
        return this.$axios.get('https://api.rss2json.com/v1/api.json', {
          params: {
            rss_url: url,
            api_key: process.env.RSS_2_JSON_API_KEY,
            count: 40
          }
        })
      })

      const responses = await Promise.all(reqs)

      const allItems = responses.map(({ data }) => {
        const { feed, items } = JSON.parse(JSON.stringify(data))
        return items.map(item => ({ ...item, feed }))
      })

      commit('updateFetchedData', ...[allItems.flat()])
      return allItems
    } catch (error) {
      return console.error(error)
    } finally {
      commit('updateLoading', false)
    }
  }
}
