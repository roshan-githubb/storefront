"use client";
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.StarRating = void 0;
var react_1 = require("react");
var StarIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 20 : _b, _c = _a.fill, fill = _c === void 0 ? "#FA6308" : _c, _d = _a.stroke, stroke = _d === void 0 ? "#FA6308" : _d;
    return (react_1["default"].createElement("svg", { width: size, height: size, viewBox: "0 0 20 20", fill: fill, stroke: stroke, strokeWidth: stroke ? 1.5 : 0, xmlns: "http://www.w3.org/2000/svg" },
        react_1["default"].createElement("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.137 3.49a1 1 0 00.95.69h3.665c.969 0 1.371 1.24.588 1.81l-2.965 2.16a1 1 0 00-.364 1.118l1.137 3.49c.3.921-.755 1.688-1.54 1.118l-2.965-2.16a1 1 0 00-1.176 0l-2.965 2.16c-.784.57-1.838-.197-1.54-1.118l1.137-3.49a1 1 0 00-.364-1.118L2.708 9.917c-.783-.57-.38-1.81.588-1.81h3.665a1 1 0 00.95-.69l1.137-3.49z" })));
};
exports.StarRating = function (_a) {
    var rate = _a.rate, _b = _a.starSize, starSize = _b === void 0 ? 20 : _b;
    var starColor = "#FA6308";
    return (react_1["default"].createElement("div", { className: "flex gap-0.5" }, __spreadArrays(Array(5)).map(function (_, i) {
        var fillPercent = rate - i >= 1 ? 100 : rate - i > 0 ? (rate - i) * 100 : 0;
        return (react_1["default"].createElement("div", { key: i, className: "relative w-[20px] h-[20px] overflow-hidden", style: { width: starSize, height: starSize } },
            react_1["default"].createElement(StarIcon, { size: starSize, fill: "transparent", stroke: starColor }),
            fillPercent > 0 && (react_1["default"].createElement("div", { className: "absolute top-0 left-0 overflow-hidden", style: { width: fillPercent + "%" } },
                react_1["default"].createElement(StarIcon, { size: starSize, fill: starColor, stroke: starColor })))));
    })));
};
