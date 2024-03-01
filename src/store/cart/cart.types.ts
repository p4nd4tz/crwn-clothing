import { CategoryItem } from "../category/category.types";

export type CartItem = CategoryItem & {
    quantity: number,
}