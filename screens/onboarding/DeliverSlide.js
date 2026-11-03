import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import HeadingBlock from '../../components/HeadingBlock';

// Splash Screen 3
export default function DeliverSlide({width, height}) {
  return (
    <View style={{width, height}}>
      {/* Stretch shows the complete city and delivery rider artwork. */}
      <Image
        source={require('../../assets/scene.jpg')}
        style={StyleSheet.absoluteFillObject}
        resizeMode="stretch"
      />

      <HeadingBlock
        title={'Deliver the\ngood things'}
        subtitle={'Flexible hours. Fair earnings.\nBe your own boss.'}
        subtitleTop={200}
      />
    </View>
  );
}
