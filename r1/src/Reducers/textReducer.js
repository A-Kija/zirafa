import rand from "../Functions/rand";

function textReducer(state, action) {
    let newState;
    switch (action.type) {
        case 'rand_text':
            newState = rand(1000, 9999);
            break;
        case 'input_text':
            newState = action.payload;
            break;
        default:
            newState = state;
    }
    return newState;
}

export default textReducer;