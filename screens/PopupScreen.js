import React from 'react';
import {View, Text, Image, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../colors';

// The "FOOD delivery app" popup that shows BEFORE the first splash screen.
// "Modal" is React Native's built-in popup. Tapping "Continue" calls onContinue,
// which tells App.js to show Splash 1.
export default function PopupScreen({onContinue}) {
  return (
    <View style={styles.background}>
      <Modal transparent={true} animationType="fade" visible={true} statusBarTranslucent={true}>
        {/* dark see-through layer behind the popup */}
        <View style={styles.overlay}>
          {/* the white popup box */}
          <View style={styles.card}>
            <View style={styles.logoCircle}>
              <Image source={require('../assets/logo.png')} style={styles.logo} />
            </View>

            <Text style={styles.title}>FOOD delivery app</Text>
            <Text style={styles.message}>Good Food. Greater Opportunities.</Text>

            <TouchableOpacity style={styles.button} onPress={onContinue}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 300,
    paddingVertical: 28,
    paddingHorizontal: 24,
    borderRadius: 20,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  logoCircle: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 38,
    height: 44,
  },
  title: {
    marginTop: 18,
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
  },
  message: {
    marginTop: 8,
    fontSize: 15,
    textAlign: 'center',
    color: '#555555',
  },
  button: {
    marginTop: 24,
    alignSelf: 'stretch',
    height: 44,
    borderRadius: 8,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
  },
});
