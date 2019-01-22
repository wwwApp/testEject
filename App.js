/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TrackList } from "./components/TrackList";
import { Button } from "./components/Button";
import { Tag } from "./components/Tag";
import { PlayButton } from "./components/PlayButton";
import LinearGradient from "react-native-linear-gradient";

export default class App extends React.Component {
  state = {
    title: "Playlist Title",
    user: "@User",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    albumImg:
      "https://images-na.ssl-images-amazon.com/images/I/A1QsthUoerL._SY355_.jpg",
    tag: ["Tag1", "Tag2", "Tag3"],
    location: "Location",
    mood: "Mood"
  };

  render() {
    return (
      // Change the color values based on mood calculated from server for bg color
      <LinearGradient style={styles.container} colors={["#E23955", "#553484"]}>
        <View style={styles.playButton}>
          <PlayButton />
        </View>
        <View style={styles.topIconGroup}>
          <Button type="return" />
          <View style={styles.rightIcon}>
            <Button type="heart" />
            <Button type="more" />
          </View>
        </View>

        <View>
          <Text style={[styles.playlistItem, styles.title, styles.txtBold]}>
            {this.state.title}
          </Text>
          <Text style={[styles.playlistItem, styles.location, styles.txtLight]}>
            {this.state.location}
          </Text>
          <View style={[styles.playlistItem, styles.tag]}>
            <Tag tagData={this.state.tag} />
          </View>
          <Text style={styles.playlistItem}>{this.state.description}</Text>
          <Text style={[styles.playlistItem, styles.user, styles.txtLight]}>
            {this.state.user}
          </Text>
          {/* <Text style = {[styles.playlistItem,styles.playlistAlbum]}>Album Image</Text>
            <Text style = {[styles.playlistItem,styles.playlistMood]}>{item.mood}</Text> */}
        </View>
        <TrackList />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cc0066",
    alignItems: "flex-start",
    padding: 40,
    paddingTop: 50
  },
  topIconGroup: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  rightIcon: {
    flexDirection: "row",
  },
  playlistItem: {
    fontFamily: "Avenir",
    color: "white"
  },
  title: {
    fontSize: 30
  },
  location: {
    fontSize: 20
  },
  tag: {
    marginTop: 20,
    marginBottom: 20
  },
  user: {
    marginTop: 5,
    marginBottom: 30
  },
  txtBold: {
    fontWeight: "bold"
  },
  txtLight: {
    fontWeight: "100"
  },
  playButton: {
    position: "absolute",
    top: 130,
    right: 35,
  }
});
