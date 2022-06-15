import { GET_PRODUCTS_FROM_SERVER } from "../Constants/types";

export function getProductsFromServer(products) {
    return {
        type: GET_PRODUCTS_FROM_SERVER,
        payload: products
    };
}