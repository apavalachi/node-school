const _ = require('lodash')

const worker = function (items) {
    return _.sortBy(items, (item) => -item.quantity)
}

module.exports = worker;