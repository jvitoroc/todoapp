import server from "../axios";
import {createResource} from "./utils";

const getTodos = (token)=>{
    return server({
        url: 'todo',
        method: 'get',
        headers: {Authorization: `Bearer ${token}`}
    });
};

const getTodo = (id, token)=>{
    return server({
        url: `todo/${id}`,
        method: 'get',
        headers: {Authorization: `Bearer ${token}`}
    });
};

const createTodo = (data, token)=>{
    return server({
        url: `todo`,
        method: 'post',
        data: createResource(data),
        headers: {Authorization: `Bearer ${token}`}
    });
}

const updateTodo = (data, token)=>{
    return server({
        url: `patch`,
        method: 'post',
        data: createResource(data),
        headers: {Authorization: `Bearer ${token}`}
    });
}

const deleteTodo = (id, token)=>{
    return server({
        url: `todo/${id}`,
        method: 'delete',
        headers: {Authorization: `Bearer ${token}`}
    });
}

export {
    getTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
};