import React, {useEffect} from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import LogoMark from '../components/LogoMark';

export default function PopupScreen({onContinue}) {
  const {width} = useWindowDimensions();
  const cardWidth = width * 0.634;

  useEffect(() => {
    const timer = setTimeout(onContinue, 1500);
    return () => clearTimeout(timer);
  }, [onContinue]);

  return (
    <View style={styles.background}>
      <StatusBar hidden />
      <View style={[styles.card, {width: cardWidth, height: cardWidth}]}>
        <LogoMark size={cardWidth * 0.66} />
        <Text style={styles.title}>Food Delivery Partner</Text>
        <View style={styles.dots}>
          <View style={styles.activeDot} />
          <View style={styles.inactiveDot} />
          <View style={styles.inactiveDot} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FF512B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderRadius: 32,
    backgroundColor: 'rgba(255,255,255,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 4,
    fontSize: 17,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    marginTop: 21,
  },
  activeDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  inactiveDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,0.35)',
  },
});
