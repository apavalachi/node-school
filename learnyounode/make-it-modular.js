const filteredLs = require('./mymodule')

filteredLs(process.argv[2], process.argv[3], (err, files) => {
    if (err) {
        console.log(err)
    } else {
        files.forEach(f => console.log(f))
    }
})