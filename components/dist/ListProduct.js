"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var image_1 = require("next/image");
var bs_1 = require("react-icons/bs");
var md_1 = require("react-icons/md");
var ai_1 = require("react-icons/ai");
var ListProduct = function (_a) {
    var product = _a.product, bg = _a.bg;
    return (React.createElement("div", { className: "w-full relative group flex items-center border-[1px] hover:shadow-lg duration-200 shadow-gray-500 rounded-md overflow-hidden group" },
        React.createElement("div", { className: "max-w-80 max-h-80 flex" },
            React.createElement("div", { className: "w-full h-80 flex items-center justify-center " + (bg ? "bg-[" + bg + "]" : "bg-white") },
                React.createElement(link_1["default"], { href: {
                        pathname: "/product"
                    } },
                    React.createElement(image_1["default"], { className: "w-72 h-72 object-contain", src: product.img, width: 700, height: 700, alt: "demo image" }))),
            (product === null || product === void 0 ? void 0 : product.isnew) && (React.createElement("div", { className: "absolute top-2 right-2 z-50" },
                React.createElement("p", { className: "bg-primeColor px-4 py-1 text-white flex justify-center items-center text-sm font-semibold hover:bg-black duration-300 cursor-pointer rounded-md" }, "New")))),
        React.createElement("div", { className: "py-6 flex flex-col gap-5 px-4" },
            React.createElement("div", { className: "flex items-center justify-between" },
                React.createElement("h2", { className: "text-lg text-primeColor font-bold" }, product === null || product === void 0 ? void 0 : product.title.substring(0, 60))),
            React.createElement("div", { className: "flex items-center gap-2" },
                React.createElement("p", { className: "text-[#767676] text-xs line-through" },
                    "$", product === null || product === void 0 ? void 0 :
                    product.rowprice),
                React.createElement("p", { className: "font-semibold" },
                    "$", product === null || product === void 0 ? void 0 :
                    product.price)),
            React.createElement("p", { className: "text-sm max-w-2xl" }, product === null || product === void 0 ? void 0 : product.description),
            React.createElement("div", { className: "flex items-center justify-between" },
                React.createElement("p", { className: "text-[#767676] text-[14px]" },
                    "a product by",
                    " ",
                    React.createElement("span", { className: "font-semibold text-primeColor" }, product === null || product === void 0 ? void 0 : product.brand)),
                React.createElement("div", { className: "flex items-center gap-1" },
                    React.createElement(md_1.MdOutlineStarPurple500, { className: "text-lg text-yellow-500" }),
                    " ",
                    React.createElement("span", { className: "font-medium text-sm" }, product === null || product === void 0 ? void 0 : product.ratings))),
            React.createElement("div", { className: "flex items-center gap-5 duration-300" },
                React.createElement("button", { className: "bg-gray-800 text-gray-200 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:bg-gray-950 hover:text-white duration-200" },
                    React.createElement("span", { className: "text-sm mb-1" },
                        React.createElement(ai_1.AiOutlineShopping, null)),
                    " ",
                    "Add to bag"),
                React.createElement(link_1["default"], { href: {
                        pathname: "/product"
                    }, className: "bg-gray-800 text-gray-200 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:bg-gray-950 hover:text-white duration-200" },
                    React.createElement("span", { className: "text-xs mb-1" },
                        React.createElement(bs_1.BsArrowsFullscreen, null)),
                    " ",
                    "Quick view")))));
};
exports["default"] = ListProduct;
