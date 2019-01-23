import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Button } from './Button';

const TrackList = () => {
  state = {
    trackData: [
      { trackInfo: 'Track 1', artistInfo: 'Artist1', duration: '03:00' },
      { trackInfo: 'Track 2', artistInfo: 'Artist2', duration: '03:00' },
      { trackInfo: 'Track 3', artistInfo: 'Artist3', duration: '03:00' },
      { trackInfo: 'Track 4', artistInfo: 'Artist4', duration: '03:00' },
      { trackInfo: 'Track 5', artistInfo: 'Artist5', duration: '03:00' },
      { trackInfo: 'Track 6', artistInfo: 'Artist6', duration: '03:00' }
    ]
  };

  return (
    // MAKE IT SCROLLVIEW / FLATLIST
    <View>
      {this.state.trackData.map((item, index) => (
        <View key={index} style={styles.trackContainer}>
          <View style={styles.trackInfoStyle}>
            <Text style={styles.trackItem}>{item.trackInfo}</Text>
            <Text style={[styles.trackItem, styles.arist, styles.txtLight]}>
              {item.artistInfo}
            </Text>
          </View>
          {/* <Text style={[styles.trackItem, styles.txtLight]}>{item.duration}</Text> */}
          <View style={styles.trackIconStyle}>
            <Button style={styles.trackItem} type="track-star" />
            <Button style={styles.trackItem} type="track-more" />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  trackContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10
  },
  trackItem: {
    fontFamily: 'Avenir',
    color: 'white',
    fontSize: 16
  },
  arist: {
    fontSize: 13
  },
  trackIconStyle: {
    flexDirection: 'row'
  },
  txtLight: {
    fontWeight: '100'
  }
});

export { TrackList };
