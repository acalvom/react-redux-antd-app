import { getTodos, postTodo } from '../../services/todosAPI';

export const listTodos = () => {

    return async (dispatch) => {
        const todosList = await getTodos();
        dispatch({
            type: '@todos/list',
            payload: todosList
        });
    }
}

export const addTodo = (newTodo) => {

    return async (dispatch) => {
        const createdTodo = await postTodo(newTodo);
        dispatch({
            type: '@todos/add',
            payload: createdTodo
        });
    }
}