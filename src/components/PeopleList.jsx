import { FlatList, Text, View } from "react-native";
import people from "../data/people";
import PeopleItems from "./PeopleItems";

export default function PeopleList() {
  return (
    <FlatList
      style={{ backgroundColor: "#0366d6", flex: 1 }}
      data={people}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: people }) => <PeopleItems people={people} />}
    ></FlatList>
  );
}
