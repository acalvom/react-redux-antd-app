const todosListMock = [
    { id: 1, task: 'Clean bathroom', assignedTo: 'Andrea', isDone: false },
    { id: 2, task: 'Buy tomatoes', assignedTo: 'Andrea', isDone: true },
    { id: 3, task: 'Get the hair cut', assignedTo: 'Paula', isDone: false },
    { id: 4, task: 'Visit dentist', assignedTo: 'Carlos', isDone: false }
]

export const listTodos = () => {
    return dispatch => {
        dispatch({
            type: '@todos/list',
            payload: todosListMock
        });
    }
}