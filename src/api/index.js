import { createClient } from 'contentful'
const space = process.env.VUE_APP_API_SPACE
const accessToken = process.env.VUE_APP_API_TOKEN

const client = createClient({
  space,
  accessToken
})

export function getData () {
  return client.getEntries({
    content_type: 'superContent',
    limit: 4
  })
    .then((response) => {
      console.log('🎭 ', response.items)
      return response.items
    })
}
