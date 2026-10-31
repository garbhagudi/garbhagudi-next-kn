import { GraphQLClient } from "graphql-request";
import fetchWithRetry from "./fetchWithRetry";

const graphcms = new GraphQLClient(process.env.ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
  },
  fetch: fetchWithRetry,
});

export default graphcms;
