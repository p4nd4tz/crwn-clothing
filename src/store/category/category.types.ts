export type CategoryItem = {
    id: number,
    name: string,
    price: number,
    imageUrl: string,
}

export type Category = {
    title: string,
    items: CategoryItem[],
}