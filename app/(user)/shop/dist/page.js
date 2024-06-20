"use client";
"use strict";
exports.__esModule = true;
var Container_1 = require("@/components/Container");
var ListProduct_1 = require("@/components/ListProduct");
var Product_1 = require("@/components/Product");
var constants_1 = require("@/constants");
var react_1 = require("react");
var bs_1 = require("react-icons/bs");
var im_1 = require("react-icons/im");
var ShopPage = function () {
    var _a = react_1.useState(true), showGrid = _a[0], setShowGrid = _a[1];
    var _b = react_1.useState(false), showList = _b[0], setShowList = _b[1];
    return (React.createElement(Container_1["default"], null,
        React.createElement("div", { className: "flex items-center justify-between pb-10" },
            React.createElement("h2", { className: "text-2xl text-primeColor font-bold" }, "All Products"),
            React.createElement("div", { className: "flex items-center gap-4" },
                React.createElement("span", { onClick: function () {
                        setShowGrid(true);
                        setShowList(false);
                    }, className: (showGrid
                        ? "bg-primeColor text-white"
                        : "border-[1px] border-gray-300 text-[#737373]") + " w-8 h-8 text-lg flex items-center justify-center cursor-pointer" },
                    React.createElement(bs_1.BsGridFill, null)),
                React.createElement("span", { onClick: function () {
                        setShowGrid(false);
                        setShowList(true);
                    }, className: (showList
                        ? "bg-primeColor text-white"
                        : "border-[1px] border-gray-300 text-[#737373]") + " w-8 h-8 text-base flex items-center justify-center cursor-pointer listView" },
                    React.createElement(im_1.ImList, null)))),
        showGrid ? (React.createElement("div", { className: "w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5" }, constants_1.allProducts === null || constants_1.allProducts === void 0 ? void 0 : constants_1.allProducts.map(function (item) { return (React.createElement(Product_1["default"], { key: item === null || item === void 0 ? void 0 : item._id, product: item })); }))) : (React.createElement("div", { className: "w-full grid grid-cols-1 gap-5" }, constants_1.allProducts === null || constants_1.allProducts === void 0 ? void 0 : constants_1.allProducts.map(function (item) { return (React.createElement(ListProduct_1["default"], { key: item === null || item === void 0 ? void 0 : item._id, product: item })); })))));
};
exports["default"] = ShopPage;
