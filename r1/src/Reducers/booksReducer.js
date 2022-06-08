import marijos from "./marijos";
import petro from "./petro";

function booksReducer(state, action) {
    let newState;
    if (action.type < 300) {
        newState = petro(state, action);
    } else {
        newState = marijos(state, action);
    }
    return newState;
}

export default booksReducer;