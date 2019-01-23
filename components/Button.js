import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

/**
 * @param {String} props
 * Type of Icon
 * - heart
 * - return
 * - more
 */

const Button = props => {
  switch (props.type) {
    case "heart":
      return (
        <TouchableOpacity>
          <Icon
            style={styles.iconStyle}
            name="md-heart-empty"
            size={35} /* onPress={this.loginWithFacebook} */
          />
        </TouchableOpacity>
      );
    case "return":
      return (
        <TouchableOpacity>
          <Icon
            style={styles.iconStyle}
            name="ios-arrow-back"
            size={35}
            /* onPress={this.loginWithFacebook} */
          />
        </TouchableOpacity>
      );
    case "more":
      return (
        <TouchableOpacity>
          <Icon
            style={[styles.iconStyle, styles.verticalIcon, { marginLeft: 10, marginRight: -10 }]}
            name="ios-more"
            size={35} /* onPress={this.loginWithFacebook} */
          />
        </TouchableOpacity>
      );
    case "track-star":
      return (
        <TouchableOpacity>
          <Icon
            style={styles.iconStyle}
            name="ios-star-outline"
            size={25} /* onPress={this.loginWithFacebook} */
          />
        </TouchableOpacity>
      );
    case "track-more":
      return (
        <TouchableOpacity>
          <Icon
            style={[styles.iconStyle, styles.verticalIcon]}
            name="ios-more"
            size={25} /* onPress={this.loginWithFacebook} */
          />
        </TouchableOpacity>
      );
      case "pb-play":
      return (
        <TouchableOpacity>
          <Icon
            style={[styles.iconStyle]}
            name="ios-play"
            size={50}
          />
        </TouchableOpacity>
      );
      case "pb-pause":
      return (
        <TouchableOpacity>
          <Icon
            style={[styles.iconStyle]}
            name="ios-more"
            size={50}
          />
        </TouchableOpacity>
      );
    default:
      return (
        <View>
          <Text>Null</Text>
        </View>
      );
  }
};

const styles = StyleSheet.create({
  iconStyle: {
    color: "white"
  },
  verticalIcon: {
    transform: [{ rotate: "90deg" }]
  }
});

export { Button };
