import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {colors, useDesign} from '../theme';

// Reusable button for the Get Started and Login actions.
export default function PrimaryButton({title, onPress, variant = 'solid', chevron, style}) {
  const {s} = useDesign();
  const isOutline = variant === 'outline';

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[{
        height: s(40),
        borderRadius: s(8),
        backgroundColor: isOutline ? '#FFFFFF' : colors.primary,
        borderWidth: isOutline ? 1 : 0,
        borderColor: colors.softBorder,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }, style]}>
      <Text style={{fontSize: s(13), color: isOutline ? colors.text : '#FFFFFF'}}>
        {title}
      </Text>
      {chevron ? <Text style={{fontSize: s(22), color: '#FFFFFF', marginLeft: s(12)}}>›</Text> : null}
    </TouchableOpacity>
  );
}
