"use strict";
exports.__esModule = true;
var color_utils_1 = require("./color-utils");
exports.color = {
    r: 255,
    g: 0,
    b: 0,
    get hex() {
        return color_utils_1.rgbToHex(this.r, this.g, this.b);
    },
    set hex(hex) {
        var _a;
        var r = (_a = color_utils_1.hexToRgb(hex), _a.r), g = _a.g, b = _a.b;
        this.r = r;
        this.g = g;
        this.b = b;
    }
};
