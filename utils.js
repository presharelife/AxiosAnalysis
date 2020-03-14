/**
 *  Determine if a value is an Object
 *
 *  @param { Object } val the value to test
 *  @param { boolean } True if value is an Object, otherwise false
 */
function isObject(val) {
    return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Function
 *
 * @param { Function } val the value to test
 * @param { boolean } True if is a Function, otherwise false
 */
function isFunction(val) {
    return toString.call(val) === '[object Function]'
}

/**
 * Determine if a value is a Stream
 *
 * @param { Object } val The value to test
 * @return { boolean } True if value is a Stream, otherwise false
 */
function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value id an ArrayBuffer
 *
 * @param { Object } val The value to test
 * @return { boolean } True if value is a ArrayBuffer
 */
function isArrayBuffer(val) {
    return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param { Object } val The value to test
 * @return { boolean } True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams
}

/**
 *
 */

module.exports = {
    isStream,
    isObject,
    isFunction,
    isArrayBuffer,
    isURLSearchParams
}