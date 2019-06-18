import { Platform } from 'react-native';

const RNiBeaconsModule = Platform.select({
  ios: () => require('./lib/ios'),
  android: () => require('./lib/android'),
})();

export default RNiBeaconsModule;
