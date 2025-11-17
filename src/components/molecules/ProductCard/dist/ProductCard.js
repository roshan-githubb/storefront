"use client";
"use strict";
exports.__esModule = true;
exports.ProductCard = void 0;
var link_1 = require("next/link");
var icons_1 = require("@/icons");
var image_1 = require("next/image");
var atoms_1 = require("@/components/atoms");
// import { ShoppingCart } from 'lucide-react'
exports.ProductCard = function (_a) {
    return (React.createElement("div", { className: "w-full max-w-md mx-auto    flex flex-row md:flex-col gap-3" },
        React.createElement("div", { className: "w-[45%] md:w-full flex-shrink-0" },
            React.createElement(image_1["default"], { src: "/images/product/wireless-headphone.jpg", alt: "Product", width: 500, height: 500, className: "rounded-xl object-cover w-full h-full  md:max-h-64" })),
        React.createElement("div", { className: "w-[55%] md:w-full flex flex-col justify-between" },
            React.createElement("div", null,
                React.createElement(link_1["default"], { href: "/items/1", className: "block hover:underline" },
                    React.createElement("h2", { className: "text-[16px] md:text-lg text-black line-clamp-3" }, "Premium Wireless Headphones with Noise Cancellation | 42 Hour Battery Life")),
                React.createElement("div", { className: "text-sm flex items-center gap-1 mt-1" },
                    React.createElement("span", { className: "font-bold text-gray-700" }, "4.5"),
                    React.createElement(atoms_1.StarRating, { rate: 4.5, starSize: 10 }),
                    React.createElement("span", { className: "text-xs text-gray-500 ml-1" }, " (315 reviews)")),
                React.createElement("p", { className: "text-xs text-gray-400 mt-0.5" }, "4K+ bought last month"),
                React.createElement("div", { className: "flex items-center gap-3 mt-2" },
                    React.createElement("p", { className: "text-xl font-bold" },
                        React.createElement("span", { className: "text-sm" }, "NRs"),
                        " ",
                        React.createElement("span", { className: "font-extrabold" }, "2000")),
                    React.createElement("p", { className: "text-sm text-gray-500 line-through" }, "NRs 2500")),
                React.createElement("p", { className: "text-sm font-bold mt-1 flex items-center" },
                    React.createElement("span", { className: "bg-green-100 text-md text-[#008000] px-2 py-[2px] rounded" }, "Savings"),
                    React.createElement("span", { className: "text-gray-400 text-xs ml-2" }, "Buy one get one free")),
                React.createElement("span", { className: "text-md" }, "Buy one get one free"),
                React.createElement("p", { className: "text-md text-[#f80707] mt-1" }, "Only 3 left in stock \u2014 order soon"),
                React.createElement("p", { className: "text-xs text-gray-600 mt-1" },
                    "FREE delivery on ",
                    React.createElement("strong", null, "Sat, 27 Sept"),
                    " for members")),
            React.createElement("button", { className: "mt-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium" },
                React.createElement(icons_1.CartIcon, { size: 16, color: "#FFF" }),
                "Add to Cart"))));
};
