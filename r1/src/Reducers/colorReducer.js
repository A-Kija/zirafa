function colorReducer(state, action) {
    let newState;
    switch (action.type) {
        case 'make_black':
            newState = 'black';
            break;
        default:
            newState = state;
    }

    return newState;
}

export default colorReducer;