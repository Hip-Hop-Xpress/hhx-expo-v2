import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { Alert, Platform, Linking } from 'react-native';
import API from './api';
import { ENDPOINTS } from './endpoints';

// Taken directly from here:
// https://docs.expo.io/push-notifications/overview/
// https://docs.expo.io/push-notifications/push-notifications-setup/
const registerForPushNotificationsAsync = async () => {
  let token;
  if (Constants.isDevice) {
    // Get user's notifications permissions
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;
    
    // If the user hasn't set a status yet, ask if they'd like to set notifs on
    if (existingStatus !== 'granted') {
      const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Ask user to enable notifications if they disable
    if (finalStatus !== 'granted') {
      Alert.alert(
        'Warning',
        'You won\'t receive reminders about the Hip Hop Xpress if you don\'t enable notifications. ' +
        'Please consider enabling notifications in your settings!',
        [
          { text: 'Enable notifications', onPress: () => 
            Platform.OS === 'ios' 
              ? Linking.openURL('app-settings:') 
              : Linking.openSettings()
          },
          { text: 'Cancel' },
        ])
      return;
    }

    // Get the token and send it to our API
    token = (await Notifications.getExpoPushTokenAsync()).data;
    
    API.post(ENDPOINTS.tokens, { pushToken: token })
      .then(res => console.log('Successfully sent push token!', res))
      .catch(e => console.error('Sending push token failed', e));

  } else {
    Alert.alert('Warning', 'NOTE: This device will not receive push notifications as it is not a physical device.');
  }

  if (Platform.OS === 'android') {
    Notifications.createChannelAndroidAsync('default', {
      name: 'default',
      sound: true,
      priority: Notifications.AndroidImportance.MAX,
      vibrate: [0, 250, 250, 250],
    });
  }

  return token;

};

export default registerForPushNotificationsAsync;