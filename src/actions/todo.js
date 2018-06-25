const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const EDIT_TODO = 'EDIT_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';

const addTodo = (description)=>{
    return{
        type: ADD_TODO,
        description
    }
}

const removeTodo = (id)=>{
    return{
        type: REMOVE_TODO,
        id
    }
}

const editTodo = (id, description)=>{
    return{
        type: EDIT_TODO,
        id,
        description
    }
}

const completeTodo = (id)=>{
    return{
        type: COMPLETE_TODO,
        id
    }
}

export {
    ADD_TODO,
    REMOVE_TODO,
    EDIT_TODO,
    COMPLETE_TODO,
    addTodo,
    removeTodo,
    editTodo,
    completeTodo
}