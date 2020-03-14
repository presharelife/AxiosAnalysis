'use strict';

let createError = require('./createError')

/**
 * Resolve or reject a promise base on response status.
 *
 * @param { Function } resolve A function that resolves the promise.
 * @param { Function } reject A function that rejects the promise
 * @param { Object } response The response
 */
module.exports = function settle(resolve, reject, response) {
    let validateStatus = response.config.validateStatus;
    // Note: status is not exposed by XDomainRequest
    if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
    } else {
        reject(createError(
            'Request failed with status code:' + response.status,
            response.config,
            null,
            response.request,
            response
        ));
    }
};
