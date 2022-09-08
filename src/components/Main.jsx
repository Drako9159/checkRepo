import React from "react";
import Constants from "expo-constants";
import { StyleSheet, View, Text } from "react-native";
import {
  Switch,
  Route,
  Redirect,
  Routes,
  MemoryRouter,
} from "react-router-native";
import PeopleList from "./PeopleList.jsx";
import AppBar from "./AppBar.jsx";

export default function Main() {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Switch>
        <Route path="/" exact></Route>
        <Route path="/signin" exact>
          <Text>Working on it</Text>
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
}
