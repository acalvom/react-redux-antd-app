const initState = {
    todos: [],
    isFetching: false
}

const todosReducer = (state = initState, action) => {
    switch (action.type) {
        case '@todos/list':
            return { ...state, todos: action.payload };

        case '@todos/add':
            return { ...state, todos: [...state.todos, action.payload] };

        case '@todos/delete':
            return { ...state, todos: [...state.todos.filter(item => item.id !== action.payload)] };

        case '@todos/update':
            // let ret = state.todos.map(item => item.id === action.payload.id ? { ...item, isDone: action.payload.isDone } : { ...item })
            let todosUpdated = state.todos.map(item => {
                if (item.id === action.payload.id)
                    return { ...item, isDone: action.payload.isDone }
                else
                    return { ...item }
            });
            return { ...state, todos: todosUpdated }

        case '@todos/startFetching':
            return { ...state, isFetching: true };

        default:
            return state;
    }
}

export default todosReducer;
