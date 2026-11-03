import React from 'react';
import {View, Text, Image, Alert, TouchableOpacity, StyleSheet} from 'react-native';
import HeadingBlock from '../components/HeadingBlock';
import PrimaryButton from '../components/PrimaryButton';
import {colors, useDesign} from '../theme';
import {config} from '../config';

// Splash Screen 4 or 8. The config decides which bottom text is displayed.
export default function GetStartedScreen() {
  const {s} = useDesign();

  const showMessage = (name) => {
    Alert.alert(name, 'The ' + name + ' screen will be connected here.');
  };

  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../assets/scene.jpg')}
        style={StyleSheet.absoluteFillObject}
        resizeMode="stretch"
      />

      <HeadingBlock
        title={'Ready to get\nstarted?'}
        subtitle={'Join thousands of delivery partners\nacross your country.'}
        subtitleTop={200}
      />

      {/* White button area at the bottom */}
      <View style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: s(149),
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: s(10),
        borderTopRightRadius: s(10),
      }}>
        <PrimaryButton
          title="Get Started"
          chevron
          onPress={() => showMessage('Get Started')}
          style={{position: 'absolute', left: s(12), right: s(12), top: s(27)}}
        />

        {config.lastScreenVariant === 'account' ? (
          <PrimaryButton
            title="I already have an account"
            variant="outline"
            onPress={() => showMessage('Login')}
            style={{position: 'absolute', left: s(12), right: s(12), top: s(90)}}
          />
        ) : (
          <View style={{position: 'absolute', top: s(95), left: 0, right: 0, flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{fontSize: s(14), color: colors.text}}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => showMessage('Sign Up')}>
              <Text style={{fontSize: s(14), color: colors.skip, fontWeight: '500'}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
