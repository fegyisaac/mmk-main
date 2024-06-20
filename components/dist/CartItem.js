"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var link_1 = require("next/link");
var im_1 = require("react-icons/im");
var Price_1 = require("./Price");
var react_hot_toast_1 = require("react-hot-toast");
var react_redux_1 = require("react-redux");
var orebiSlice_1 = require("@/Redux/Slices/orebiSlice");
var CartItem = function (_a) {
    var item = _a.item;
    var dispatch = react_redux_1.useDispatch();
    return (react_1["default"].createElement("div", { className: "w-full grid grid-cols-6 mb-4 border py-2" },
        react_1["default"].createElement("div", { className: "flex col-span-5 md:col-span-3 items-center gap-5 ml-4" },
            react_1["default"].createElement(im_1.ImCross, { onClick: function () {
                    dispatch(orebiSlice_1.deleteProduct(item._id));
                    react_hot_toast_1["default"].success((item === null || item === void 0 ? void 0 : item.title.substring(0, 12)) + "... deleted from cart");
                }, className: "text-primeColor hover:text-red-500 cursor-pointer duration-300" }),
            react_1["default"].createElement(link_1["default"], { href: "/product/" + (item === null || item === void 0 ? void 0 : item._id), className: "w-[180px]" },
                react_1["default"].createElement(image_1["default"], { src: item === null || item === void 0 ? void 0 : item.img, alt: "product image", width: 40, height: 40, className: "w-full h-full object-contain", priority: true })),
            react_1["default"].createElement("h1", { className: "font-semibold flex-1" }, item === null || item === void 0 ? void 0 : item.title.substring(0, 50))),
        react_1["default"].createElement("div", { className: "col-span-5 md:col-span-3 flex items-center justify-between py-4 md:py-0 px-4 lg:px-0" },
            react_1["default"].createElement("p", { className: "flex w-1/3 items-center text-lg font-semibold" },
                react_1["default"].createElement(Price_1["default"], { amount: item === null || item === void 0 ? void 0 : item.price })),
            react_1["default"].createElement("div", { className: "flex w-1/3 items-center gap-6 text-lg" },
                react_1["default"].createElement("span", { onClick: function () {
                        dispatch(orebiSlice_1.decreaseQuantity({ _id: item === null || item === void 0 ? void 0 : item._id }));
                        react_hot_toast_1["default"].success("Product reduced successfully");
                    }, className: "w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-500" }, "-"),
                react_1["default"].createElement("p", null, item === null || item === void 0 ? void 0 : item.quantity),
                react_1["default"].createElement("span", { onClick: function () {
                        dispatch(orebiSlice_1.increaseQuantity({ _id: item === null || item === void 0 ? void 0 : item._id }));
                        react_hot_toast_1["default"].success("Product added successfully");
                    }, className: "w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-500" }, "+")),
            react_1["default"].createElement("div", { className: "w-1/3 flex items-center font-titleFont font-bold text-lg" },
                react_1["default"].createElement("p", null,
                    "NGN",
                    item.quantity * item.price))),
        react_1["default"].createElement(react_hot_toast_1.Toaster, { position: "bottom-right", toastOptions: {
                style: {
                    background: "#000",
                    color: "#fff"
                }
            } })));
};
exports["default"] = CartItem;
