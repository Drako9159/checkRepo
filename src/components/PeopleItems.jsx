import { View, Text, StyleSheet, Image, Platform } from "react-native";
import StyledText from "./StyledText";
import PeopleStats from "./PeopleStats";
import theme from "../theme";
import imgMoon from "../assets/moon.png";

function PeopleItemsHeader({ id }) {
  return (
    <View style={{ flexDirection: "row", paddingBottom: 2 }}>
      <Image source={imgMoon} style={styles.image}></Image>
      <View style={{ paddingRight: 18, justifyContent: "center" }}>
        <StyledText style={styles.name} fontSize="subheading" fontWeight="bold">
          id: {id}
        </StyledText>
      </View>
    </View>
  );
}

export default function PeopleItems({ people }) {
  return (
    <View key={people.id} style={styles.container}>
      <PeopleItemsHeader {...people} />
      <PeopleStats {...people} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
    backgroundColor: "green",
  },
  strong: {
    color: "#0366d6",
    fontWeight: "bold",
    marginBottom: 5,
  },
  items: { fontWeight: "bold", color: "#081f" },
  name: {
    padding: 5,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 5,
    overflow: "hidden",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 5,
  },
});
