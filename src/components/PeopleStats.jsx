import { View } from "react-native";
import StyledText from "./StyledText";

export default function PeopleStats(people) {
  return (
    <View
      style={{
        backgroundColor: "yellow",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View fontWeight="bold">
        <StyledText fontWeight="bold">Name: {people.name}</StyledText>
        <StyledText fontWeight="bold">Apellido: {people.apellido}</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          Edad: {people.edad}
        </StyledText>
      </View>
    </View>
  );
}
