import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const screens = {
  splash: {
    image: require('../assets/screen-1-splash.png'),
    label: 'Delivery Partner splash screen',
  },
  earnings: {
    image: require('../assets/screen-2-earnings.png'),
    label: 'Your earnings, your way',
  },
  deliver: {
    image: require('../assets/screen-3-deliver.png'),
    label: 'Deliver the good things',
  },
  account: {
    image: require('../assets/screen-4-account.png'),
    label: 'Ready to get started, with an existing account',
  },
  signup: {
    image: require('../assets/screen-8-signup.png'),
    label: 'Ready to get started, sign up',
  },
};

export default function ReferenceScreen({screen}) {
  const {image, label} = screens[screen];

  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={styles.image}
        resizeMode="stretch"
        accessible
        accessibilityLabel={label}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, overflow: 'hidden'},
  image: {width: '100%', height: '100%'},
});
