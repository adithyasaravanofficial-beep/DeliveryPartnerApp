import React from 'react';
import {View, StyleSheet} from 'react-native';

// A small bank building drawn with plain Views (a roof, 4 pillars and a base),
// sitting inside a grey circle. No image needed.
export default function BankIcon() {
  return (
    <View style={styles.circle}>
      <View style={styles.roof} />
      <View style={styles.pillars}>
        <View style={styles.pillar} />
        <View style={styles.pillar} />
        <View style={styles.pillar} />
        <View style={styles.pillar} />
      </View>
      <View style={styles.base} />
    </View>
  );
}

const DARK_BLUE = '#3A5BB0';
const LIGHT_BLUE = '#7FB0F2';

const styles = StyleSheet.create({
  circle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // A triangle is made with borders: left and right are see-through, bottom is coloured.
  roof: {
    width: 0,
    height: 0,
    borderLeftWidth: 12,
    borderRightWidth: 12,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: DARK_BLUE,
  },
  pillars: {
    width: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 1,
  },
  pillar: {
    width: 3.5,
    height: 9,
    backgroundColor: LIGHT_BLUE,
  },
  base: {
    width: 24,
    height: 2.5,
    marginTop: 1,
    backgroundColor: DARK_BLUE,
  },
});
