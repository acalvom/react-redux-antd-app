const todosListMock = [
    { id: 1, task: 'Clean bathroom', assignedTo: 'Andrea', priority: 'medium', isDone: false },
    { id: 2, task: 'Buy tomatoes', assignedTo: 'Andrea', priority: 'high', isDone: true },
    { id: 3, task: 'Get the hair cut', assignedTo: 'Paula', priority: 'low', isDone: false },
    { id: 4, task: 'Visit dentist', assignedTo: 'Carlos', priority: 'high', isDone: false }
]

export const listTodos = () => {
    return dispatch => {
        dispatch({
            type: '@todos/list',
            payload: todosListMock
        });
    }
}