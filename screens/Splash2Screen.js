import React from 'react';
import {View, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {colors} from '../colors';
import {STATUS_BAR_HEIGHT} from '../constants';
import TitleBlock from '../components/TitleBlock';
import EarningsIllustration from '../components/EarningsIllustration';
import BottomBar from '../components/BottomBar';

// Splash Screen 2: "Your earnings, your way."
// Tap anywhere to go to the next screen. "Skip" jumps straight to the last screen.
export default function Splash2Screen({onNext, onSkip}) {
  return (
    <TouchableWithoutFeedback onPress={onNext}>
      <View style={[styles.screen, {paddingTop: STATUS_BAR_HEIGHT}]}>
        <TitleBlock
          title={'Your\nearnings,\nyour way.'}
          subtitle={'Track your orders, view earnings,\nand get paid on time.'}
        />
        <EarningsIllustration />
        <BottomBar activeDot={1} onSkip={onSkip} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.cream,
  },
});
