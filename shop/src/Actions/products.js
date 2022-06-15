import { GET_PRODUCTS_FROM_SERVER, SORT_PRODUCTS } from "../Constants/types";

export function getProductsFromServer(products) {
    return {
        type: GET_PRODUCTS_FROM_SERVER,
        payload: products
    };
}

export function sortProducts(sortType) {
    return {
        type: SORT_PRODUCTS,
        payload: sortType
    }
}