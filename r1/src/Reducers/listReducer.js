import rand from "../Functions/rand";
import randColor from "../Functions/randColor";

function listReducer(state, action) {
    let newState;
    switch (action.type) {
        case 'new_list':
            newState = [...Array(10)].map(_ => ({ number: rand(100, 999), color: randColor() }));
            break;
        case 'sort_list':
            newState = [...state].sort((a, b) => b - a);
            break;
        default:
            newState = [...state];
    }
    return newState;
}



export default listReducer;