import React from 'react';
import {Text} from 'react-native';
import {colors, useDesign} from '../theme';

// A simple title and subtitle used on the onboarding screens.
export default function HeadingBlock({title, subtitle, subtitleTop}) {
  const {s} = useDesign();

  return (
    <>
      <Text style={{
        position: 'absolute',
        top: s(85),
        left: s(20),
        right: s(12),
        color: colors.text,
        fontSize: s(48),
        lineHeight: s(58),
        fontWeight: '600',
        includeFontPadding: false,
      }}>
        {title}
      </Text>

      <Text style={{
        position: 'absolute',
        top: s(subtitleTop),
        left: s(20),
        right: s(14),
        color: colors.text,
        fontSize: s(15),
        lineHeight: s(22),
        fontWeight: '500',
        includeFontPadding: false,
      }}>
        {subtitle}
      </Text>
    </>
  );
}
