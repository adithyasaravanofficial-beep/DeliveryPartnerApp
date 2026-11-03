import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../colors';

// The big black heading + the smaller line under it.
// It is used on Splash 2, 3, 4 and 8, so we write it only once.
// Use \n inside the text to start a new line (exactly like the Figma design).
export default function TitleBlock({title, subtitle}) {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 48,
    lineHeight: 60,
    fontWeight: '500',
    color: colors.black,
  },
  subtitle: {
    marginTop: 18,
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '500',
    color: colors.black,
  },
});
