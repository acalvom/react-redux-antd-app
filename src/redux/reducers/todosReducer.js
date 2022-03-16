const todosReducer = (state = [], action) => {
    switch (action.type) {
        case '@todos/list':
            return action.payload;

        case '@todos/add':
            return [...state, action.payload];

        case '@todos/delete':
            return [...state.filter(item => item.id !== action.payload)];

        case '@todos/update':
            // let ret = state.map(item => item.id === action.payload.id ? { ...item, isDone: action.payload.isDone } : { ...item })
            return state.map(item => {
                if (item.id === action.payload.id)
                    return { ...item, isDone: action.payload.isDone }
                else
                    return { ...item }
            });

        default:
            return state;
    }
}

export default todosReducer;
