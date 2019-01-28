/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer } from "react-navigation";
import Playlist from "./app/views/Playlist";
import Home from "./app/views/Home";

const BottomNav = createMaterialBottomTabNavigator(
  {
    Home: { screen: Home },
    Playlist: { screen: Playlist }
  },
  {
    initialRouteName: "Home",
    order: ["Home", "Playlist"]
  }
);

const App = createAppContainer(BottomNav);
export default App;

const styles = StyleSheet.create({});
