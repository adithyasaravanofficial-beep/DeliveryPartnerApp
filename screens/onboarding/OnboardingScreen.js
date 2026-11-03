import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import EarningsSlide from './EarningsSlide';
import DeliverSlide from './DeliverSlide';
import PagerDots from '../../components/PagerDots';
import {colors, useDesign} from '../../theme';

// Splash Screens 2 and 3. Swipe left or right to change the screen.
const slides = [
  {id: 'earnings', Component: EarningsSlide},
  {id: 'delivery', Component: DeliverSlide},
];

export default function OnboardingScreen({navigation}) {
  const {s, width, height} = useDesign();
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextScreen = () => navigation.replace('GetStarted');

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={(event) => {
          const page = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentSlide(page);
        }}
        renderItem={({item}) => <item.Component width={width} height={height} />}
      />

      {/* Bottom white area with page dots and Skip */}
      <View style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: s(96), backgroundColor: '#FFFFFF', borderTopLeftRadius: s(10), borderTopRightRadius: s(10)}}>
        <View style={{position: 'absolute', top: s(43), left: 0, right: 0, alignItems: 'center'}}>
          <PagerDots count={slides.length} index={currentSlide} />
        </View>
        <TouchableOpacity onPress={goToNextScreen} style={{position: 'absolute', right: s(22), top: s(40)}}>
          <Text style={{color: colors.skip, fontSize: s(14)}}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
