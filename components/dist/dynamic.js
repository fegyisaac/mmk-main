"use client";
"use strict";
exports.__esModule = true;
var dynamic_1 = require("next/dynamic");
var DynamicSinglePage = dynamic_1["default"](function () { return Promise.resolve().then(function () { return require('../app/(user)/product/[id]/page'); }); }, {
    loading: function () { return React.createElement("div", null, "Loading..."); },
    ssr: false
});
exports["default"] = DynamicSinglePage;
