/**
 * Created by ihoffmann on 6/24/16.
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VIS = 'SET_VIS';
export const ADD_USER = 'ADD_USER';

let nextTodoId = 0

export const addTodo = (text, userName) => {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text,
        userName
    }
}
export const addUser = (text, userName) => {
    return {
        type: ADD_USER,
        userName
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VIS,
        filter
    }
}

export const toggleTodo = (id, userName) => {
    return {
        type: TOGGLE_TODO,
        id,
        userName
    }
}