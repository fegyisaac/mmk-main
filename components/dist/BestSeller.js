'use client';
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
var react_1 = require("react");
var Container_1 = require("./Container");
var Product_1 = require("./Product");
var react_slick_1 = require("react-slick");
var constants_1 = require("@/constants");
var NextArr_1 = require("./NextArr");
var PrevArr_1 = require("./PrevArr");
var BestSeller = function () {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: react_1["default"].createElement(NextArr_1["default"], null),
        prevArrow: react_1["default"].createElement(PrevArr_1["default"], null),
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
    return (react_1["default"].createElement(Container_1["default"], { className: "w-full pb-20 px-4" },
        react_1["default"].createElement(react_slick_1["default"], __assign({}, settings), constants_1.bestSellers.map(function (item) { return (react_1["default"].createElement(Product_1["default"], { key: item._id, product: item, className: 'px-2' })); }))));
};
exports["default"] = BestSeller;
