import axios from 'axios'

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

export const fetchSourceData = async (state) => {
  const reqs = state.selectedUrls.map((url) => {
    if (url.includes('hn.algolia.com')) {
      return axios.get(`${CORS_PROXY}${url}`)
    }
    return axios.get(`${CORS_PROXY}https://feed2json.org/convert?url=${url}`)
  })

  const responses = await Promise.all(reqs)

  const allItems = responses.map(({ data }) => {
    const { title, items } = JSON.parse(JSON.stringify(data))
    return items.map(item => ({ ...item, title }))
  })

  return allItems
}
