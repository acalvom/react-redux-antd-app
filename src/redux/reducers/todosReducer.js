const todosReducer = (state = [], action) => {
    switch (action.type) {
        case '@todos/list':
            return action.payload;

        default:
            return state;
    }
}

export default todosReducer;
