import { createAction } from "../../utils/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { getCategoriesAndDocuments } from '../../utils/firebase.utils';

const fetchCategoriesStart = () =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

const fetchCategoriesSuccess = (categories) =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

const fetchCategoriesFailed = (error) =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart);

    try {
        const categories = await getCategoriesAndDocuments();
        dispatch(fetchCategoriesSuccess(categories));
    } catch (err) {
        dispatch(fetchCategoriesFailed(err));
    }
}