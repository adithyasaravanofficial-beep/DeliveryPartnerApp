import React from 'react';
import {View, Text} from 'react-native';
import {useDesign} from '../theme';

// A simple example earnings card for Splash Screen 2.
export default function EarningsCard() {
  const {s} = useDesign();

  return (
    <View style={{position: 'absolute', left: s(75), right: s(67), top: s(360), height: s(171), backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#F6BCB0', borderRadius: s(10), padding: s(12)}}>
      <Text style={{fontSize: s(10), color: '#222222'}}>Today's Earnings</Text>
      <Text style={{fontSize: s(13), fontWeight: '600', color: '#222222', marginTop: s(3)}}>$ 500.62</Text>

      <View style={{height: 1, backgroundColor: '#EEEEEE', marginTop: s(8), marginBottom: s(6)}} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View><Text style={{fontSize: s(12), color: '#222222'}}>6</Text><Text style={{fontSize: s(9), color: '#AAAAAA'}}>Deliveries</Text></View>
        <View><Text style={{fontSize: s(12), color: '#222222'}}>23.4 mi</Text><Text style={{fontSize: s(9), color: '#AAAAAA'}}>Distance</Text></View>
        <View><Text style={{fontSize: s(12), color: '#222222'}}>$120</Text><Text style={{fontSize: s(9), color: '#AAAAAA'}}>Incentive</Text></View>
      </View>

      <View style={{marginTop: s(10), padding: s(8), backgroundColor: '#F8F8F8', borderRadius: s(7)}}>
        <Text style={{fontSize: s(10), color: '#222222'}}>Next Payout</Text>
        <Text style={{fontSize: s(13), fontWeight: '600', color: '#222222'}}>$ 600</Text>
        <Text style={{fontSize: s(9), color: '#222222'}}>on 26 Apr, 2025</Text>
      </View>
    </View>
  );
}
