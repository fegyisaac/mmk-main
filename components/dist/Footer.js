"use strict";
exports.__esModule = true;
var ai_1 = require("react-icons/ai");
var Footer = function () {
    return (React.createElement("div", { className: "w-full bg-[#000000]" },
        React.createElement("div", { className: "w-full mx-auto border-t-[1px] group" },
            React.createElement("p", { className: "text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm" },
                React.createElement("span", { className: "text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex" },
                    React.createElement(ai_1.AiOutlineCopyright, null)),
                "Copyright 2024 | Orebi shopping | All Rights Reserved |",
                React.createElement("a", { href: "https://reactbd.com/", target: "_blank", rel: "noreferrer" },
                    React.createElement("span", { className: "ml-1 font-medium group-hover:text-primeColor" }, "Powered by ReactBD.com"))))));
};
exports["default"] = Footer;
