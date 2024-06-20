"use client";
"use strict";
exports.__esModule = true;
var store_1 = require("@/Redux/store");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_2 = require("redux-persist/integration/react");
var Layout = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement(react_redux_1.Provider, { store: store_1.store },
        react_1["default"].createElement(react_2.PersistGate, { loading: null, persistor: store_1.persistor }, children)));
};
exports["default"] = Layout;
