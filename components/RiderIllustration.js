import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Defs, LinearGradient, Stop, Rect, Polygon, Ellipse, Circle, Line, Path, G} from 'react-native-svg';

// Vector recreation of the delivery rider scene (sky, city, trees, road, rider on scooter).
// For pixel-perfect output, export the artwork from Figma as PNG and replace this component with an <Image>.
const BASE = 410;
const buildings = [
  [8, 36, 120, '#E8806A'], [42, 30, 80, '#F3A584'], [70, 44, 160, '#D96A52'], [112, 34, 105, '#F5B592'],
  [222, 40, 150, '#D96A52'], [260, 34, 100, '#F3A584'], [292, 46, 175, '#E8806A'], [330, 34, 115, '#F5B592'],
];
const city = [];
buildings.forEach(([x, w, h, c], i) => {
  city.push(<Rect key={`b${i}`} x={x} y={BASE - h} width={w} height={h} fill={c} />);
  for (let y = BASE - h + 10; y < BASE - 12; y += 16) {
    for (let cx = x + 6; cx < x + w - 8; cx += 12) {
      city.push(<Rect key={`w${i}-${y}-${cx}`} x={cx} y={y} width={5} height={8} fill="#FFE3D0" opacity={0.7} />);
    }
  }
});

export default function RiderIllustration() {
  return (
    <Svg style={StyleSheet.absoluteFill} width="100%" height="100%" viewBox="0 0 360 780" preserveAspectRatio="xMidYMid slice">
      <Defs>
        <LinearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FF6A47" />
          <Stop offset="0.45" stopColor="#FFB394" />
          <Stop offset="0.53" stopColor="#FFDCC8" />
        </LinearGradient>
      </Defs>
      <Rect width="360" height="780" fill="url(#sky)" />
      {/* clouds */}
      <G fill="#fff" opacity="0.9">
        <Ellipse cx="60" cy="250" rx="46" ry="14" /><Ellipse cx="95" cy="240" rx="30" ry="14" />
        <Ellipse cx="290" cy="215" rx="52" ry="14" /><Ellipse cx="320" cy="205" rx="30" ry="12" />
        <Ellipse cx="200" cy="320" rx="40" ry="10" />
      </G>
      {city}
      {/* trees + grass */}
      <G>
        <Ellipse cx="40" cy="410" rx="70" ry="26" fill="#4E9A2E" /><Ellipse cx="120" cy="415" rx="50" ry="20" fill="#6DB33F" />
        <Ellipse cx="320" cy="410" rx="70" ry="26" fill="#4E9A2E" /><Ellipse cx="245" cy="415" rx="50" ry="20" fill="#6DB33F" />
      </G>
      <Polygon points="0,405 168,405 40,780 0,780" fill="#5DAA3C" />
      <Polygon points="192,405 360,405 360,780 320,780" fill="#5DAA3C" />
      {/* road */}
      <Polygon points="168,405 192,405 320,780 40,780" fill="#85858F" />
      <Line x1="168" y1="405" x2="40" y2="780" stroke="#fff" strokeWidth="4" />
      <Line x1="192" y1="405" x2="320" y2="780" stroke="#fff" strokeWidth="4" />
      <Line x1="176" y1="410" x2="105" y2="780" stroke="#fff" strokeWidth="7" strokeDasharray="26 30" />
      <Line x1="184" y1="410" x2="255" y2="780" stroke="#fff" strokeWidth="7" strokeDasharray="26 30" />
      {/* rider + scooter, seen from behind */}
      <Ellipse cx="180" cy="705" rx="78" ry="12" fill="#000" opacity="0.2" />
      <Rect x="160" y="615" width="40" height="88" rx="18" fill="#26262B" />
      <Rect x="138" y="555" width="84" height="80" rx="18" fill="#3A3A42" />
      <Rect x="170" y="598" width="20" height="9" rx="3" fill="#FF2D2D" />
      <Rect x="146" y="495" width="34" height="85" rx="15" fill="#2F3142" />
      <Rect x="180" y="495" width="34" height="85" rx="15" fill="#2F3142" />
      <Rect x="138" y="410" width="84" height="110" rx="20" fill="#FF5A36" />
      <Path d="M130 430 L96 482" stroke="#3A3A42" strokeWidth="17" strokeLinecap="round" />
      <Path d="M230 430 L264 482" stroke="#3A3A42" strokeWidth="17" strokeLinecap="round" />
      <Line x1="92" y1="486" x2="268" y2="486" stroke="#26262B" strokeWidth="8" strokeLinecap="round" />
      <Circle cx="92" cy="440" r="10" fill="#E6E6EA" stroke="#333" strokeWidth="3" />
      <Circle cx="268" cy="440" r="10" fill="#E6E6EA" stroke="#333" strokeWidth="3" />
      <Rect x="118" y="395" width="124" height="130" rx="16" fill="#FF4A2A" />
      <Rect x="118" y="395" width="124" height="34" rx="16" fill="#FF7A59" />
      <Rect x="130" y="470" width="100" height="6" rx="3" fill="#C93412" />
      <Circle cx="180" cy="452" r="13" fill="#fff" opacity="0.92" />
      <Rect x="130" y="352" width="100" height="62" rx="26" fill="#FF5A36" />
      <Circle cx="180" cy="334" r="31" fill="#FF5A36" />
      <Path d="M152 340 Q180 322 208 340 L208 350 Q180 338 152 350 Z" fill="#2B2B30" />
      <Ellipse cx="168" cy="318" rx="10" ry="6" fill="#fff" opacity="0.3" />
    </Svg>
  );
}
