"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var emptyCart_png_1 = require("@/public/assets/emptyCart.png");
var react_redux_1 = require("react-redux");
var link_1 = require("next/link");
var image_1 = require("next/image");
var CartItem_1 = require("./CartItem");
var Price_1 = require("./Price");
var orebiSlice_1 = require("@/Redux/Slices/orebiSlice");
var react_hot_toast_1 = require("react-hot-toast");
var framer_motion_1 = require("framer-motion");
var Cart = function () {
    var productData = react_redux_1.useSelector(function (state) { return state.orebi; }).productData;
    var dispatch = react_redux_1.useDispatch();
    var _a = react_1.useState(0), totalAmt = _a[0], setTotalAmt = _a[1];
    react_1.useEffect(function () {
        var price = 0;
        productData.map(function (item) {
            price += (item === null || item === void 0 ? void 0 : item.price) * (item === null || item === void 0 ? void 0 : item.quantity);
            return price;
        });
        setTotalAmt(price);
    }, [productData]);
    var handleReset = function () {
        var confirmed = window.confirm("Are you sure to reset your Cart?");
        confirmed && dispatch(orebiSlice_1.resetCart());
        react_hot_toast_1["default"].success("Cart resetted successfully!");
    };
    return (react_1["default"].createElement("div", { className: "w-[1050px] mx-auto py-5 px-4 lg:px-0" }, (productData === null || productData === void 0 ? void 0 : productData.length) > 0 ? (react_1["default"].createElement("div", { className: "pb-20" },
        react_1["default"].createElement("div", { className: "w-full h-20 bg-[#f5f7f7] text-primeColor hidden lg:grid grid-cols-6 place-content-center px-6 text-lg font-semibold" },
            react_1["default"].createElement("h2", { className: "col-span-3" }, "Product"),
            react_1["default"].createElement("h2", null, "Price"),
            react_1["default"].createElement("h2", null, "Quantity"),
            react_1["default"].createElement("h2", null, "Sub Total")),
        react_1["default"].createElement("div", { className: "mt-5" }, productData.map(function (item) { return (react_1["default"].createElement("div", { key: item === null || item === void 0 ? void 0 : item._id },
            react_1["default"].createElement(CartItem_1["default"], { item: item }))); })),
        react_1["default"].createElement("button", { onClick: handleReset, className: "py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300" }, "Reset cart"),
        react_1["default"].createElement("div", { className: "flex flex-col md:flex-row justify-between border p-4 items-center gap-2 md:gap-0" },
            react_1["default"].createElement("div", { className: "flex items-center gap-4" },
                react_1["default"].createElement("input", { type: "text", placeholder: "Coupon Number", className: "w-44 lg:w-52 h-8 px-4 border text-primeColor text-sm outline-none border-gray-400" }),
                react_1["default"].createElement("p", { className: "text-lg font-semibold" }, "Apply Coupon")),
            react_1["default"].createElement("p", null, "Update Cart")),
        react_1["default"].createElement("div", { className: "max-w-7xl gap-4 flex justify-end mt-4" },
            react_1["default"].createElement("div", { className: "w-96 flex flex-col gap-4" },
                react_1["default"].createElement("h1", { className: "text-2xl font-semibold text-right" }, "Cart totals"),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("p", { className: "flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium" },
                        "Subtotal",
                        " ",
                        react_1["default"].createElement("span", null,
                            react_1["default"].createElement(Price_1["default"], { amount: totalAmt }))),
                    react_1["default"].createElement("p", { className: "flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium" },
                        "Shipping Charge",
                        react_1["default"].createElement("span", { className: "font-semibold tracking-wide font-titleFont" },
                            react_1["default"].createElement(Price_1["default"], { amount: 0 }))),
                    react_1["default"].createElement("p", { className: "flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium" },
                        "Total",
                        react_1["default"].createElement("span", { className: "font-bold tracking-wide text-lg font-titleFont" },
                            react_1["default"].createElement(Price_1["default"], { amount: totalAmt })))),
                react_1["default"].createElement("div", { className: "flex justify-end" },
                    react_1["default"].createElement("button", { className: "w-52 h-10 bg-primeColor text-white hover:bg-black duration-300" }, "Proceed to Checkout")))))) : (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { y: 30, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.4 }, className: "flex flex-col md:flex-row justify-center items-center gap-4 pb-20 rounded-md shadow-lg" },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(image_1["default"], { src: emptyCart_png_1["default"], alt: "emptyCart", className: "w-80 rounded-lg p-4 mx-auto" })),
        react_1["default"].createElement("div", { className: "max-w-[500px] p-4 py-8 bg-white flex flex-col gap-4 items-center " },
            react_1["default"].createElement("h1", { className: "text-xl font-bold uppercase" }, "Your Cart feels lonely."),
            react_1["default"].createElement("p", { className: "text-sm text-center px-10 -mt-2" }, "Your Shopping cart lives to serve. Give it purpose - fill it with all kinds of native attires and dresses for male and females and make it happy."),
            react_1["default"].createElement(link_1["default"], { href: "/", className: "bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-semibold text-lg text-gray-200 hover:text-white duration-300" }, "Continue Shopping"))))));
};
exports["default"] = Cart;
