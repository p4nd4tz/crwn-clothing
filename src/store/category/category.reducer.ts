import { createSlice } from "@reduxjs/toolkit";
import { Category } from "./category.types";
import { fetchCategories } from "./category.action";

export type CategoryState = {
  categories: Category[];
  isLoading: boolean;
  error: string | null;
};

export const CATEGORIES_INITIAL_STATE: CategoryState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? "Failed to fetch categories";
      });
  },
});

export const {} = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;