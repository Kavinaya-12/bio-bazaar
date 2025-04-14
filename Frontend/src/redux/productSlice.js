// productSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { ORGANICFOODS, ORGANICHEALTH, ORGANICHOUSEHOLD, ORGANICLIFESTYLE } from '../constants';

const initialState = {
  foods: ORGANICFOODS,
  personalCare: ORGANICHEALTH,
  household: ORGANICHOUSEHOLD,
  lifestyle: ORGANICLIFESTYLE,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { category, product } = action.payload;
      if (state[category]) {
        state[category].push(product);
      }
    },
    removeProduct: (state, action) => {
      const { category, productId } = action.payload;
      if (state[category]) {
        state[category] = state[category].filter(product => product.id !== productId);
      }
    },
    searchProduct: (state, action) => {
      const searchText = typeof action.payload === 'string' ? action.payload.toLowerCase() : '';
      state.filteredProducts = state.items.filter((item) =>
          item.title?.toLowerCase().includes(searchText) || false
      );
  },
  filterByCategory: (state, action) => {
    const category = typeof action.payload === 'string' ? action.payload.toLowerCase() : '';
    if (category) {
        state.filteredProducts = state.items.filter((item) =>
            item.category?.toLowerCase() === category || false
        );
    } else {
        state.filteredProducts = state.items;
    }
},
  },
});


export const { addProduct, removeProduct,searchProduct, filterByCategory } = productSlice.actions;
export default productSlice.reducer; // Ensure you are exporting the reducer here
