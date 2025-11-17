"use client";
"use strict";
exports.__esModule = true;
exports.Navbar = void 0;
var navigation_1 = require("next/navigation");
var molecules_1 = require("@/components/molecules");
var image_1 = require("next/image");
exports.Navbar = function (_a) {
    var categories = _a.categories;
    var pathname = navigation_1.usePathname();
    // Check if URL ends with /recommended
    var showCart = pathname === null || pathname === void 0 ? void 0 : pathname.includes("/recommended");
    return (React.createElement("div", { className: "flex items-center bg-myBlue px-4 md:px-12 py-4 border-b w-full" },
        React.createElement("button", { className: "mt-2 mr-2 flex items-center justify-center rounded hover:bg-gray-200" },
            React.createElement(image_1["default"], { src: "/images/icons/basil_arrow-up-solid.png", alt: "Back", width: 24, height: 24 })),
        React.createElement("div", { className: "flex-1" },
            React.createElement(molecules_1.NavbarSearch, null)),
        showCart && (React.createElement("button", { className: "ml-3" },
            React.createElement(image_1["default"], { src: "/images/icons/cart.png" // put your PNG here
                , alt: "Cart", width: 24, height: 24 })))));
};
