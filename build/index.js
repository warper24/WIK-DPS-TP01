"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
try {
    app.get('/ping', (req, res) => {
        res.send(req.headers);
    });
    app.get('*', (req, res) => {
        res.send('404');
    });
}
catch (_a) {
    app.get('*', (req, res) => {
        res.send('500');
    });
}
app.listen(process.env.PING_LISTEN_PORT, () => {
    console.log('The application is listening on port' + process.env.PING_LISTEN_PORT + '!');
});
