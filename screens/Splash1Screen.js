import React, {useEffect} from 'react';
import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native';
import {colors} from '../colors';
import {STATUS_BAR_HEIGHT} from '../constants';

// Splash Screen 1: red waves, logo, "Company Name", tagline.
// After 2.5 seconds it goes to the next screen by itself.
export default function Splash1Screen({onFinish}) {
  // useEffect runs once when the screen appears.
  useEffect(() => {
    const timer = setTimeout(onFinish, 2500); // wait 2500 milliseconds
    return () => clearTimeout(timer);         // clean up if the screen closes early
  }, []);

  return (
    <ImageBackground
      source={require('../assets/splash1_bg.jpg')}
      style={[styles.screen, {paddingTop: STATUS_BAR_HEIGHT}]}
      resizeMode="cover">
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.company}>Company Name</Text>
      <Text style={styles.partner}>Delivery Partner</Text>
      <Text style={styles.tagline}>{'Good Food.\nGreater Opportunities.'}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center', // everything centered left-to-right
  },
  logo: {
    width: 77,
    height: 89,
    marginTop: 135,
  },
  company: {
    marginTop: 10,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: 'bold',
    color: colors.white,
  },
  partner: {
    marginTop: 17,
    fontSize: 16,
    lineHeight: 20,
    color: colors.white,
  },
  tagline: {
    marginTop: 54,
    fontSize: 18,
    lineHeight: 26,
    textAlign: 'center',
    color: colors.white,
  },
});
