const http = require('http')
const bl = require('bl')

// http.get(process.argv[2], (res) => {
//     let message = ""
    
//     res.setEncoding('utf-8')
//     res.on('data', (chunk) => message += chunk)
//     res.on('end', () => {
//         console.log(message.length)
//         console.log(message)
//     })
//     res.on('error', console.error)
// })
// .on('error', console.error)

http.get(process.argv[2], (res) => {
    res.pipe(bl((err, data) => {
        if (err) {
            return console.error(err)
        }

        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})