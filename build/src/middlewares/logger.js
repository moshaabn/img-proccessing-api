"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (req, res, next) {
    console.log(res.ip);
    next();
};
exports.default = logger;
