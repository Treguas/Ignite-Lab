import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient
({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o8e3cf18pa01xi7byxgp51/master',
  cache: new InMemoryCache()
})
