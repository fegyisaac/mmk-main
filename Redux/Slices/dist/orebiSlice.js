"use strict";
var _a;
exports.__esModule = true;
exports.resetCart = exports.deleteProduct = exports.decreaseQuantity = exports.increaseQuantity = exports.addToCart = exports.orebiSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    productData: []
};
exports.orebiSlice = toolkit_1.createSlice({
    name: "orebi",
    initialState: initialState,
    reducers: {
        addToCart: function (state, action) {
            var existingProduct = state === null || state === void 0 ? void 0 : state.productData.find(function (item) { var _a; return (item === null || item === void 0 ? void 0 : item._id) === ((_a = action === null || action === void 0 ? void 0 : action.payload) === null || _a === void 0 ? void 0 : _a._id); });
            console.log(existingProduct);
            if (existingProduct) {
                existingProduct && existingProduct.quantity++;
                // existingProduct.quantity += action.payload.quantity;
                console.log("mar amaka");
            }
            else {
                state.productData.push(action.payload);
                console.log("bread and akara");
            }
        },
        increaseQuantity: function (state, action) {
            var existingProduct = state.productData.find(function (item) { return item._id === action.payload._id; });
            existingProduct && existingProduct.quantity++;
            // existingProduct.quantity++;
        },
        decreaseQuantity: function (state, action) {
            var existingProduct = state.productData.find(function (item) { return item._id === action.payload._id; });
            if ((existingProduct === null || existingProduct === void 0 ? void 0 : existingProduct.quantity) === 1) {
                existingProduct.quantity === 1;
            }
            else {
                existingProduct && existingProduct.quantity--;
            }
        },
        deleteProduct: function (state, action) {
            state.productData = state.productData.filter(function (item) { return item._id !== action.payload; });
        },
        resetCart: function (state) {
            state.productData = [];
        }
    }
});
exports.addToCart = (_a = exports.orebiSlice.actions, _a.addToCart), exports.increaseQuantity = _a.increaseQuantity, exports.decreaseQuantity = _a.decreaseQuantity, exports.deleteProduct = _a.deleteProduct, exports.resetCart = _a.resetCart;
exports["default"] = exports.orebiSlice.reducer;
