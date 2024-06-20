"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_slick_1 = require("react-slick");
var Container_1 = require("./Container");
var Product_1 = require("./Product");
var NextArr_1 = require("./NextArr");
var PrevArr_1 = require("./PrevArr");
var constants_1 = require("../constants");
var NewArrival = function () {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: React.createElement(NextArr_1["default"], null),
        prevArrow: React.createElement(PrevArr_1["default"], null),
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
        ]
    };
    var ArrivalProduct = constants_1.availableProduct.slice(1, 7);
    return (React.createElement(Container_1["default"], { className: "-mt-[120px]" },
        React.createElement(react_slick_1["default"], __assign({}, settings), ArrivalProduct === null || ArrivalProduct === void 0 ? void 0 : ArrivalProduct.map(function (item) { return (React.createElement("div", { key: item === null || item === void 0 ? void 0 : item._id, className: "px-3 bg-blue-500 py-2 " },
            React.createElement(Product_1["default"], { product: item }))); }))));
};
exports["default"] = NewArrival;
