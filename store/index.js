import { fetchSourceData } from '~/utils'

export const state = () => ({
  loading: false,
  selectedUrls: [],
  fetchedData: [],
  selectedDisplayOptions: [],
  selectedFilterOptions: []
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
  updateFilterOptions(state, options) {
    state.selectedFilterOptions = options
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
      const allItems = await fetchSourceData(state)
      commit('updateFetchedData', ...[allItems.flat()])
    } catch (error) {
      console.error(error)
    } finally {
      commit('updateLoading', false)
    }
  }
}
