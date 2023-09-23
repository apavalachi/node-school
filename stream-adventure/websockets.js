const WebSocket = require('ws')

const ws = new WebSocket('ws://localhost:8099')
const stream = WebSocket.createWebSocketStream(ws)

stream.write('hello\nbeep bop boop\n')
stream.pipe(process.stdout)
