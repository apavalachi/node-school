const _ = require('lodash')

const worker = function(words) {
    return _.chain(words)
        .map((word) => word + 'chained')
        .map((word) => word.toUpperCase())
        .sortBy()
        .value()
}

module.exports = worker;