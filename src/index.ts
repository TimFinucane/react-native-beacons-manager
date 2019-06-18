import { Platform } from 'react-native';

type IOSModule = typeof import('./ios');
type AndroidModule = typeof import('./android');

const RNiBeaconsModule = Platform.select<() => (IOSModule | AndroidModule)>({
  ios: () => (require('./ios') as IOSModule),
  android: () => (require('./android') as AndroidModule),
})();

export default RNiBeaconsModule;
