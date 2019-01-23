import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Tag = props => {
  state = { tagData: props.tagData };

  return (
    <View style={styles.tagContainer}>
      {this.state.tagData.map((item, index) => (
        <Text key={index} style={styles.tagName}>
          {item}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tagContainer: {
    flexDirection: 'row'
  },
  tagName: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'Avenir',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 13,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginRight: 10
  }
});

export { Tag };
