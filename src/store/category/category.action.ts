import { getCategoriesAndDocuments } from "../../utils/firebase.utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Category } from "./category.types";

export const fetchCategories = createAsyncThunk<
    Category[],
    void,
    { rejectValue: string }
>("categories/fetchCategories", async (_, { rejectWithValue }) => {
    try {
        const response = await getCategoriesAndDocuments();
        return response;
    } catch (err: any) {
        return rejectWithValue(err.message || "Failed to fetch categories");
    }
});