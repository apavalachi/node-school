const fs = require('fs')
const path = require('path')

module.exports = function filteredLs(dir, ext, cb) {
    fs.readdir(dir, (err, list) => {
        if (err) {
            cb(err, null)
        } else {
            cb(null, list.filter(l => path.extname(l).endsWith(ext)))
        }
    })
}