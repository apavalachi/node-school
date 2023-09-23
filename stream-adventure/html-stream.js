const trumpet = require('trumpet')
const through2 = require('through2')


const tr = trumpet()


const loudStream = tr.select('.loud').createStream()

loudStream.pipe(through2(function (buf, _, next) {
    this.push(buf.toString().toUpperCase())
    next()
})).pipe(loudStream)

process.stdin.pipe(tr).pipe(process.stdout)



