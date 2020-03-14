'use strict';

let enhanceError = require('./enhanceError');

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param { string } message The error message.
 * @param { Object } config The config.
 * @param {null} [code] The error code (for example, 'ECONNABORTED').
 * @param { Object } [request] The request.
 * @param { Object } [response] The response.
 * @returns { Error } The create error.
 */
module.exports = function (message, config, code, request, response) {
    let error = new Error(message)
    return enhanceError(error, config, code, request, response)
}
