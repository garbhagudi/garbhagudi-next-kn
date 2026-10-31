import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetchWithRetry from "./fetchWithRetry";

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.ENDPOINT,
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
    fetch: fetchWithRetry,
  }),
  cache: new InMemoryCache(),
});

export default apolloClient;
