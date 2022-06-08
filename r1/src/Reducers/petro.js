import { filter_more_13, sort_by_default, sort_by_name } from "../Constants/books";

function petro(state, action) {
    let newState;
    switch (action.type) {
        case sort_by_name:
            newState = [...state].sort((a, b) => {
                if (a.title > b.title) return 1;
                if (a.title < b.title) return -1;
                return 0;
            });
            break;
        case sort_by_default:
            newState = [...state].sort((a, b) => a.row - b.row)
            break;
        case filter_more_13:
            newState = state.map(b => b.price > 13 ? {...b, show: true } : {...b, show: false })
            break;
        default:
            newState = [...state];
    }
    return newState;
}

export default petro;