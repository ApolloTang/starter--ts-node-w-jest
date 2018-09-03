"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var colorUtils = require("./color-utils");
test('color-utils.js module exports a function hexToRgb', function () {
    expect(typeof colorUtils.hexToRgb).toBe('function');
});
test('color-utils.js module exports a function rgbToHex', function () {
    expect(typeof colorUtils.rgbToHex).toBe('function');
});
test('color-utils.js / rgbToHex(255, 0, 0) --> "ff0000"', function () {
    expect(colorUtils.rgbToHex(255, 0, 0)).toBe('ff0000');
});
test('color-utils.js / rgbToHex(255, 255, 255) --> "ffffff"', function () {
    expect(colorUtils.rgbToHex(255, 255, 255)).toBe('ffffff');
});
test('color-utils.js / hexToRgb("ff0000") -> {r: 255, g: 0, b: 0}', function () {
    expect(colorUtils.hexToRgb('ff0000')).toMatchObject({ r: 255, g: 0, b: 0 });
});
test('color-utils.js / hexToRgb("f00") -> {r: 255, g: 0, b: 0}', function () {
    expect(colorUtils.hexToRgb('f00')).toMatchObject({ r: 255, g: 0, b: 0 });
});
test('color.r, color.g and color.b properties should all be numbers', function () {
    expect(typeof index_1.color.r).toBe('number');
    expect(typeof index_1.color.g).toBe('number');
    expect(typeof index_1.color.b).toBe('number');
});
test('color.hex property should be a string', function () {
    expect(typeof index_1.color.hex).toBe('string');
});
test('r=255, g=255, b=255 --> color.hex.toLowerCase() should be "ffffff"', function () {
    var r = index_1.color.r, g = index_1.color.g, b = index_1.color.b;
    var _oldVals = { r: r, g: g, b: b };
    index_1.color.r = 255;
    index_1.color.g = 255;
    index_1.color.b = 255;
    expect(index_1.color.hex.toLowerCase()).toBe('ffffff');
    index_1.color.r = _oldVals.r;
    index_1.color.g = _oldVals.g;
    index_1.color.b = _oldVals.b;
});
test('r=255, g=0, b=0 --> color.hex.toLowerCase() should be "ff0000"', function () {
    var r = index_1.color.r, g = index_1.color.g, b = index_1.color.b;
    var _oldVals = { r: r, g: g, b: b };
    index_1.color.r = 255;
    index_1.color.g = 0;
    index_1.color.b = 0;
    expect(index_1.color.hex.toLowerCase()).toBe('ff0000');
    index_1.color.r = _oldVals.r;
    index_1.color.g = _oldVals.g;
    index_1.color.b = _oldVals.b;
});
test('xxx r=299, g=0, b=0 --> color.hex.toLowerCase() should be "ff0000"', function () {
    var r = index_1.color.r, g = index_1.color.g, b = index_1.color.b;
    var _oldVals = { r: r, g: g, b: b };
    index_1.color.r = 299;
    index_1.color.g = 0;
    index_1.color.b = 0;
    expect(index_1.color.hex.toLowerCase()).toBe('ff0000');
    index_1.color.r = _oldVals.r;
    index_1.color.g = _oldVals.g;
    index_1.color.b = _oldVals.b;
});
test('r=100, g=100, b=-30 --> color.hex.toLowerCase() should be "646400"', function () {
    var r = index_1.color.r, g = index_1.color.g, b = index_1.color.b;
    var _oldVals = { r: r, g: g, b: b };
    index_1.color.r = 100;
    index_1.color.g = 100;
    index_1.color.b = -30;
    expect(index_1.color.hex.toLowerCase()).toBe('646400');
    index_1.color.r = _oldVals.r;
    index_1.color.g = _oldVals.g;
    index_1.color.b = _oldVals.b;
});
test('hex=aa0000 --> colors {r: 170, g: 0, b: 0}', function () {
    var r = index_1.color.r, g = index_1.color.g, b = index_1.color.b;
    var _oldVals = { r: r, g: g, b: b };
    index_1.color.hex = 'aa0000';
    expect(index_1.color.r).toBe(170);
    expect(index_1.color.g).toBe(0);
    expect(index_1.color.b).toBe(0);
    index_1.color.r = _oldVals.r;
    index_1.color.g = _oldVals.g;
    index_1.color.b = _oldVals.b;
});
test('hex=aaee33 --> colors {r: 170, g: 238, b: 51}', function () {
    var r = index_1.color.r, g = index_1.color.g, b = index_1.color.b;
    var _oldVals = { r: r, g: g, b: b };
    index_1.color.hex = 'aaee33';
    expect(index_1.color.r).toBe(170);
    expect(index_1.color.g).toBe(238);
    expect(index_1.color.b).toBe(51);
    index_1.color.r = _oldVals.r;
    index_1.color.g = _oldVals.g;
    index_1.color.b = _oldVals.b;
});
test('hex=c49 --> colors {r: 204, g: 68, b: 153}', function () {
    var r = index_1.color.r, g = index_1.color.g, b = index_1.color.b;
    var _oldVals = { r: r, g: g, b: b };
    index_1.color.hex = 'c49';
    expect(index_1.color.r).toBe(204);
    expect(index_1.color.g).toBe(68);
    expect(index_1.color.b).toBe(153);
    index_1.color.r = _oldVals.r;
    index_1.color.g = _oldVals.g;
    index_1.color.b = _oldVals.b;
});
