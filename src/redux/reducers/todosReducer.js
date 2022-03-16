const todosReducer = (state = [], action) => {
    switch (action.type) {
        case '@todos/list':
            return action.payload;

        case '@todos/add':
            return [...state, action.payload];

        default:
            return state;
    }
}

export default todosReducer;
