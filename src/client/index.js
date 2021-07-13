import { HttpLink,ApolloLink,ApolloClient,InMemoryCache } from "@apollo/client";



export const httpLink = new HttpLink({uri: 'http://localhost:8000/graphql',credentials: 'include'})
export const apolloClient = new ApolloClient({
  link:  httpLink,
  cache: new InMemoryCache({options: {
    resultCaching: false
  }}),
});