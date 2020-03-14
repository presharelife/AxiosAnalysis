import pkg from '../package'
import * as url from "node/querystring";
let utils = require('/utils')
let createError = require('../core/createError')

module.exports = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
     var timer;
     var resolve = function resolve(value) {
         clearTimeout(timer);
         rejectPromise(value)
     };
     let reject = function reject(value) {
         clearTimeout(time)
         rejectPromise(value)
     };
     let data = config.data;
     let headers = config.headers;

     // Set User-Agent (required by some servers)
     // Only set header if it hasn`t been set in config
     // see https://github.com/axios/axios/issues/69
     if (!headers['User-Agent'] && !headers['user-agent']) {
         headers['User-Agent'] = 'axios/' + pkg.version
     }
     if (data && !utils.isStream(data)) {
         if (Buffer.isBuffer(data)) {
             // Nothing to do...
         } else if (utils.isArrayBuffer(data)) {
             data = new Buffer(data, 'utf-8');
         } else {
             return reject(createError(
                 'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
                 config
             ));
         }
         // Add Content-Length header if data exists
         headers['Content-Length'] = data.length;
     }

     // HTTP basic authentication
     let auth = undefined;
     if (config.auth) {
         let username = config.auth.username || ''
         let password = config.auth.password || ''
         auth = username + ':' + password
     }

     // Parse url (node api)
      let parse = url.parse(config.url); // 获取url的所有信息，包括后面的参数
      let protocol = parse.protocol || 'https:';

      if (!auth && parse.auth) {
          let urlAuth = parse.auth.split(':');
          let urlUsername = urlAuth[0] || '';
          let urlPassword = urlAuth[1] || '';
          auth = urlUsername + ':' + urlPassword
      }

      if (auth) { // 删除授权
          delete headers.Authorization;
      }

      let isHttps = protocol === 'https:';
      let agent = isHttps ? config.httpsAgent : config.httpAgent;

      // let options = {
      //     path: ,
      //     method: config.method,
      //     headers: config.headers,
      //     agent: agent,
      //     auth: auth
      // }
  })
}