import React from "react";

import { View } from "react-native";
import { Route, Routes } from "react-router-native";
import RepositoryList from "./RepositoryList.jsx";
import AppBar from "./AppBar";
import Login from "../pages/Login.jsx";
/** */

export default function Main() {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" exact element={<Login />} />
      </Routes>
    </View>
  );
}
