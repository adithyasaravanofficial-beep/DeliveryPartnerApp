import React from 'react';
import {View} from 'react-native';
import {colors, useDesign} from '../theme';

// Shows which onboarding screen is currently open.
export default function PagerDots({count, index}) {
  const {s} = useDesign();

  return (
    <View style={{flexDirection: 'row'}}>
      {Array.from({length: count}).map((item, i) => (
        <View
          key={i}
          style={{
            width: s(14),
            height: s(14),
            borderRadius: s(7),
            marginHorizontal: s(4),
            backgroundColor: i === index ? colors.primary : colors.inactive,
          }}
        />
      ))}
    </View>
  );
}
