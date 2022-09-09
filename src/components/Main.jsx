import React from "react";
import Constants from "expo-constants";
import { StyleSheet, View, Text } from "react-native";

import {
  Switch,
  Route,
  Redirect,
  Routes,
  Router,
  MemoryRouter,
  Navigate,
} from "react-router-native";
import PeopleList from "./PeopleList.jsx";
import AppBar from "./AppBar";
import Login from "../pages/Login.jsx";
/** */

export default function Main() {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<PeopleList />} />
        <Route path="/signin" exact element={<Login />} />
      </Routes>
    </View>
  );
}
