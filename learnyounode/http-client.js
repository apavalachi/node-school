const http = require('http');

http.get(process.argv[2], (res) => {
    res.setEncoding('utf-8')
    res.on('data', (chunk) => {
        console.log(chunk)
    })
    res.on('error', console.error)
})
.on('error', console.error)