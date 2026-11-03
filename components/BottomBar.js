import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../colors';

// The white strip at the bottom of Splash 2 and Splash 3.
// It shows two dots (which one is orange depends on "activeDot")
// and the "Skip" text on the right.
//   activeDot = 1 -> first dot is orange
//   activeDot = 2 -> second dot is orange
export default function BottomBar({activeDot, onSkip}) {
  return (
    <View style={styles.bar}>
      {/* the two dots in the middle */}
      <View style={styles.dots}>
        <View style={[styles.dot, activeDot === 1 && styles.dotOn]} />
        <View style={[styles.dot, activeDot === 2 && styles.dotOn]} />
      </View>

      {/* "Skip" on the right side */}
      <TouchableOpacity style={styles.skipBox} onPress={onSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    position: 'absolute', // stick to the bottom of the screen
    left: 0,
    right: 0,
    bottom: 0,
    height: 96,
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    justifyContent: 'center',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginHorizontal: 5,
    backgroundColor: colors.dotOff,
  },
  dotOn: {
    backgroundColor: colors.primary,
  },
  skipBox: {
    position: 'absolute',
    right: 20,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  skipText: {
    fontSize: 16,
    color: colors.skip,
  },
});
