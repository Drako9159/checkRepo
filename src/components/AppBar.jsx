import { View, ViewPropTypes, StyleSheet, StatusBar } from "react-native";
import Constants from "expo-constants";
import StyledText from "./StyledText";
import theme from "../theme";
import { Link, useLocation } from "react-router-native";
import { ScrollView } from "react-native";

function AppBarTab({ children, to }) {
  const { pathname } = useLocation();
  const active = pathname === to;
  const textStyles = [styles.text, active && styles.active];
  return (
    <Link to={to}>
      <StyledText style={textStyles} fontWeight="bold">
        {children}
      </StyledText>
    </Link>
  );
}

export default function AppBar() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        <AppBarTab to="/">Repositorios</AppBarTab>
        <AppBarTab to="/signin">Sign in</AppBarTab>
      </ScrollView>
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
    paddingHorizontal: 10,
    color: theme.appBar.textSecondary,
  },
  scrollView: {
    paddingBottom: 10,
  },
  active: {
    color: theme.appBar.textPrimary,
  },
});
