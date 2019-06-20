import { Platform } from 'react-native';
const RNiBeaconsModule = Platform.select({
    ios: () => require('./ios'),
    android: () => require('./android'),
})();
export default RNiBeaconsModule;
