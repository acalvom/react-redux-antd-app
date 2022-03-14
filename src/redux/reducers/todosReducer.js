const todosReducer = (state = [], action) => {
    switch (action.type) {
        case '@todos/list':
            return { ...state }

        default:
            return state;
    }
}

export default todosReducer;
