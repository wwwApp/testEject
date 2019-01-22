import React from "react";
import {
  Alert,
  StyleSheet,
  TouchableOpacity,
  Button, View
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const PlayButton = () => {
  state = {
    toggle: false
    /* toggleIcon: 'ios-play', */
  };

  _onPress = () => {
    const newState = !this.state.toggle;
    this.setState({ toggle: newState });
  };

  const { toggle } = this.state;
  const iconName = toggle ? "ios-pause" : "ios-play";
  return (
<View>
    <TouchableOpacity style={styles.playButton} onPress={this._onPress}>
      <Icon style={styles.iconStyle} name={iconName} size={50} />
    </TouchableOpacity>
    
    {/* <Button style={styles.playButton} onPress={this._onPress} title="My Button">
      <Icon style={styles.iconStyle} name={iconName} size={50} />
    </Button> */}
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
    borderRadius: 90,
  },
  iconStyle: {
    marginRight: -5,
    marginTop: 5
  }
});

export { PlayButton };
