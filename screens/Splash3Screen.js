import React from 'react';
import {View, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import SceneBackground from '../components/SceneBackground';
import TitleBlock from '../components/TitleBlock';
import BottomBar from '../components/BottomBar';

// Splash Screen 3: "Deliver the good things" with the delivery rider picture.
// Tap anywhere to go to the next screen. "Skip" jumps to the last screen.
export default function Splash3Screen({onNext, onSkip}) {
  return (
    <TouchableWithoutFeedback onPress={onNext}>
      <View style={styles.screen}>
        <SceneBackground>
          <TitleBlock
            title={'Deliver the\ngood things'}
            subtitle={'Flexible hours. Fair earnings.\nBe your own boss.'}
          />
          <BottomBar activeDot={2} onSkip={onSkip} />
        </SceneBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
