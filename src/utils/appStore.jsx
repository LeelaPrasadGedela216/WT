import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./homeSlice";
import cartReducer from "./cartSlice";
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState) {
      return JSON.parse(serializedState); 
    }
  } catch (e) {
    console.warn("Error loading state from localStorage", e);
  }
  return undefined; 
};


const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState); 
  } catch (e) {
    console.warn("Error saving state to localStorage", e);
  }
};


const appStore = configureStore({
  reducer: {
    home: homeReducer,
    cart: cartReducer,
  },
  preloadedState: loadState(), // Load state from localStorage
});

// Subscribe to the store to save the state whenever it changes
appStore.subscribe(() => {
  saveState(appStore.getState()); // Persist the state after every change
});

export default appStore;
