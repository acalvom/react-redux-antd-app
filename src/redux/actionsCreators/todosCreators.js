import axios from 'axios';

export const listTodos = () => {
    return async (dispatch) => {
        const res = await axios.get("http://localhost:3001/todos");
        const todosList = res.data;
        dispatch({
            type: '@todos/list',
            payload: todosList
        });
    }
}