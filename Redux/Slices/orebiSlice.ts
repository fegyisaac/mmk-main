import { ProductProps } from "@/type";
import { createSlice } from "@reduxjs/toolkit";

interface StoreState {
  productData: ProductProps[];
}

const initialState: StoreState = {
  productData: [

  ],
};

export const orebiSlice = createSlice({
  name: "orebi",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state?.productData.find((item: ProductProps) => {
        item?.id === action?.payload?.id;
      });
      if (existingProduct) {
        // existingProduct.quantity += action.payload.quantity;
      // existingProduct && existingProduct.quantity++;
      } else {
        state.productData.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: ProductProps) => item.id === action.payload.id
      );
      existingProduct && existingProduct.quantity++;
      // existingProduct.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: ProductProps) => item.id === action.payload.id
      );
      if (existingProduct?.quantity === 1) {
        existingProduct.quantity === 1;
      } else {
        existingProduct && existingProduct.quantity--;
      }
    },
    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  resetCart,
} = orebiSlice.actions;
export default orebiSlice.reducer;
