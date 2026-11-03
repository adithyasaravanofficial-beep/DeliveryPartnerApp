import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../colors';
import SceneBackground from '../components/SceneBackground';
import TitleBlock from '../components/TitleBlock';
import GetStartedButton from '../components/GetStartedButton';

// Splash Screen 8: same picture as Splash 4, but the bottom card has
// "Get Started" and a "Don't have an account? Sign Up" line.
export default function Splash8Screen({onGetStarted, onSignUp}) {
  return (
    <SceneBackground>
      <TitleBlock
        title={'Ready to get\nstarted?'}
        subtitle={'Join thousands of delivery partners\nacross your country.'}
      />

      {/* white bottom card */}
      <View style={styles.footer}>
        <GetStartedButton onPress={onGetStarted} />

        {/* A Text inside a Text lets us give "Sign Up" its own color */}
        <Text style={styles.accountRow}>
          Don’t have an account?{' '}
          <Text style={styles.signUp} onPress={onSignUp}>
            Sign Up
          </Text>
        </Text>
      </View>
    </SceneBackground>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 24,
    paddingBottom: 24,
    paddingHorizontal: 14,
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  accountRow: {
    marginTop: 37,
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.black,
  },
  signUp: {
    color: colors.primary,
  },
});
