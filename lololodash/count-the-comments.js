const _ = require('lodash')

const worker = function(comments) {
    return _.chain(comments)
        .groupBy('username')
        .map((val, key) => {
            return {
                username: key,
                comment_count: _.size(val)
            }
        })
        .sortBy('comment_count')
        .reverse()
        .value()
}

module.exports = worker