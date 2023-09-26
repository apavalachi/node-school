const _ = require('lodash')

const worker = function(items) {
    const response = {
        'hot': [],
        'warm': [],
    }

    _.forEach(items, (vals, key) => {
        if (_.every(vals, (t) => t > 19)) {
            response.hot.push(key)
        } else if (_.some(vals, (t) => t > 19)) {
            response.warm.push(key)
        }
    })


    return response;
}

module.exports = worker
