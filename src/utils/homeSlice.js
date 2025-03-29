import { createSlice } from "@reduxjs/toolkit";


const homeSlice = createSlice({
  name: "home",
  initialState: {
    products: [],
    currency: "₹",
    delivery_charge: 10,
    searchOpen:false
  },
  reducers: {
    addAsset: (state, action) => {
      state.products=action.payload // ✅ Correctly updating state
    },
    setIsSearchOpen:(state,action)=>{
      state.searchOpen=!state.searchOpen
    }
  },
});

export const { addAsset ,setIsSearchOpen} = homeSlice.actions; // ✅ Export actions
export default homeSlice.reducer;
