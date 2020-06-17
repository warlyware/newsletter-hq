import axios from 'axios'

export const fetchSourceData = async (state) => {
  const reqs = state.selectedUrls.map((url) => {
    return axios.get('https://api.rss2json.com/v1/api.json', {
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

  return allItems
}
