import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { useMemo } from "react";

let apolloClient: ApolloClient<NormalizedCacheObject>;

const createIsomorphicLink = (context = {}) => {
  if (typeof window === "undefined") {
    // server
    const { SchemaLink } = require("@apollo/client/link/schema");
    const { schema } = require("../graphql/schema");
    return new SchemaLink({ schema, context });
  } else {
    // client
    const { HttpLink } = require("@apollo/client/link/http");
    return new HttpLink({
      uri: "/api/graphql",
      credentials: "same-origin",
    });
  }
};
const createApolloClient = (context?) => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: createIsomorphicLink(context),
    cache: new InMemoryCache(),
  });
};


export const initializeApollo = (initialState = null, context?) => {
  const _apolloClient = apolloClient ?? createApolloClient(context);

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === "undefined") return _apolloClient;
  apolloClient = apolloClient ?? _apolloClient;

  return apolloClient;
};
export const useApollo = (initialState) => {
  const store = useMemo(
    () => initializeApollo(initialState),
    [initialState]
  );
  return store;
};
