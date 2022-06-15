import { GET_PRODUCTS_FROM_SERVER, SORT_PRODUCTS } from "../Constants/types";

function productsReducer(state, action) {
    let newState;
    switch (action.type) {
        case GET_PRODUCTS_FROM_SERVER:
            newState = action.payload;
            break;
        case SORT_PRODUCTS:

            newState = [...state];


            break;

        default:
            newState = [...state];
    }
    return newState;
}
export default productsReducer;