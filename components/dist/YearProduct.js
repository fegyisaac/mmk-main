"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Container_1 = require("./Container");
var image_1 = require("next/image");
var link_1 = require("next/link");
var productOfTheYear_webp_1 = require("@/public/assets/productOfTheYear.webp");
var YearProduct = function () {
    return (react_1["default"].createElement("div", { className: "w-full bg-[#f3f3f3]" },
        react_1["default"].createElement(Container_1["default"], { className: "md:bg-transparent relative py-0 mb-10" },
            react_1["default"].createElement(image_1["default"], { src: productOfTheYear_webp_1["default"], alt: "product", className: "w-full h-full object-cover hidden md:inline-block" }),
            react_1["default"].createElement("div", { className: "w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center" },
                react_1["default"].createElement("h1", { className: "text-3xl font-semibold text-primeColor" }, "Prouct of the year"),
                react_1["default"].createElement("p", { className: "text-base font-normal text-primeColor max-w-[600px] mr-4" }, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, veritatis. Alias quia aut accusantium doloremque ad, iure odio inventore dolorem?"),
                react_1["default"].createElement(link_1["default"], { href: "/shop", className: "bg-primeColor text-white text-lg w-[185px] h-[50px] hover:bg-black duration-300 font-bold flex items-center justify-center rounded-md" }, "Shop Now")))));
};
exports["default"] = YearProduct;
