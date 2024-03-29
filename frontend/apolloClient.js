import { ApolloClient } from "apollo-client";
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";
import introspectionQueryResultData from "./schema";
import { getRegisteredSupportersCount } from "./data/api";

/**
query introspectionQueryResultData {
  __schema {
    types {
      kind
      name
      possibleTypes {
        name
      }
    }
  }
}
*/

export default function createApolloClient(initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: new HttpLink({
      uri: process.env.CMS_GRAPHQL_API_URL, // Server URL (must be absolute)
      credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
      fetch,
    }),
    cache: new InMemoryCache({
      fragmentMatcher: new IntrospectionFragmentMatcher({
        introspectionQueryResultData,
      }),
    }).restore(initialState),
    resolvers: {
      Query: {
        registeredSupportersCount: async (root, args, context, info) => {
          return getRegisteredSupportersCount();
        },
      },
    },
  });
}
