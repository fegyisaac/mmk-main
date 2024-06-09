'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Price_1 = require("./Price");
var ProductInfo = function (_a) {
    var product = _a.product;
    return (react_1["default"].createElement("div", { className: "flex flex-col gap-5" },
        react_1["default"].createElement("h2", { className: "text-4xl font-semibold" }, product === null || product === void 0 ? void 0 : product.title),
        react_1["default"].createElement("div", { className: "flex items-center gap-4" },
            react_1["default"].createElement("p", { className: "text-lg font-normal text-gray-500 line-through" },
                react_1["default"].createElement(Price_1["default"], { amount: product === null || product === void 0 ? void 0 : product.rowprice })),
            react_1["default"].createElement(Price_1["default"], { amount: product === null || product === void 0 ? void 0 : product.price, className: "text-lg font-bold" }),
            react_1["default"].createElement("p", { className: "text-sm" },
                "you saved",
                " ",
                react_1["default"].createElement(Price_1["default"], { className: "bg-green-700 text-white px-2 rounded-md", amount: (product === null || product === void 0 ? void 0 : product.rowprice) - (product === null || product === void 0 ? void 0 : product.price) }),
                " ",
                "from this item")),
        react_1["default"].createElement("p", { className: "text-sm tracking-wide text-gray-600" }, product === null || product === void 0 ? void 0 : product.description),
        react_1["default"].createElement("p", { className: "text-sm text-gray-500" }, "Be the first to leave a review."),
        react_1["default"].createElement("button", { className: "w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg rounded-md" }, "Add to Cart"),
        react_1["default"].createElement("p", { className: "font-normal text-sm" },
            react_1["default"].createElement("span", { className: "text-base font-medium" }, "Categories:"),
            " Spring collection, Streetwear, Women Tags: featured SKU: N/A")));
};
exports["default"] = ProductInfo;
