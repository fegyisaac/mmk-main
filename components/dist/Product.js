"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var image_1 = require("next/image");
var bs_1 = require("react-icons/bs");
var md_1 = require("react-icons/md");
var ai_1 = require("react-icons/ai");
var react_redux_1 = require("react-redux");
var react_hot_toast_1 = require("react-hot-toast");
var orebiSlice_1 = require("@/Redux/Slices/orebiSlice");
var Product = function (_a) {
    var product = _a.product, bg = _a.bg;
    var dispatch = react_redux_1.useDispatch();
    return (React.createElement("div", { className: "border-black border group hover:shadow-lg duration-200 shadow-gray-500 rounded-md overflow-hidden group" },
        React.createElement("div", { className: "bg-white overflow-hidden" },
            React.createElement("div", { className: "relative " + bg },
                React.createElement(link_1["default"], { href: "product/" + product._id },
                    React.createElement(image_1["default"], { src: product.img, alt: "product image", width: 700, height: 700, className: "" })),
                React.createElement("div", { className: "absolute bottom-0 flex items-center gap-3 justify-center w-full translate-y-[110%] group-hover:-translate-y-2 transition-transform duration-300" },
                    React.createElement("button", { onClick: function () {
                            dispatch(orebiSlice_1.addToCart(product));
                            react_hot_toast_1["default"].success((product === null || product === void 0 ? void 0 : product.title.substring(0, 12)) + "... added to cart");
                        }, className: "bg-gray-800 text-gray-200 px-[5px] py-1 text-[10px] rounded-full flex items-center gap-1 hover:bg-gray-950 hover:text-white duration-200" },
                        React.createElement("span", null,
                            React.createElement(ai_1.AiOutlineShopping, null)),
                        "Add to bag"),
                    React.createElement(link_1["default"], { href: "product/" + product._id, className: "bg-gray-800 text-gray-200 px-[5px] py-1 text-[10px] rounded-full flex items-center gap-1 hover:bg-gray-950 hover:text-white duration-200" },
                        React.createElement("span", null,
                            React.createElement(bs_1.BsArrowsFullscreen, null)),
                        "Quick view")),
                React.createElement("div", { className: "" + ((product === null || product === void 0 ? void 0 : product["new"]) ? "absolute top-2 right-2" : "hidden") },
                    React.createElement("p", { className: "bg-primeColor px-4 py-1 text-white flex justify-center items-center text-sm font-semibold hover:bg-black duration-300 cursor-pointer rounded-md" }, (product === null || product === void 0 ? void 0 : product["new"]) && "New")),
                React.createElement("div", { className: "" + ((product === null || product === void 0 ? void 0 : product.ispopular) ? "absolute top-2 right-2 z-50" : "hidden") },
                    React.createElement("p", { className: "bg-primeColor px-4 py-1 text-white flex justify-center items-center text-sm font-semibold hover:bg-black duration-300 cursor-pointer rounded-md" }, (product === null || product === void 0 ? void 0 : product.ispopular) && "Popular")))),
        React.createElement("div", { className: "py-2 flex flex-col gap-1 px-2" },
            React.createElement("div", { className: "" },
                React.createElement(link_1["default"], { href: "product/" + product._id },
                    React.createElement("h2", { className: "text-[16px] text-primeColor font-semibold pb-2 cursor-pointer" }, product === null || product === void 0 ? void 0 : product.title.substring(0, 30))),
                React.createElement("div", { className: "flex items-center justify-between gap-2" },
                    React.createElement("p", { className: "text-[#767676] text-xs italic line-through" },
                        "$", product === null || product === void 0 ? void 0 :
                        product.prevPrice),
                    React.createElement("p", { className: "text-sm font-semibold" },
                        "NGN", product === null || product === void 0 ? void 0 :
                        product.price))),
            React.createElement("div", { className: "" },
                React.createElement("div", { className: "flex items-center justify-between gap-1 w-fit" },
                    React.createElement("span", { className: "text-sm text-red-500" }, product === null || product === void 0 ? void 0 : product.rating),
                    React.createElement(md_1.MdOutlineStarPurple500, { className: "text-yellow-500" })))),
        React.createElement(react_hot_toast_1.Toaster, { position: "bottom-right", toastOptions: {
                style: {
                    background: "#000",
                    color: "#fff"
                }
            } })));
};
exports["default"] = Product;
