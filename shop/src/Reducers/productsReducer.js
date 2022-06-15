import { GET_PRODUCTS_FROM_SERVER } from "../Constants/types";

function productsReducer(state, action) {
    let newState;
    switch (action.type) {
        case GET_PRODUCTS_FROM_SERVER:
            newState = action.payload;
            break;

        default:
            newState = [...state];
    }
    return newState;
}
export default productsReducer;