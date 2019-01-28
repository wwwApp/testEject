import React, { Component } from "react";
import { StyleSheet, Text, View} from "react-native";

class Home extends Component {
  render() {
    return (
      <View>
        <Text style={styles.textHome}> HOME PAGE </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textHome: {
  fontSize: 50,
  marginTop: 300,
  textAlign: 'center',
  },
});

export default Home;