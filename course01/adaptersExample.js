let settle = require('../core/settle')

// adapters(适配器)下的模块是处理分派请求和在接收到响应后解决返回 promise 模块.
module.exports = function myAdapter(config) {
    // At this point:
    //  - config has been merged with defaults
    //  - request transformers have already run
    //  - request interceptors have already run

    // Make the request using config provided
    // Upon response settle the Promise
    return new Promise((resolve, reject) => {
        const response = {
            data: responseData,
            status: request.status,
            statustext: request.statusText,
            headers: responseHeaders,
            config: config,
            request: request,
        };
        settle(resolve, reject, response)
    })
}