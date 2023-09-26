const _ = require('lodash')

const worker = function (items) {
    return _.chain(items)
        .groupBy('article')
        .map((item, key) => {
            return {
                article: parseInt(key),
                total_orders: _.reduce(item, (result, value) => result += value.quantity, 0)
            }
        })
        .sortBy('total_orders')
        .reverse()
}

module.exports = worker