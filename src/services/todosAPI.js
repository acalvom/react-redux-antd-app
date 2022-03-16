import axios from 'axios';

const BASE_URL = "http://localhost:3001/todos/"

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