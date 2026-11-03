import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Defs, LinearGradient, Stop, Rect, Path} from 'react-native-svg';

// Red gradient with layered waves (Splash 1 background)
export default function WaveBackground() {
  return (
    <Svg style={StyleSheet.absoluteFill} width="100%" height="100%" viewBox="0 0 360 780" preserveAspectRatio="none">
      <Defs>
        <LinearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FF5B3D" />
          <Stop offset="1" stopColor="#C4180A" />
        </LinearGradient>
      </Defs>
      <Rect width="360" height="780" fill="url(#bg)" />
      <Path d="M0 470 C80 430 150 520 240 480 S340 430 360 450 L360 780 L0 780Z" fill="#7A0A00" opacity="0.10" />
      <Path d="M0 560 C90 520 170 610 260 570 S340 540 360 550 L360 780 L0 780Z" fill="#7A0A00" opacity="0.14" />
      <Path d="M0 650 C100 610 190 700 280 660 S345 640 360 650 L360 780 L0 780Z" fill="#7A0A00" opacity="0.18" />
    </Svg>
  );
}
