import http from 'http';

const sendToServer = (res: http.ServerResponse, data: Record<string, string | number>) => {
    res.write(JSON.stringify(data))
}

const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(JSON.stringify({
            message: 'Send me an GET request',
        }))
    }

    const route = req.url?.split('?')[0]
    const params = req.url?.split('?')[1].split('&')

    const paramsRecord: Record<string, string> = {}

    params?.forEach((kv) => {
        const splitData = kv.split('=');

        paramsRecord[splitData[0]] = splitData[1];
    })

    console.log(paramsRecord)

    const date = new Date(paramsRecord['iso'])

    if (route === '/api/parsetime') {
        sendToServer(res, {
            'hour': date.getHours(),
            'minute': date.getMinutes(),
            'second': date.getSeconds(),
        })
    }

    if (route === '/api/unixtime') {
        sendToServer(res, {
            'unixtime': date.getTime()
        })
    }

    res.end()
})

server.listen(process.argv[2])
