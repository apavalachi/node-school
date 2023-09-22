const { Readable } = require('node:stream')

class MyReadable extends Readable {
    constructor(data) {
        super();
        this.data = data
    }

    _read(buff_size) {
        this.push(this.data.slice(0, buff_size))
        this.data = this.data.substring(buff_size, this.data.length)
    }
}

const myStream = new MyReadable(process.argv[2])

myStream.pipe(process.stdout)
