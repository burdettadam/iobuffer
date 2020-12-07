"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TextEncodingShim = require('text-encoding-shim');
var TextEncoder = TextEncodingShim.TextEncoder;
var TextDecoder = TextEncodingShim.TextDecoder;
const decoder = new TextDecoder('utf-8');
function decode(bytes) {
    return decoder.decode(bytes);
}
exports.decode = decode;
const encoder = new TextEncoder();
function encode(str) {
    return encoder.encode(str);
}
exports.encode = encode;
//# sourceMappingURL=utf8.js.map
