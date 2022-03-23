import { combineReducers } from 'redux';
import todosReducer from './todosReducer';

const reducers = combineReducers({
    todosState: todosReducer
});

export default reducers;