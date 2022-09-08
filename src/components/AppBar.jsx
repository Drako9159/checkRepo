import { View, ViewPropTypes, StyleSheet, StatusBar } from "react-native";
import Constants from "expo-constants";
import StyledText from "./StyledText";
import theme from "../theme";
import { Link } from "react-router-native";

function AppBarTab({ active, children, to }) {
  return (
    <Link to={to}>
      <StyledText style={styles.text} fontWeight="bold">
        {children}
      </StyledText>
    </Link>
  );
}

export default function AppBar() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#0366d6"
        barStyle="light-content"
        animated={true}
        hidden={false}
      ></StatusBar>
      <StyledText style={styles.text} fontWeight="bold">
        People
      </StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  text: {
    color: theme.appBar.textPrimary,
  },
});
