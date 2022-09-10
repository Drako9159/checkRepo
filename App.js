import Main from "./src/components/Main";
import React from "react";
import { NativeRouter } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import { ApolloProvider } from "@apollo/client";

import { ApolloClient } from "./src/utils/ApolloClient.js";

const apolloClient = createApolloClient();
export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <StatusBar style="light"></StatusBar>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </ApolloProvider>
  );
}
