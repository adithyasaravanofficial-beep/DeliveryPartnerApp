import React from 'react';
import Svg, {Defs, LinearGradient, Stop, Rect, Circle, Path} from 'react-native-svg';

// Food app logo shown in the popup: plate + fork + knife on a gradient tile.
// Replace this component with <Image source={require('../assets/logo.png')} /> to use the real logo.
export default function FoodAppLogo({size = 110}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100">
      <Defs>
        <LinearGradient id="tile" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#FF7A59" />
          <Stop offset="1" stopColor="#E02D17" />
        </LinearGradient>
      </Defs>
      <Rect width="100" height="100" rx="28" fill="url(#tile)" />
      <Circle cx="50" cy="50" r="24" stroke="#fff" strokeWidth="5" fill="none" />
      <Circle cx="50" cy="50" r="12" fill="#fff" />
      <Path d="M17 26v16a5 5 0 0 0 5 5v27M27 26v16a5 5 0 0 1-5 5" stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none" />
      <Path d="M83 26c-7 4-9 13-9 21h9v27" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Svg>
  );
}
