import { FlatList, Text, View } from "react-native";
import { useEffect, useState } from "react";

import RepositoryItems from "./RepositoryItems";

export default function PeopleList() {
  const [repositories, setRepositories] = useState(null);

  async function fetchRepositories() {
    try {
      const res = await globalThis.fetch(
        "http://localhost:5000/api/repositories"
      );
      const json = await res.json();
      setRepositories(json);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchRepositories();
    console.log(fetchRepositories);
  }, []);

  const repositoriesNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      style={{ backgroundColor: "#0366d6", flex: 1 }}
      data={repositoriesNodes}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => <RepositoryItems {...repo} />}
    ></FlatList>
  );
}
