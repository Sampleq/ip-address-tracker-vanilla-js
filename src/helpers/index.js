export { validateIp } from './validate-ip';
export { addTileLayer } from './addTileLayer.js';
export { getAddress } from './getAdderss.js';
export { addOffset } from './add-offset.js';

/**
 * Bug with Parcel:
 *
 * dev - OK
 * build - Uncaught ReferenceError: parcelRequire is not defined
 *
 * fix - in output src.####.js add 'var' before `parcelRequire=....`
 *       to get 'var parcelRequire =....' and build will works Ok
 *
 */
