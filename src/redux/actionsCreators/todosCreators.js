import { getTodos } from '../../services/todosAPI';

export const listTodos = () => {
    
    return async (dispatch) => {
        const todosList = await getTodos();
        dispatch({
            type: '@todos/list',
            payload: todosList
        });
    }
}