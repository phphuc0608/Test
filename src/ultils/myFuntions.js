import {Platform, ToastAndroid} from 'react-native';

export function showNotify(text) {
  if (Platform.OS === 'ios') {
    alert(text);
  } else {
    ToastAndroid.show(text, ToastAndroid.SHORT);
  }
}
