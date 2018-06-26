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

import {ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO} from "../actions/todo";
import {combineReducers} from "redux";

const initialState = {
    todos: []
}

const todos = (state = initialState.todos, action)=>{
    let _todos;
    switch(action.type){
        case ADD_TODO:
            return [...todos, {description: action.description}]
        
        case DELETE_TODO:
            return state.todos.filter((todo)=>{
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

// for future reducers

const todoApp = combineReducers({
    todos
})

export default todoApp;