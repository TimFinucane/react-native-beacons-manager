import { BeaconRegion, AuthorizationStatus } from './types';
declare const BeaconsEventEmitter: import("react-native").EventEmitter;
/**
 * request always authorization (mandatory when ranging beacons but energy drain)
 * IMPORTANT: To be effective your info.plist file should have 'Privacy - Location Always Usage Description' key defined
 */
declare function requestAlwaysAuthorization(): void;
/**
 * request when app in use authorization (bare minimum for beacons)
 * IMPORTANT: To be effective your info.plist file should have 'Privacy - Location When In Use Usage Description'
 * key defined (hopefully 'react-native init' should have set it for you)
 */
declare function requestWhenInUseAuthorization(): void;
/**
 * set background location updates to ensure monitoring when app is killed or in background mode
 *
 * @param {boolean} [allow=false] allow or disallow background modes
 */
declare function allowsBackgroundLocationUpdates(allow?: boolean): void;
/**
 * get authorization status
 *
 * @returns {() => AuthorizationStatus} instant callback (not async)
 */
declare function getAuthorizationStatus(callback: (status: AuthorizationStatus) => void): void;
/**
 * get monitored regions
 *
 * @returns {Promise<Array<BeaconRegion>>} promise resolve to an array of monitored regions
 */
declare function getMonitoredRegions(): Promise<BeaconRegion[]>;
/**
 * call is needed for monitoring beacons and gets the initial position of the device.
 *
 */
declare function startUpdatingLocation(): void;
/**
 * This method should be called when you don't need to receive location-based information and want to save battery power.
 *
 */
declare function stopUpdatingLocation(): void;
declare function shouldDropEmptyRanges(drop: boolean): void;
/**
 * start monitoring for a region
 *
 * @param {BeaconRegion} region region to monitor (identifier + uuid -> major and minor are optional)
 * @returns {Promise<any>} promise resolves to void or error
 */
declare function startMonitoringForRegion(region: BeaconRegion): Promise<void>;
/**
 * stop monitoring for a region
 *
 * @param {BeaconRegion} region region (identifier + uuid -> major and minor are optional)
 * @returns {Promise<any>} promise resolves to void or error
 */
declare function stopMonitoringForRegion(region: BeaconRegion): Promise<void | Error>;
/**
 * start ranging for a region
 *
 * @param {BeaconRegion} region region to scan (identifier + uuid -> major and minor are optional)
 * @returns {Promise<any>} promise resolves to void or error
 */
declare function startRangingBeaconsInRegion(region: BeaconRegion): Promise<void | Error>;
/**
 * stop ranging for a region
 *
 * @param {BeaconRegion} region region (identifier + uuid -> major and minor are optional)
 * @returns {Promise<any>} promise: resolves to void when successful
 */
declare function stopRangingBeaconsInRegion(region: BeaconRegion): Promise<void | Error>;
export { BeaconsEventEmitter, requestAlwaysAuthorization, requestWhenInUseAuthorization, allowsBackgroundLocationUpdates, getAuthorizationStatus, getMonitoredRegions, startUpdatingLocation, stopUpdatingLocation, shouldDropEmptyRanges, startMonitoringForRegion, startRangingBeaconsInRegion, stopMonitoringForRegion, stopRangingBeaconsInRegion, };
