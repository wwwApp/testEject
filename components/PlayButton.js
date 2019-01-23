import React from "react";
import {
  Alert,
  StyleSheet,
  TouchableOpacity,
  Button,
  View
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const PlayButton = () => {
  state = {
    isPlaying: false
  };

  _onPress = () => {
    /* let newState = this.state.toggle ? false : true;
    this.setState({ isPlaying: newState }); */
  };

  return (
    <View>
      <TouchableOpacity style={styles.playButton} onPress={() => this._onPress() }>
        <Icon style={styles.iconStyle} name={this.state.isPlaying ? "ios-pause" : "ios-play"} size={50} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  playButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    height: 90,
    backgroundColor: "#E7E7E7",
    borderRadius: 90
  },
  iconStyle: {
    marginRight: -5,
    marginTop: 5
  }
});

export { PlayButton };
