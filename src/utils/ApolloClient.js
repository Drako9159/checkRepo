import ApolloClient from "apollo-boost";

export default function createApolloClient() {
  return new ApolloClient({
    uri: "http://192.168.1.170:5000/graphql",
  });
}
