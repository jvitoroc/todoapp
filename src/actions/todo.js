const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const EDIT_TODO = 'EDIT_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';

const addTodo = (description)=>{
    return{
        type: ADD_TODO,
        description
    }
}

const deleteTodo = (id)=>{
    return{
        type: DELETE_TODO,
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
    DELETE_TODO,
    EDIT_TODO,
    COMPLETE_TODO,
    addTodo,
    deleteTodo,
    editTodo,
    completeTodo
}