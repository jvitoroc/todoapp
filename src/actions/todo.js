const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const EDIT_TODO = 'EDIT_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
const TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE';
const TOGGLE_DELETE_MODE = 'TOGGLE_DELETE_MODE';

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

const toggleEditMode = (id, off)=>{
    return{
        type: TOGGLE_EDIT_MODE,
        id,
        off
    }
}

const toggleDeleteMode = (id)=>{
    return{
        type: TOGGLE_DELETE_MODE,
        id
    }
}

export {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    COMPLETE_TODO,
    TOGGLE_EDIT_MODE,
    TOGGLE_DELETE_MODE,
    addTodo,
    deleteTodo,
    editTodo,
    completeTodo,
    toggleEditMode,
    toggleDeleteMode
};