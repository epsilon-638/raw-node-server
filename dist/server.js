"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    var _a;
    if ((_a = req.url) === null || _a === void 0 ? void 0 : _a.startsWith('/api')) {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('status', 200);
        res.end(JSON.stringify({
            message: "This is an API",
        }));
    }
    else {
        res.setHeader('status', 404);
        res.end(JSON.stringify({}));
    }
});
exports.default = server;
