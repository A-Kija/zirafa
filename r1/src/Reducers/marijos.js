import { get_from_server, reload, show_all } from "../Constants/books";

function marijos(state, action) {
    let newState;
    switch (action.type) {
        case get_from_server:
            newState = action.payload.map((b, i) => ({...b, row: i, show: true }))
            break;
        case reload:
            newState = [];
            break;
        case show_all:
            newState = state.map(b => ({...b, show: true }))
            break;
        default:
            newState = [...state];
    }
    return newState;
}

export default marijos;