import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class PlayButton extends Component {
  /**
   *
   * @param {required} props
   * Use the class constructor to set the initial state
   * for your component.
   */
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      toggleIcon: 'ios-play'
    };
  }

  /**
   * Handle the play/pause button press event.
   */
  onPress() {
    /**
     * If you name your variables the same name as your state
     * properties, you can simplify your setState call.
     */
    const toggle = !this.state.toggle;
    const toggleIcon = toggle ? 'ios-pause' : 'ios-play';
    this.setState({ toggle, toggleIcon });

    /**
     * The above setState is the same as:
     * this.setState({ toggle: toggle, toggleIcon: toggleIcon })
     * Since the state property name is the same as the variable
     * name being used to update the state, you dont' have to
     * specify the name twice.
     */
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.playButton}
          /**
           * ✨ You have to bind the context in order for the
           * method to have access to the state object.
           */
          onPress={this.onPress.bind(this)}
        >
          <Icon
            style={styles.iconStyle}
            name={this.state.toggleIcon}
            size={50}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  playButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 90,
    backgroundColor: '#E7E7E7',
    borderRadius: 90
  },
  iconStyle: {
    marginRight: -5,
    marginTop: 5
  }
});

export { PlayButton };
