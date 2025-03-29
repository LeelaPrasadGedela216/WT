import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartDetailedInfo: [], 
    subTotal: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { selectedSize, _id } = action.payload;
      const existingProduct = state.cartItems.find(
        (item) => item._id === _id && item.selectedSize === selectedSize
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push({
          _id,
          selectedSize,
          quantity: 1,
        });
      }

     
      state.subTotal = state.cartItems.reduce((acc, cartItem) => {
        const product = state.cartDetailedInfo.find(
          (item) => item._id.toString() === cartItem._id.toString()
        );
        return product ? acc + product.price * cartItem.quantity : acc;
      }, 0);
    },

    removeFromCart: (state, action) => {
      const { _id, selectedSize } = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => !(item._id.toString() === _id.toString() && item.selectedSize === selectedSize)
      );

     
      state.subTotal = state.cartItems.reduce((acc, cartItem) => {
        const product = state.cartDetailedInfo.find(
          (item) => item._id.toString() === cartItem._id.toString()
        );
        return product ? acc + product.price * cartItem.quantity : acc;
      }, 0);
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.subTotal = 0;
    },

    addToCartDetailedInfo: (state, action) => {
      state.cartDetailedInfo = action.payload;

     
      state.subTotal = state.cartItems.reduce((acc, cartItem) => {
        const product = state.cartDetailedInfo.find(
          (item) => item._id.toString() === cartItem._id.toString()
        );
        return product ? acc + product.price * cartItem.quantity : acc;
      }, 0);
    },

    updateQuantity: (state, action) => {
      const { _id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item._id.toString() === _id.toString());
      if (item) {
        item.quantity = quantity;
      }

   
      state.subTotal = state.cartItems.reduce((acc, cartItem) => {
        const product = state.cartDetailedInfo.find(
          (item) => item._id.toString() === cartItem._id.toString()
        );
        return product ? acc + product.price * cartItem.quantity : acc;
      }, 0);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity, addToCartDetailedInfo } =
  cartSlice.actions;
export default cartSlice.reducer;
