"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const sendToServer = (res, data) => {
    res.write(JSON.stringify(data));
};
const server = http_1.default.createServer((req, res) => {
    var _a, _b;
    if (req.method !== 'GET') {
        res.end(JSON.stringify({
            message: 'Send me an GET request',
        }));
    }
    const route = (_a = req.url) === null || _a === void 0 ? void 0 : _a.split('?')[0];
    const params = (_b = req.url) === null || _b === void 0 ? void 0 : _b.split('?')[1].split('&');
    const paramsRecord = {};
    params === null || params === void 0 ? void 0 : params.forEach((kv) => {
        const splitData = kv.split('=');
        paramsRecord[splitData[0]] = splitData[1];
    });
    console.log(paramsRecord);
    const date = new Date(paramsRecord['iso']);
    if (route === '/api/parsetime') {
        sendToServer(res, {
            'hour': date.getHours(),
            'minute': date.getMinutes(),
            'second': date.getSeconds(),
        });
    }
    if (route === '/api/unixtime') {
        sendToServer(res, {
            'unixtime': Math.floor(date.getTime())
        });
    }
    res.end();
});
server.listen(process.argv[2]);
