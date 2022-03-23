import { getTodos, postTodo, deleteTodo, updateState } from '../../services/todosAPI';

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

export const removeTodo = (todoId) => {

    return async (dispatch) => {
        await deleteTodo(todoId);
        dispatch({
            type: '@todos/delete',
            payload: todoId
        });
    }
}

export const toogleState = (todoId, todoIsDone) => {

    return async (dispatch) => {
        const updatedTodo = await updateState(todoId, todoIsDone);
        dispatch({
            type: '@todos/update',
            payload: updatedTodo
        });
    }
}

export const startFetching = () => {
    return {
        type: '@todos/startFetching',
    }
}