const fs = require('fs')

const fileBuffer = fs.readFileSync(process.argv[2])

const strFile = fileBuffer.toString()

console.log(strFile.split('\n').length - 1)
