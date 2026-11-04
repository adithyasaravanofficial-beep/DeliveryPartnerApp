import { Platform, PermissionsAndroid } from 'react-native';

/**
 * Requests location and notification permissions when the app opens.
 */
export async function requestAppPermissions() {
  try {
    if (Platform.OS === 'android') {
      const permissionsToRequest = [
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ];

      // POST_NOTIFICATIONS is required for Android 13+ (API level 33+)
      if (Platform.Version >= 33 && PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS) {
        permissionsToRequest.push(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
      }

      const validPermissions = permissionsToRequest.filter(Boolean);

      if (validPermissions.length > 0) {
        const granted = await PermissionsAndroid.requestMultiple(validPermissions);
        console.log('App permissions granted (Android):', granted);
        return granted;
      }
    } else if (Platform.OS === 'ios') {
      try {
        const { request, PERMISSIONS, requestNotifications } = require('react-native-permissions');

        let locationResult = null;
        if (PERMISSIONS?.IOS?.LOCATION_WHEN_IN_USE) {
          locationResult = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        }

        const notificationResult = await requestNotifications(['alert', 'sound', 'badge']);

        console.log('App permissions granted (iOS):', {
          location: locationResult,
          notification: notificationResult,
        });

        return { location: locationResult, notification: notificationResult };
      } catch (iosErr) {
        console.warn('iOS permissions request error:', iosErr);
      }
    }
  } catch (error) {
    console.warn('Error requesting permissions on app launch:', error);
  }
}
