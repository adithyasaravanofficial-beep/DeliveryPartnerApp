import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {colors, useDesign} from '../theme';
import {config} from '../config';

// Splash Screen 1
export default function SplashScreen({navigation}) {
  const {s} = useDesign();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, config.splashDuration);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={{flex: 1, backgroundColor: colors.primary}}>
      <Image
        source={require('../assets/splash1_bg.jpg')}
        style={StyleSheet.absoluteFillObject}
        resizeMode="stretch"
      />

      <Image
        source={require('../assets/logo_white.png')}
        style={{position: 'absolute', top: s(148), alignSelf: 'center', width: s(96), height: s(106)}}
        resizeMode="contain"
      />

      <Text style={{position: 'absolute', top: s(256), left: 0, right: 0, textAlign: 'center', color: '#FFFFFF', fontSize: s(26), fontWeight: '600'}}>
        {config.companyName}
      </Text>
      <Text style={{position: 'absolute', top: s(304), left: 0, right: 0, textAlign: 'center', color: '#FFFFFF', fontSize: s(15)}}>
        {config.role}
      </Text>
      <Text style={{position: 'absolute', top: s(379), left: 0, right: 0, textAlign: 'center', color: '#FFFFFF', fontSize: s(16), lineHeight: s(22)}}>
        {config.tagline}
      </Text>
    </View>
  );
}
