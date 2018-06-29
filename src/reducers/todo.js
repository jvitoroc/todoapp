import {ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, TOGGLE_DELETE_MODE, TOGGLE_EDIT_MODE} from "../actions/todo";
import {whereIndex, removeItem} from "../helpers/utils";
import {combineReducers} from "redux";

const initialState = {
    todos: [],
    editMode: [],
    deleteMode: null
}

let lastId = -1;

const todos = (state = initialState.todos, action)=>{
    let newState = null;
    let index = null;
    switch(action.type){
        case ADD_TODO:
            return [...state, {description: action.description, id: ++lastId}]
        
        case DELETE_TODO:
            return state.filter((todo)=>{
                return todo.id !== action.id;
            });
        
        case EDIT_TODO:
            index = whereIndex(state, {id: action.id});
            if(index !== -1){
                newState = [...state];
                newState[index].description = action.description;
                return newState;
            }
        
        case COMPLETE_TODO:
            index = whereIndex(state, {id: action.id});
            if(index !== -1){
                newState = [...state];
                newState[index].completed = !newState[index].completed;
                return newState;
            }
        
        default:
            return state;
    }
}

const editMode = (state = initialState.editMode, action)=>{
    let newState = null;
    switch(action.type){
        case TOGGLE_EDIT_MODE:
            newState = removeItem(state, action.id);
            return !newState ? [...state, action.id] : newState;

        case DELETE_TODO:
            newState = removeItem(state, action.id);
            return !newState ? state : newState;
        
        case EDIT_TODO:
            return removeItem(state, action.id);

        default: return state;
    }
}

const deleteMode = (state = initialState.deleteMode, action)=>{

    switch(action.type){
        case DELETE_TODO:
            return null;
    
        case TOGGLE_DELETE_MODE:
            return action.id === state ? null:action.id;

        default: return state;
    }
}

// for future reducers
const todoApp = combineReducers({
    todos,
    editMode,
    deleteMode
});

export default todoApp;