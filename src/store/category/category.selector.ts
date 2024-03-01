import { createSelector } from "reselect";
import { RootState } from "../store";
import { CategoryState } from "./category.reducer";

const selectCategoriesReducer = (state: RootState): CategoryState => state.categories;

export const selectCategories = createSelector(
    [selectCategoriesReducer],
    categories => categories.categories
)

export const selectCategoriesIsLoading = createSelector(
    [selectCategoriesReducer],
    category => category.isLoading
)