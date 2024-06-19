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
var react_1 = require("react");
var react_slick_1 = require("react-slick");
var image_1 = require("next/image");
var Banner = function (_a) {
    var banners = _a.banners;
    var _b = react_1.useState(0), dotActive = _b[0], setDocActive = _b[1];
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: function (prev, next) {
            setDocActive(next);
        },
        appendDots: function (dots) { return (React.createElement("div", { style: {
                position: "absolute",
                top: "50%",
                left: "7%",
                transform: "translateY(-50%)"
            } },
            React.createElement("ul", { style: { margin: "0px" } },
                " ",
                dots,
                " "))); },
        customPaging: function (i) { return (React.createElement("div", { style: i === dotActive
                ? {
                    width: "30px",
                    color: "#262626",
                    borderRight: "3px #262626 solid",
                    padding: "8px 0",
                    cursor: "pointer"
                }
                : {
                    width: "30px",
                    color: "transparent",
                    borderRight: "3px white solid",
                    padding: "8px 0",
                    cursor: "pointer"
                } },
            React.createElement("p", { style: i === dotActive
                    ? { color: "black", fontWeight: "600" }
                    : { color: "white", fontWeight: "600" } },
                " ",
                "0",
                i + 1))); },
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    dots: true,
                    appendDots: function (dots) { return (React.createElement("div", { style: {
                            position: "absolute",
                            top: "50%",
                            left: "2%",
                            transform: "translateY(-50%)"
                        } },
                        React.createElement("ul", { style: { margin: "0px" } },
                            " ",
                            dots,
                            " "))); },
                    customPaging: function (i) { return (React.createElement("div", { style: i === dotActive
                            ? {
                                width: "25px",
                                color: "#262626",
                                borderRight: "3px #262626 solid",
                                cursor: "pointer",
                                fontSize: "12px"
                            }
                            : {
                                width: "25px",
                                color: "transparent",
                                borderRight: "3px white solid",
                                cursor: "pointer",
                                fontSize: "12px"
                            } },
                        "0",
                        i + 1)); }
                }
            },
        ]
    };
    return (React.createElement("div", null,
        React.createElement(react_slick_1["default"], __assign({}, settings), banners === null || banners === void 0 ? void 0 : banners.map(function (item) { return (React.createElement("div", { className: "relative", key: item === null || item === void 0 ? void 0 : item._id },
            React.createElement(image_1["default"], { src: item.img, alt: "banner image", width: 2000, height: 2000, className: "w-full max-h-[650px] object-cover" }),
            React.createElement("div", { className: "w-full h-10 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20" }),
            React.createElement("p", { className: "absolute text-[42px] text-white z-50 top-[290px] left-[250px]" }, item.text))); }))));
};
exports["default"] = Banner;
