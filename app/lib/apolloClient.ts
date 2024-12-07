import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'cd',
    cache: new InMemoryCache()
})

export default client
