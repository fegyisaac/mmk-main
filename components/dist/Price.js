"use strict";
exports.__esModule = true;
var Price = function (_a) {
    var amount = _a.amount, className = _a.className;
    var priceFormat = new Number(amount).toLocaleString("en-US", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 2
    });
    return React.createElement("span", { className: "" + className }, priceFormat);
};
exports["default"] = Price;
