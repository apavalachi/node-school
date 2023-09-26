const _ = require('lodash')

const worker = function (collection) {
    return _.filter(collection, { active: true })
}

module.exports = worker;