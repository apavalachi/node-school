'use strict'
const http = require('http')
const bl = require('bl')

let messages = []
let responses = 0;

for (let i = 2; i < process.argv.length; i++) {
    http.get(process.argv[i], (res) => {
        res.pipe(bl((err, data) => {
            messages[i - 2] = data.toString()
            responses++

            if (responses === 3) {
                messages.forEach((m) => console.log(m))
            }
        }))
    })
}
