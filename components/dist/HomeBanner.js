"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var productOfTheYear_webp_1 = require("@/public/assets/productOfTheYear.webp");
var link_1 = require("next/link");
var HomeBanner = function () {
    return (React.createElement("div", { className: "relative" },
        React.createElement(image_1["default"], { src: productOfTheYear_webp_1["default"], alt: "banner image", className: "w-full h-full" }),
        React.createElement("div", { className: "absolute right-[200px] top-1/2 transform -translate-y-1/2 w-[600px]" },
            React.createElement("h1", { className: "font-bold text-[32px] pb-4 leading-10" }, "TRENDSETTING WARDROBE ADDITIONS"),
            React.createElement("p", { className: "text-xl pb-3" }, "Explore our newest collection and elevate your wardrobe with our premium quality garments. Limited time offer! Grab these newest collection at a discounted price"),
            React.createElement(link_1["default"], { href: "/shop" },
                React.createElement("button", { className: "bg-black px-[5px] py-2 text-white rounded-md" }, "Shop Now")))));
};
exports["default"] = HomeBanner;
