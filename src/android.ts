import { NativeModules, NativeEventEmitter } from 'react-native';

import {
  BeaconRegion,
  BeaconsManagerANDROID,
  Parser,
  PARSER_IBEACON,
  PARSER_ESTIMOTE,
  PARSER_ALTBEACON,
  PARSER_EDDYSTONE_TLM,
  PARSER_EDDYSTONE_UID,
  PARSER_EDDYSTONE_URL,
  transmissionSupport,
} from './types';

// #region instanciation and constants
const BeaconsManager: BeaconsManagerANDROID = NativeModules.BeaconsAndroidModule;
const BeaconsEventEmitter = new NativeEventEmitter();

const ARMA_RSSI_FILTER = BeaconsManager.ARMA_RSSI_FILTER;
const RUNNING_AVG_RSSI_FILTER = BeaconsManager.RUNNING_AVG_RSSI_FILTER;
// #endregion

function setHardwareEqualityEnforced(flag: boolean) {
  BeaconsManager.setHardwareEqualityEnforced(flag);
}

// #region iBeacon
/**
 * set beacon layout for iBeacon
 *
 */
function detectIBeacons() {
  return new Promise<void | Error>((resolve, reject) => BeaconsManager.addParser(PARSER_IBEACON, resolve, reject));
}

/**
 * same as detectIBeacons (intoduced in v1.1.0)
 * adds iBeacon parser to detect them
 *
 */
function addIBeaconsDetection() {
  return new Promise<void | Error>((resolve, reject) => BeaconsManager.addParser(PARSER_IBEACON, resolve, reject));
}

/**
 * removes iBeacon parser to stop detecting them
 *
 */
function removeIBeaconsDetection() {
  return new Promise<void | Error>((resolve, reject) => BeaconsManager.removeParser(PARSER_IBEACON, resolve, reject));
}
// #enregion

// #region altBeacon
/**
 * set beacon layout for alBeacon
 *
 */
function detectAltBeacons() {
  return new Promise<void | Error>((resolve, reject) => BeaconsManager.addParser(PARSER_ALTBEACON, resolve, reject));
}

function addAltBeaconsDetection() {
  return new Promise<void | Error>((resolve, reject) => BeaconsManager.addParser(PARSER_ALTBEACON, resolve, reject));
}

function removeAltBeaconsDetection() {
  return new Promise<void | Error>((resolve, reject) => BeaconsManager.removeParser(PARSER_ALTBEACON, resolve, reject));
}
// #endregion

// #region estimote
/**
 * set beacon layout for estimote
 *
 */
function detectEstimotes() {
  return new Promise<void | Error>((resolve, reject) => BeaconsManager.addParser(PARSER_ESTIMOTE, resolve, reject));
}

function addEstimotesDetection() {
  return new Promise<void | Error>((resolve, reject) => BeaconsManager.addParser(PARSER_ESTIMOTE, resolve, reject));
}

function removeEstimotesDetection() {
  return new Promise<void | Error>((resolve, reject) => BeaconsManager.removeParser(PARSER_ESTIMOTE, resolve, reject));
}
// #endregion

// #region eddystone UID
/**
 * set beacon layout for eddystone UID
 *
 */
function detectEddystoneUID() {
  return new Promise<void>((resolve, reject) => BeaconsManager.addParser(PARSER_EDDYSTONE_UID, resolve, reject));
}

/**
 * same as detectEddystoneUID (intoduced in v1.1.0)
 * adds EddystoneUID parser to detect them
 *
 */
function addEddystoneUIDDetection() {
  return new Promise<void | Error>((resolve, reject) => BeaconsManager.addParser(PARSER_EDDYSTONE_UID, resolve, reject));
}

/**
 * removes EddystoneUID parser to stop detecting them
 *
 */
function removeEddystoneUIDDetection() {
  return new Promise<void | Error>((resolve, reject) => BeaconsManager.removeParser(PARSER_EDDYSTONE_UID, resolve, reject));
}
// #endregion

// #region eddystone URL
/**
 * set beacon layout for eddystone URL
 *
 */
function detectEddystoneURL() {
  return new Promise<void | Error>((resolve, reject) => BeaconsManager.addParser(PARSER_EDDYSTONE_URL, resolve, reject));
}

function addEddystoneURLDetection() {
  return new Promise<void | Error>((resolve, reject) => BeaconsManager.addParser(PARSER_EDDYSTONE_URL, resolve, reject));
}

function removeEddystoneURLDetection() {
  return new Promise<void | Error>((resolve, reject) => BeaconsManager.removeParser(PARSER_EDDYSTONE_URL, resolve, reject));
}
// #endregion

// #region eddystone TLM
/**
 * set beacon layout for eddystone TLM
 *
 */
function detectEddystoneTLM(): Promise<any> {
  return new Promise<void | Error>((resolve, reject) => BeaconsManager.addParser(PARSER_EDDYSTONE_TLM, resolve, reject));
}

function addEddystoneTLMDetection(): Promise<any> {
  return new Promise<void | Error>((resolve, reject) => BeaconsManager.addParser(PARSER_EDDYSTONE_TLM, resolve, reject));
}

function removeEddystoneTLMDetection() {
  return new Promise<void | Error>((resolve, reject) => BeaconsManager.removeParser(PARSER_EDDYSTONE_TLM, resolve, reject));
}
// #endregion

// #region custom beacon (set your parser)
/**
 * set beacon for custom layout
 *
 */
function detectCustomBeaconLayout(parser: number) {
  return new Promise<void | Error>((resolve, reject) => BeaconsManager.addParser(parser, resolve, reject));
}

// Why is this exactly the same as the above method?
function addCustomBeaconLayoutDetection(parser: number) {
  return new Promise<void | Error>((resolve, reject) => BeaconsManager.addParser(parser, resolve, reject));
}

function removeCustomBeaconLayoutDetection(parser: number) {
  return new Promise<void | Error>((resolve, reject) => BeaconsManager.removeParser(parser, resolve, reject));
}
// #endregion

// #region add remove multiple parsers in a row
function addParsersListToDetection(parsers: Parser[]) {
  return new Promise<void | Error>((resolve, reject) => BeaconsManager.addParsersListToDetection(parsers, resolve, reject));
}

function removeParsersListToDetection(parsers: Parser[]) {
  return new Promise<void | Error>((resolve, reject) => BeaconsManager.removeParsersListToDetection(parsers, resolve, reject));
}
// #endregion

// TODO: Comment this section
function setBackgroundScanPeriod(period: number) {
  BeaconsManager.setBackgroundScanPeriod(period);
}

function setBackgroundBetweenScanPeriod(period: number) {
  BeaconsManager.setBackgroundBetweenScanPeriod(period);
}

function setForegroundScanPeriod(period: number) {
  BeaconsManager.setForegroundScanPeriod(period);
}

function setRssiFilter(filterType: number, avgModifier: number) {
  BeaconsManager.setRssiFilter(filterType, avgModifier);
}

function getRangedRegions() {
  return new Promise<void>(resolve => BeaconsManager.getRangedRegions(resolve));
}

/**
 * get monitored regions
 *
 * @returns {Promise<Array<BeaconRegion>>} promise resolve to an array of monitored regions
 */
function getMonitoredRegions(): Promise<BeaconRegion[]> {
  // TODO: Types are wrong for BeaconsManager.getMonitoredRegions
  return new Promise<BeaconRegion[]>(resolve => BeaconsManager.getMonitoredRegions(resolve));
}

/**
 * check if beacon support transmission
 *
 * @returns {Promise<number>} promise resolve to an integer
 */
function checkTransmissionSupported(): Promise<number> {
  return new Promise((resolve) => {
    BeaconsManager.checkTransmissionSupported((status: any) => // TODO: Figure these two out
      resolve(transmissionSupport[status] as any)
    );
  });
}

/**
 * start monitoring for a region
 *
 * @param {Object: BeaconRegion} region region to monitor (identifier + uuid -> major and minor are optional)
 * @returns {Promise<any>} promise resolves to void or error
 */
function startMonitoringForRegion(region: BeaconRegion) {
  return new Promise<void | Error>((resolve, reject) =>
    // NOTE: major and minor are optional values: if user don't assign them we have to send a null value (not undefined):
    BeaconsManager.startMonitoring(
      region.identifier,
      region.uuid,
      region.minor ? region.minor : -1,
      region.major ? region.major : -1,
      resolve,
      reject
    ));
}

/**
 * stops monittorings for a region
 *
 * @param {BeaconRegion} region region (see BeaconRegion type)
 * @returns {Promise<any>} promise resolves to void or error
 */
function stopMonitoringForRegion(region: BeaconRegion) {
  return new Promise<void | Error>((resolve, reject) =>
    BeaconsManager.stopMonitoring(
      region.identifier,
      region.uuid,
      region.minor ? region.minor : -1, // TODO: This will likely result in a bug when major/minor are 0
      region.major ? region.major : -1,
      resolve,
      reject
    ));
}

/**
 * start ranging a region (with optional UUID)
 *
 * @param {String | BeaconRegion} regionId if string or region: BeaconRegion object
 * @param {String} [beaconsUUID] optional UUID
 * @returns {Promise<any>} promise resolves to void or error
 */
function startRangingBeaconsInRegion(region: BeaconRegion | string, beaconsUUID?: string) {
  if (typeof region === 'object')
    return new Promise<void | Error>((resolve, reject) => BeaconsManager.startRanging(region.identifier, region.uuid, resolve, reject));
  else
    return new Promise<void | Error>((resolve, reject) => BeaconsManager.startRanging(region, beaconsUUID, resolve, reject));
}

/**
 * Stops the range scan for beacons
 *
 * @param {String | BeaconRegion} regionId if string or region: BeaconRegion object
 * @param {string} beaconsUUID optional UUID within the specified region
 * @returns {Promise<void | Error>} resolves to void when successful
 */
function stopRangingBeaconsInRegion(region: BeaconRegion | string, beaconsUUID?: string) {
  if (typeof region === 'object')
    return new Promise<void | Error>((resolve, reject) => BeaconsManager.stopRanging(region.identifier, region.uuid, resolve, reject));
  else
    return new Promise<void | Error>((resolve, reject) => BeaconsManager.stopRanging(region, beaconsUUID, resolve, reject));
}

export {
  // parsers constants
  PARSER_IBEACON,
  PARSER_ESTIMOTE,
  PARSER_ALTBEACON,
  PARSER_EDDYSTONE_TLM,
  PARSER_EDDYSTONE_UID,
  PARSER_EDDYSTONE_URL,

  BeaconsEventEmitter,
  setHardwareEqualityEnforced,
  // iBeacons:
  detectIBeacons,
  addIBeaconsDetection,
  removeIBeaconsDetection,
  // alt beacons:
  detectAltBeacons,
  addAltBeaconsDetection,
  removeAltBeaconsDetection,
  // Estimotes beacon:
  detectEstimotes,
  addEstimotesDetection,
  removeEstimotesDetection,
  // Eddystone UID beacons:
  detectEddystoneUID,
  addEddystoneUIDDetection,
  removeEddystoneUIDDetection,
  // Eddystone TLM beacons:
  detectEddystoneTLM,
  addEddystoneTLMDetection,
  removeEddystoneTLMDetection,
  // Eddystone URL beacons:
  detectEddystoneURL,
  addEddystoneURLDetection,
  removeEddystoneURLDetection,
  // custom layout beacons (NOTE: create 'valid UUID' with websites like, for instance, this one: https://openuuid.net):
  detectCustomBeaconLayout,
  addCustomBeaconLayoutDetection,
  removeCustomBeaconLayoutDetection,

  addParsersListToDetection,
  removeParsersListToDetection,

  setBackgroundScanPeriod,
  setBackgroundBetweenScanPeriod,
  setForegroundScanPeriod,
  setRssiFilter,
  checkTransmissionSupported,
  getRangedRegions,
  ARMA_RSSI_FILTER,
  RUNNING_AVG_RSSI_FILTER,

  getMonitoredRegions,

  // common with iOS:
  startMonitoringForRegion,
  startRangingBeaconsInRegion,
  stopMonitoringForRegion,
  stopRangingBeaconsInRegion,
};
