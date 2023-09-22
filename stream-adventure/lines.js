const split2 = require('split2')
const through2 = require('through2')

let line_switch = false

process.stdin
    .pipe(split2())
    .pipe(through2(function (buff, _, next) {
        const line = buff.toString() + '\n'

        this.push(line_switch ? line.toUpperCase() : line.toLowerCase())

        line_switch = !line_switch

        next()
    }))
    .pipe(process.stdout)