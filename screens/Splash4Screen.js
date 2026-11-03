import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../colors';
import SceneBackground from '../components/SceneBackground';
import TitleBlock from '../components/TitleBlock';
import GetStartedButton from '../components/GetStartedButton';

// Splash Screen 4: "Ready to get started?" with two buttons at the bottom.
export default function Splash4Screen({onGetStarted, onHaveAccount}) {
  return (
    <SceneBackground>
      <TitleBlock
        title={'Ready to get\nstarted?'}
        subtitle={'Join thousands of delivery partners\nacross your country.'}
      />

      {/* white bottom card */}
      <View style={styles.footer}>
        <GetStartedButton onPress={onGetStarted} />

        <TouchableOpacity style={styles.accountButton} onPress={onHaveAccount}>
          <Text style={styles.accountText}>I already have an account</Text>
        </TouchableOpacity>
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
  accountButton: {
    height: 40,
    marginTop: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.softBorder,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountText: {
    fontSize: 14,
    color: colors.black,
  },
});
