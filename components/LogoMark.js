import React from 'react';
import Svg, {Rect, Line, Circle, Polyline} from 'react-native-svg';

// White stopwatch with a heartbeat line (Splash 1 logo)
export default function LogoMark({size = 80}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100">
      <Rect x="42" y="4" width="16" height="9" rx="3" fill="#fff" />
      <Line x1="72" y1="22" x2="80" y2="14" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
      <Circle cx="50" cy="56" r="34" stroke="#fff" strokeWidth="8" fill="none" />
      <Polyline points="26,58 38,58 44,44 54,72 60,54 64,58 74,58" stroke="#fff" strokeWidth="5"
        strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Svg>
  );
}
