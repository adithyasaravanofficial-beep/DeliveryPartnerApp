import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import GetStartedScreen from '../screens/GetStartedScreen';

const Stack = createNativeStackNavigator();

// Flow: Splash 1 (+ food logo popup) -> Onboarding (Splash 2, 3) -> Get Started (Splash 4 / 8)
export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: 'fade'}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
    </Stack.Navigator>
  );
}
