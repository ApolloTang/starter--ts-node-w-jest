"use strict";
exports.__esModule = true;
;
function hexToRgb(hex) {
    if (hex.length === 3) {
        var hr = hex[0];
        var hg = hex[1];
        var hb = hex[2];
        var hexLengthOf6 = "" + hr + hr + hg + hg + hb + hb;
        return hexToRgb(hexLengthOf6);
    }
    var _a = [0, 2, 4]
        .map(function (offset) { return hex.substring(offset, offset + 2); })
        .map(function (hexCh) { return parseInt(hexCh, 16); }), r = _a[0], g = _a[1], b = _a[2];
    var out = { r: r, g: g, b: b };
    return out;
}
exports.hexToRgb = hexToRgb;
function rgbToHex(r, g, b) {
    // tslint:disable-next-line:prefer-template
    var out = [r, g, b]
        // .map( decCh => Math.max(0, Math.min(decCh, 255)) )
        .map(function (decCh) { return Math.min(Math.max(0, decCh), 255); })
        .map(function (decCh) { return decCh.toString(16); })
        .map(function (hexCh) { return hexCh.length === 1 ? "0" + hexCh : "" + hexCh; })
        .join('');
    return out;
}
exports.rgbToHex = rgbToHex;
