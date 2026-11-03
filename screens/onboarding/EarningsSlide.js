import React from 'react';
import {View} from 'react-native';
import HeadingBlock from '../../components/HeadingBlock';
import EarningsCard from '../../components/EarningsCard';
import {colors} from '../../theme';

// Splash 2
export default function EarningsSlide({width, height}) {
  return (
    <View style={{width, height, backgroundColor: colors.cream}}>
      <HeadingBlock title={'Your\nearnings,\nyour way.'} subtitle={'Track your orders, view earnings,\nand get paid on time.'}
        subtitleTop={259} subtitleWeight="500" />
      <EarningsCard />
    </View>
  );
}
