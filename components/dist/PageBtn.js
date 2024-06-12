'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var md_1 = require("react-icons/md");
var link_1 = require("next/link");
var ri_1 = require("react-icons/ri");
var react_redux_1 = require("react-redux");
var PageBtn = function () {
    var productData = react_redux_1.useSelector(function (state) { return state.orebi; }).productData;
    return (react_1["default"].createElement("div", { className: "fixed top-60 right-2 z-20 flex flex-col gap-2" },
        react_1["default"].createElement(link_1["default"], { href: '/profile', className: "bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer" },
            react_1["default"].createElement("div", { className: "flex justify-center items-center" },
                react_1["default"].createElement(md_1.MdSwitchAccount, { className: "text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" }),
                react_1["default"].createElement(md_1.MdSwitchAccount, { className: "text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" })),
            react_1["default"].createElement("p", { className: "text-xs font-semibold" }, "Profile")),
        react_1["default"].createElement(link_1["default"], { href: '/cart', className: "bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative" },
            react_1["default"].createElement("div", { className: "flex justify-center items-center" },
                react_1["default"].createElement(ri_1.RiShoppingCart2Fill, { className: "text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" }),
                react_1["default"].createElement(ri_1.RiShoppingCart2Fill, { className: "text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" })),
            react_1["default"].createElement("p", { className: "text-xs font-semibold" }, "Buy Now"),
            react_1["default"].createElement("p", { className: "absolute top-1 right-2 bg-primeColor text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold" }, productData && (productData === null || productData === void 0 ? void 0 : productData.length)))));
};
exports["default"] = PageBtn;
