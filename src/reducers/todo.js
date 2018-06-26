// {
//     todos: [
//         {
//             text: 'Consider using Redux',
//             completed: true,
//             id: 0
//         },
//         {
//             text: 'Keep all state in a single tree',
//             completed: false,
//             id: 1
//         }
//     ]
// }

import {ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, TOGGLE_DELETE_MODE, TOGGLE_EDIT_MODE} from "../actions/todo";
import {combineReducers} from "redux";

const initialState = {
    todos: [],
    deleteMode: null,
    editMode: []
}

const todos = (state = initialState.todos, action)=>{
    switch(action.type){
        case ADD_TODO:
            return [...todos, {description: action.description}]
        
        case DELETE_TODO:
            return todos.filter((todo)=>{
                return todo.id !== action.id;
            });
        
        case EDIT_TODO:
            _todos = [...todos];
            _todos[action.id].description = action.description;
            return _todos;
        
        case COMPLETE_TODO:
            _todos = [...todos];
            _todos[action.id].completed = !_todos[action.id].completed;
            return _todos;
        
        default:
            return state;
    }
}

const editMode = (state = initialState.editMode, action)=>{
    switch(action.type){
        case TOGGLE_EDIT_MODE:
            const index = state.indexOf(action.id);
            const newState = [...state];
            if(index !== -1){
                newState.splice(index, 1);
                return newState;
            }else{
                newState.append(action.id);
                return newState;
            }

        default:
            return state;
    }
}

const deleteMode = (state = initialState.deleteMode, action)=>{
    switch(action.type){
        case TOGGLE_DELETE_MODE:
            if(action.id)
                return action.id;
            return null;

        default:
            return state;
    }
}

// for future reducers

const todoApp = combineReducers({
    todos,
    deleteMode,
    editMode
});

export default todoApp;