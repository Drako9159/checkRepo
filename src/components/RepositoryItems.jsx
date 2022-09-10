import { View, Text, StyleSheet, Image, Platform } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";
import imgMoon from "../assets/moon.png";

function RepositoryItemsHeader({
  ownerAvatarUrl,
  fullName,
  description,
  language,
}) {
  return (
    <View style={{ flexDirection: "row", paddingBottom: 2 }}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
      </View>
      <View style={{ flex: 1 }}>
        <StyledText fontWeight="bold">{fullName}</StyledText>
        <StyledText fontSize="subheading" fontWeight="bold">
          {description}
        </StyledText>
        <StyledText fontSize="subheading" fontWeight="bold">
          {language}
        </StyledText>
      </View>
    </View>
  );
}

export default function RepositoryItems({ props }) {
  return (
    <View key={props.id} style={styles.container}>
      <RepositoryItemsHeader {...props} />
      <RepositoryStats {...props} />
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
