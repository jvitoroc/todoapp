import {ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, TOGGLE_DELETE_MODE, TOGGLE_EDIT_MODE} from "../actions/todo";
import {combineReducers} from "redux";

const initialState = {
    todos: [],
    editMode: [],
    deleteMode: null
}

let lastId = -1;

const todos = (state = initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
            return {
                ...state, 
                todos: [...state.todos, {description: action.description, id: ++lastId}]
            }
        
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo)=> todo.id !== action.id),
                editMode: state.editMode.filter(id => id !== action.id),
                deleteMode: null
            }
        
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === action.id) {
                        const editedTodo = {...todo, description: action.description};
                        return editedTodo;
                    }
                    return todo;
                }),
                editMode: state.editMode.filter(id => id !== action.id)
            }
        
        case COMPLETE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === action.id) {
                        const editedTodo = {...todo, completed: !todo.completed};
                        return editedTodo;
                    }
                    return todo;
                }),
            }
        
        case TOGGLE_EDIT_MODE:
            let editMode = [...state.editMode];
            if(!editMode.includes(action.id)) editMode.push(action.id);
            else editMode = editMode.filter(id => id !== action.id);
            return {
                ...state,
                editMode
            }

        case TOGGLE_DELETE_MODE:
            return {
                ...state,
                deleteMode: state.deleteMode === action.id ? null:action.id
            }

        default:
            return state;
    }
}

export default todos;