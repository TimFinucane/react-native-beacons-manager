import { BeaconRegion, Parser, PARSER_IBEACON, PARSER_ESTIMOTE, PARSER_ALTBEACON, PARSER_EDDYSTONE_TLM, PARSER_EDDYSTONE_UID, PARSER_EDDYSTONE_URL } from './types';
declare const BeaconsEventEmitter: import("react-native").DeviceEventEmitterStatic;
declare const ARMA_RSSI_FILTER: string;
declare const RUNNING_AVG_RSSI_FILTER: string;
declare function setHardwareEqualityEnforced(flag: boolean): void;
/**
 * set beacon layout for iBeacon
 *
 */
declare function detectIBeacons(): Promise<void | Error>;
/**
 * same as detectIBeacons (intoduced in v1.1.0)
 * adds iBeacon parser to detect them
 *
 */
declare function addIBeaconsDetection(): Promise<void | Error>;
/**
 * removes iBeacon parser to stop detecting them
 *
 */
declare function removeIBeaconsDetection(): Promise<void | Error>;
/**
 * set beacon layout for alBeacon
 *
 */
declare function detectAltBeacons(): Promise<void | Error>;
declare function addAltBeaconsDetection(): Promise<void | Error>;
declare function removeAltBeaconsDetection(): Promise<void | Error>;
/**
 * set beacon layout for estimote
 *
 */
declare function detectEstimotes(): Promise<void | Error>;
declare function addEstimotesDetection(): Promise<void | Error>;
declare function removeEstimotesDetection(): Promise<void | Error>;
/**
 * set beacon layout for eddystone UID
 *
 */
declare function detectEddystoneUID(): Promise<void>;
/**
 * same as detectEddystoneUID (intoduced in v1.1.0)
 * adds EddystoneUID parser to detect them
 *
 */
declare function addEddystoneUIDDetection(): Promise<void | Error>;
/**
 * removes EddystoneUID parser to stop detecting them
 *
 */
declare function removeEddystoneUIDDetection(): Promise<void | Error>;
/**
 * set beacon layout for eddystone URL
 *
 */
declare function detectEddystoneURL(): Promise<void | Error>;
declare function addEddystoneURLDetection(): Promise<void | Error>;
declare function removeEddystoneURLDetection(): Promise<void | Error>;
/**
 * set beacon layout for eddystone TLM
 *
 */
declare function detectEddystoneTLM(): Promise<any>;
declare function addEddystoneTLMDetection(): Promise<any>;
declare function removeEddystoneTLMDetection(): Promise<void | Error>;
/**
 * set beacon for custom layout
 *
 */
declare function detectCustomBeaconLayout(parser: number): Promise<void | Error>;
declare function addCustomBeaconLayoutDetection(parser: number): Promise<void | Error>;
declare function removeCustomBeaconLayoutDetection(parser: number): Promise<void | Error>;
declare function addParsersListToDetection(parsers: Parser[]): Promise<void | Error>;
declare function removeParsersListToDetection(parsers: Parser[]): Promise<void | Error>;
declare function setBackgroundScanPeriod(period: number): void;
declare function setBackgroundBetweenScanPeriod(period: number): void;
declare function setForegroundScanPeriod(period: number): void;
declare function setRssiFilter(filterType: number, avgModifier: number): void;
declare function getRangedRegions(): Promise<void>;
/**
 * get monitored regions
 *
 * @returns {Promise<Array<BeaconRegion>>} promise resolve to an array of monitored regions
 */
declare function getMonitoredRegions(): Promise<BeaconRegion[]>;
/**
 * check if beacon support transmission
 *
 * @returns {Promise<number>} promise resolve to an integer
 */
declare function checkTransmissionSupported(): Promise<number>;
/**
 * start monitoring for a region
 *
 * @param {Object: BeaconRegion} region region to monitor (identifier + uuid -> major and minor are optional)
 * @returns {Promise<any>} promise resolves to void or error
 */
declare function startMonitoringForRegion(region: BeaconRegion): Promise<void | Error>;
/**
 * stops monittorings for a region
 *
 * @param {BeaconRegion} region region (see BeaconRegion type)
 * @returns {Promise<any>} promise resolves to void or error
 */
declare function stopMonitoringForRegion(region: BeaconRegion): Promise<void | Error>;
/**
 * start ranging a region (with optional UUID)
 *
 * @param {String | BeaconRegion} regionId if string or region: BeaconRegion object
 * @param {String} [beaconsUUID] optional UUID
 * @returns {Promise<any>} promise resolves to void or error
 */
declare function startRangingBeaconsInRegion(region: BeaconRegion | string, beaconsUUID?: string): Promise<void | Error>;
/**
 * Stops the range scan for beacons
 *
 * @param {String | BeaconRegion} regionId if string or region: BeaconRegion object
 * @param {string} beaconsUUID optional UUID within the specified region
 * @returns {Promise<void | Error>} resolves to void when successful
 */
declare function stopRangingBeaconsInRegion(region: BeaconRegion | string, beaconsUUID?: string): Promise<void | Error>;
export { PARSER_IBEACON, PARSER_ESTIMOTE, PARSER_ALTBEACON, PARSER_EDDYSTONE_TLM, PARSER_EDDYSTONE_UID, PARSER_EDDYSTONE_URL, BeaconsEventEmitter, setHardwareEqualityEnforced, detectIBeacons, addIBeaconsDetection, removeIBeaconsDetection, detectAltBeacons, addAltBeaconsDetection, removeAltBeaconsDetection, detectEstimotes, addEstimotesDetection, removeEstimotesDetection, detectEddystoneUID, addEddystoneUIDDetection, removeEddystoneUIDDetection, detectEddystoneTLM, addEddystoneTLMDetection, removeEddystoneTLMDetection, detectEddystoneURL, addEddystoneURLDetection, removeEddystoneURLDetection, detectCustomBeaconLayout, addCustomBeaconLayoutDetection, removeCustomBeaconLayoutDetection, addParsersListToDetection, removeParsersListToDetection, setBackgroundScanPeriod, setBackgroundBetweenScanPeriod, setForegroundScanPeriod, setRssiFilter, checkTransmissionSupported, getRangedRegions, ARMA_RSSI_FILTER, RUNNING_AVG_RSSI_FILTER, getMonitoredRegions, startMonitoringForRegion, startRangingBeaconsInRegion, stopMonitoringForRegion, stopRangingBeaconsInRegion, };
