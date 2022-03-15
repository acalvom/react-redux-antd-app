import axios from 'axios';

const BASE_URL = "http://localhost:3001"

export const getTodos = async () => {
    try {
        const res = await axios.get(BASE_URL + "/todos");
        return res.data;
    } catch (error) {
        return error;
    }
}

