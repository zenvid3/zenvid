import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
const API_URL = 'https://indexer.crossbell.io/v1/graphql'
export const apolloClient = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
  });