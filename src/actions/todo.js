const ADD_TODO = 'ADD_TODO';
const ADD_TODO_ASYNC = 'ADD_TODO_ASYNC';
const DELETE_TODO = 'DELETE_TODO';
const EDIT_TODO = 'EDIT_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE';
const TOGGLE_DELETE_MODE = 'TOGGLE_DELETE_MODE';

const addTodoAsync = (description)=>{
    return{
        type: ADD_TODO_ASYNC,
        description
    }
}

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

const toggleTodo = (id)=>{
    return{
        type: TOGGLE_TODO,
        id
    }
}

const toggleEditMode = (id)=>{
    return{
        type: TOGGLE_EDIT_MODE,
        id
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
    ADD_TODO_ASYNC,
    DELETE_TODO,
    EDIT_TODO,
    TOGGLE_TODO,
    TOGGLE_EDIT_MODE,
    TOGGLE_DELETE_MODE,
    addTodo,
    addTodoAsync,
    deleteTodo,
    editTodo,
    toggleTodo,
    toggleEditMode,
    toggleDeleteMode
};