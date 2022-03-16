const todosReducer = (state = [], action) => {
    switch (action.type) {
        case '@todos/list':
            return action.payload;

        case '@todos/add':
            return [...state, action.payload];

        case '@todos/delete':
            return [...state.filter(item => item.id !== action.payload)];

        default:
            return state;
    }
}

export default todosReducer;
