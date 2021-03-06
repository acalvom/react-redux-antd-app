import axios from 'axios';

const BASE_URL = "/todos/"

export const getTodos = async () => {
    try {
        const res = await axios.get(BASE_URL);
        return res.data;
    } catch (error) {
        return error;
    }
}


export const postTodo = async (newTodo) => {
    try {
        const res = await axios.post(BASE_URL, newTodo);
        return res.data;
    } catch (error) {
        return error;
    }
}

export const deleteTodo = async (todoId) => {
    try {
        await axios.delete(BASE_URL + todoId);
    } catch (error) {
        return error;
    }
}

export const updateState = async (todoId, todoIsDone) => {
    try {
        const res = await axios.patch(BASE_URL + todoId, {isDone: todoIsDone});
        return res.data;
    } catch (error) {
        return error;
    }
}