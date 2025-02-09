import { EventSubscriptionVendor } from "react-native";
export declare type BeaconRegion = {
    identifier: string;
    uuid: string;
    minor?: number;
    major?: number;
    proximity?: string;
    rssi?: number;
    distance?: number;
    accuracy?: number;
};
export declare type AuthorizationStatus = 'authorizedAlways' | 'authorizedWhenInUse' | 'denied' | 'notDetermined' | 'restricted';
declare type GetAuthorizationCallback = (status: AuthorizationStatus) => void;
export declare const PARSER_IBEACON: string;
export declare const PARSER_ESTIMOTE: string;
export declare const PARSER_ALTBEACON: string;
export declare const PARSER_EDDYSTONE_TLM: string;
export declare const PARSER_EDDYSTONE_UID: string;
export declare const PARSER_EDDYSTONE_URL: string;
export declare const transmissionSupport: string[];
export declare type Parser = string | number;
export interface BeaconsManagerIOS extends EventSubscriptionVendor {
    requestAlwaysAuthorization(): void;
    requestWhenInUseAuthorization(): void;
    allowsBackgroundLocationUpdates(allow: boolean): void;
    getAuthorizationStatus(cb: GetAuthorizationCallback): void;
    getMonitoredRegions(value?: any): void;
    startUpdatingLocation(): void;
    stopUpdatingLocation(): void;
    shouldDropEmptyRanges(drop: boolean): void;
    startMonitoringForRegion(region: BeaconRegion): void;
    startRangingBeaconsInRegion(region: BeaconRegion): void;
    stopMonitoringForRegion(region: BeaconRegion): void;
    stopRangingBeaconsInRegion(region: BeaconRegion): void;
}
export interface BeaconsManagerANDROID {
    setHardwareEqualityEnforced(flag: boolean): void;
    addParser(parser: Parser, resolve: () => any, reject: () => any): void;
    addParsersListToDetection(parsers: Parser[], resolve: () => any, reject: () => any): void;
    removeParser(parser: Parser, resolve: () => any, reject: () => any): void;
    removeParsersListToDetection(parsers: Parser[], resolve: () => any, reject: () => any): void;
    detectIBeacons: () => Promise<any>;
    addIBeaconsDetection: () => Promise<any>;
    removeIBeaconsDetection: () => Promise<any>;
    detectAltBeacons: () => Promise<any>;
    addAltBeaconsDetection: () => Promise<any>;
    removeAltBeaconsDetection: () => Promise<any>;
    detectEstimotes: () => Promise<any>;
    addEstimotesDetection: () => Promise<any>;
    removeEstimotesDetection: () => Promise<any>;
    detectEddystoneUID: () => Promise<any>;
    addEddystoneUIDDetection: () => Promise<any>;
    removeEddystoneUIDDetection: () => Promise<any>;
    detectEddystoneTLM: () => Promise<any>;
    addEddystoneTLMDetection: () => Promise<any>;
    removeEddystoneTLMDetection: () => Promise<any>;
    detectEddystoneURL: () => Promise<any>;
    addEddystoneURLDetection: () => Promise<any>;
    removeEddystoneURLDetection: () => Promise<any>;
    detectCustomBeaconLayout: () => Promise<any>;
    addCustomBeaconLayoutDetection: () => Promise<any>;
    removeCustomBeaconLayoutDetection: () => Promise<any>;
    setBackgroundScanPeriod: (period: number) => void;
    setBackgroundBetweenScanPeriod: (period: number) => void;
    setForegroundScanPeriod: (period: number) => void;
    setRssiFilter: (filterType: number, avgModifier: number) => void;
    getRangedRegions: (value?: any) => void;
    ARMA_RSSI_FILTER: string;
    RUNNING_AVG_RSSI_FILTER: string;
    getMonitoredRegions: (value?: any) => void;
    checkTransmissionSupported: (status: any) => any;
    startMonitoring(regionId: string, uuid: string, minor: number | undefined, major: number | undefined, resolve: () => any, reject: () => any): void;
    startRanging(regionId: string, uuid: string | undefined, resolve: () => any, reject: () => any): void;
    stopMonitoring(regionId: string, uuid: string, minor: number | undefined, major: number | undefined, resolve: () => any, reject: () => any): void;
    stopRanging(regionId: string, uuid: string | undefined, resolve: () => any, reject: () => any): void;
}
export {};
