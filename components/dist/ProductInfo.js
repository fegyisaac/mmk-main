"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var Price_1 = require("./Price");
var orebiSlice_1 = require("@/Redux/Slices/orebiSlice");
var react_hot_toast_1 = require("react-hot-toast");
var react_redux_1 = require("react-redux");
var ProductInfo = function (_a) {
    var product = _a.product;
    var dispatch = react_redux_1.useDispatch();
    return (react_1["default"].createElement("div", { className: "w-[93%] my-10 mx-auto" },
        react_1["default"].createElement("div", { className: "flex flex-col lg:flex-row justify-between item-center gap-4 h-full -mt-5 xl:-mt-8 bg-gray-100 p-4" },
            react_1["default"].createElement("div", { className: "h-full md:mb-10" },
                react_1["default"].createElement(image_1["default"], { src: product === null || product === void 0 ? void 0 : product.img, width: 600, height: 600, alt: "text", priority: true, className: "w-full h-full" })),
            react_1["default"].createElement("div", { className: "flex-1" },
                react_1["default"].createElement("div", { className: "w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center" },
                    react_1["default"].createElement("div", { className: "flex flex-col gap-5" },
                        react_1["default"].createElement("h2", { className: "text-4xl font-semibold" }, product === null || product === void 0 ? void 0 : product.title),
                        react_1["default"].createElement("div", { className: "flex items-center gap-4" },
                            react_1["default"].createElement("p", { className: "text-lg font-normal text-gray-500 line-through" },
                                react_1["default"].createElement(Price_1["default"], { amount: product === null || product === void 0 ? void 0 : product.prevPrice })),
                            react_1["default"].createElement(Price_1["default"], { amount: product === null || product === void 0 ? void 0 : product.price, className: "text-lg font-bold" }),
                            react_1["default"].createElement("p", { className: "text-sm" },
                                "Saved",
                                " ",
                                react_1["default"].createElement(Price_1["default"], { className: "bg-green-700 text-white px-2 rounded-md", amount: (product === null || product === void 0 ? void 0 : product.prevPrice) - (product === null || product === void 0 ? void 0 : product.price) }))),
                        react_1["default"].createElement("p", { className: "text-sm tracking-wide text-gray-600" }, product === null || product === void 0 ? void 0 : product.description),
                        react_1["default"].createElement("button", { onClick: function () {
                                dispatch(orebiSlice_1.addToCart(product));
                                react_hot_toast_1["default"].success((product === null || product === void 0 ? void 0 : product.title.substring(0, 12)) + "... added to cart");
                            }, className: "w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg rounded-md" }, "Add to Cart")))))));
};
exports["default"] = ProductInfo;
