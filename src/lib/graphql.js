import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient(
  import.meta.env.VITE_WORDPRESS_GRAPHQL_URL
);
