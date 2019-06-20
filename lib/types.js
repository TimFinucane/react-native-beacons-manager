// android only
export const PARSER_IBEACON = 'm:0-3=4c000215,i:4-19,i:20-21,i:22-23,p:24-24';
export const PARSER_ESTIMOTE = 'm:2-3=0215,i:4-19,i:20-21,i:22-23,p:24-24';
export const PARSER_ALTBEACON = 'm:2-3=beac,i:4-19,i:20-21,i:22-23,p:24-24,d:25-25';
export const PARSER_EDDYSTONE_TLM = 'x,s:0-1=feaa,m:2-2=20,d:3-3,d:4-5,d:6-7,d:8-11,d:12-15';
export const PARSER_EDDYSTONE_UID = 's:0-1=feaa,m:2-2=00,p:3-3:-41,i:4-13,i:14-19';
export const PARSER_EDDYSTONE_URL = 's:0-1=feaa,m:2-2=10,p:3-3:-41,i:4-20v';
// android only
export const transmissionSupport = [
    'SUPPORTED',
    'NOT_SUPPORTED_MIN_SDK',
    'NOT_SUPPORTED_BLE',
    'DEPRECATED_NOT_SUPPORTED_MULTIPLE_ADVERTISEMENTS',
    'NOT_SUPPORTED_CANNOT_GET_ADVERTISER',
    'NOT_SUPPORTED_CANNOT_GET_ADVERTISER_MULTIPLE_ADVERTISEMENTS',
];
