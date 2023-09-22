const path = require('path')
const fs = require('fs')

fs.readdir(process.argv[2], (err, list) => {
    if (err) {
        console.log(err)
    } else {
        list.forEach((file) => {
            if (path.extname(file).includes(process.argv[3])) {
                console.log(file)
            }
        })
    }
})
