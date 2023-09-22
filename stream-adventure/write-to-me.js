const { Writable } = require('node:stream')

class MyWritable extends Writable {
    _write(chunk, encoding, callback) {
        console.log(`writing: ${chunk}`)
        callback(null)
    }
}

const stream = new MyWritable()

process.stdin.pipe(stream)
