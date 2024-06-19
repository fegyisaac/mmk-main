"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var logoBlack_png_1 = require("@/public/assets/logoBlack.png");
var hi_1 = require("react-icons/hi");
var navigation_1 = require("next/navigation");
var Navbar = function () {
    var pathname = navigation_1.usePathname();
    var navBarList = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "Shop",
            link: "/shop"
        },
        {
            title: "Cart",
            link: "/cart"
        },
    ];
    return (React.createElement("div", { className: "w-full h-20 bg-white border-b-[1px] border-b-gray-400 sticky top-0 z-50" },
        React.createElement("nav", { className: "h-full max-w-screen-xl mx-auto px-4 xl:px-0 flex items-center justify-between gap-2" },
            React.createElement(link_1["default"], { href: "/" },
                React.createElement(image_1["default"], { src: logoBlack_png_1["default"], alt: "logo", className: "w-20" })),
            React.createElement("div", { className: "hidden md:inline-flex items-center gap-2" }, navBarList.map(function (item) { return (React.createElement(link_1["default"], { href: item === null || item === void 0 ? void 0 : item.link, key: item === null || item === void 0 ? void 0 : item.link, className: "flex hover:font-medium w-20 h-6 justify-center items-center px-12 text-gray-600 hover:underline underline-offset-4 decoration-[1px] hover:text-gray-950 md:border-r-[2px] border-r-gray-400 duration-200 last:border-r-0 " + (pathname === (item === null || item === void 0 ? void 0 : item.link) && "text-gray-950 underline") }, item === null || item === void 0 ? void 0 : item.title)); })),
            React.createElement(hi_1.HiMenuAlt2, { className: "inline-flex md:hidden cursor-pointer w-8 h-6" }))));
};
exports["default"] = Navbar;
