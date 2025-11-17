"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.Input = void 0;
var utils_1 = require("@/lib/utils");
var icons_1 = require("@/icons");
var react_1 = require("react");
var icons_2 = require("@medusajs/icons");
function Input(_a) {
    var label = _a.label, icon = _a.icon, clearable = _a.clearable, className = _a.className, error = _a.error, changeValue = _a.changeValue, props = __rest(_a, ["label", "icon", "clearable", "className", "error", "changeValue"]);
    var _b = react_1.useState(false), showPassword = _b[0], setShowPassword = _b[1];
    var _c = react_1.useState(props.type), inputType = _c[0], setInputType = _c[1];
    var paddingY = "";
    if (icon)
        paddingY += "pl-[46px] ";
    if (clearable)
        paddingY += "pr-[38px]";
    react_1.useEffect(function () {
        if (props.type === "password" && showPassword) {
            setInputType("text");
        }
        if (props.type === "password" && !showPassword) {
            setInputType("password");
        }
    }, [props.type, showPassword]);
    var changeHandler = function (value) {
        if (changeValue)
            changeValue(value);
    };
    var clearHandler = function () {
        if (changeValue)
            changeValue("");
    };
    return (React.createElement("label", { className: " w-full label-md" },
        label,
        React.createElement("div", { className: "relative mt-2" },
            icon && (React.createElement("span", { className: "absolute top-0 left-[16px] h-full flex items-center" }, icon)),
            React.createElement("input", __assign({ className: utils_1.cn("w-full h-[38px] px-[16px] py-[12px] border rounded-md bg-component-secondary focus:border-primary focus:outline-none focus:ring-0", error && "border-negative focus:border-negative", props.disabled && "bg-disabled cursor-not-allowed", paddingY, className), value: props.value, onChange: function (e) { return changeHandler(e.target.value); } }, props, { type: props.type === "password" ? inputType : props.type })),
            clearable && props.value && (React.createElement("span", { className: "absolute h-full flex items-center top-0 right-[16px] cursor-pointer", onClick: clearHandler },
                React.createElement(icons_1.CloseIcon, null))),
            props.type === "password" && (React.createElement("button", { type: "button", onClick: function () { return setShowPassword(!showPassword); }, className: "text-ui-fg-subtle px-4 focus:outline-none transition-all duration-150 outline-none focus:text-ui-fg-base absolute right-0 top-4" }, showPassword ? React.createElement(icons_2.EyeMini, null) : React.createElement(icons_2.EyeSlashMini, null))))));
}
exports.Input = Input;
