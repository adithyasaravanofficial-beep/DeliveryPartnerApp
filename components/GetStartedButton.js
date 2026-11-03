import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../colors';

// The big orange "Get Started >" button (Splash 4 and Splash 8).
export default function GetStartedButton({onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Get Started</Text>
      {/* The ">" arrow: a small square with only two borders, turned 45 degrees */}
      <View style={styles.arrow} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    borderRadius: 8,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: colors.white,
  },
  arrow: {
    width: 8,
    height: 8,
    marginLeft: 14,
    borderTopWidth: 1.5,
    borderRightWidth: 1.5,
    borderColor: colors.white,
    transform: [{rotate: '45deg'}],
  },
});
