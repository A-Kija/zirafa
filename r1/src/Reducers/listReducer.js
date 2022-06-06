import rand from "../Functions/rand";

function listReducer(state, action) {
    let newState;
    switch (action.type) {
        case 'new_list':
            newState = [...Array(10)].map(_ => rand(100, 999));
            break;
        default:
            newState = [...state];
    }
    return newState;
}

export default listReducer;