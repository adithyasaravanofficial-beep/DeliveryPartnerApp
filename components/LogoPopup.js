import React, {useEffect, useRef} from 'react';
import {Modal, View, Text, Animated, StyleSheet} from 'react-native';
import FoodAppLogo from './FoodAppLogo';
import {colors} from '../theme';
import {config} from '../config';

// Popup window with the food app logo, shown on top of Splash 1 at app start.
export default function LogoPopup({visible}) {
  const scale = useRef(new Animated.Value(0.6)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.spring(scale, {toValue: 1, friction: 6, useNativeDriver: true}),
        Animated.timing(opacity, {toValue: 1, duration: 300, useNativeDriver: true}),
      ]).start();
    }
  }, [visible, scale, opacity]);

  return (
    <Modal visible={visible} transparent animationType="fade" statusBarTranslucent>
      <View style={styles.backdrop}>
        <Animated.View style={[styles.card, {opacity, transform: [{scale}]}]}>
          <FoodAppLogo size={110} />
          <Text style={styles.name}>{config.appName}</Text>
          <Text style={styles.sub}>Delicious food, delivered</Text>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', alignItems: 'center', justifyContent: 'center'},
  card: {backgroundColor: '#fff', borderRadius: 28, paddingVertical: 32, paddingHorizontal: 40, alignItems: 'center',
    elevation: 12, shadowColor: '#000', shadowOpacity: 0.25, shadowRadius: 20, shadowOffset: {width: 0, height: 10}},
  name: {fontSize: 26, fontWeight: '800', color: colors.text, marginTop: 16},
  sub: {fontSize: 13, color: colors.muted, marginTop: 4},
});
