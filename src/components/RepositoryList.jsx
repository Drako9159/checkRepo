import { FlatList, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Repos from "../data/people.js";
import RepositoryItems from "./RepositoryItems.jsx";
import useRepositories from "../hooks/useRepositories.js";

export default function RepositoryList() {
  const { repositories } = useRepositories();
  return (
    <FlatList
      style={{ backgroundColor: "#0366d6", flex: 1 }}
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => <RepositoryItems {...repo} />}
    ></FlatList>
  );
}
