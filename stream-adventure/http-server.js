const http = require('http')
const through2 = require('through2')

const server = http.createServer((req, res) => {
    req.pipe(through2(function (buf, _, next) {
        this.push(buf.toString().toUpperCase())
        next()
    })).pipe(res)

    req.on('end', () => {
        res.end()
    })
})

server.listen(process.argv[2])