import React, {Component} from "react";
import View from "../components/TodoApp/TodoApp";

class TodoApp extends Component{
    state = {
        todos: [
            {description: "Comer pênis", completed: true, editMode: false, deleteMode: false},
            {description: "Dar o cú", completed: false, editMode: false, deleteMode: false},
            {description: "Se fuder", completed: true, editMode: false, deleteMode: false},
            {description: "Xupar uma pica", completed: false, editMode: false, deleteMode: false},
        ]
    }

    changeDescriptionHandler = (id)=>{
        this.setState(({todos})=>{
            todos[id].editMode = true;
            return {todos};
        });   
    }

    saveHandler = (e, id)=>{
        if(e.keyCode === 13){
            e.persist();
            this.setState(({todos})=>{
                todos[id].description = e.target.value;
                todos[id].editMode = false;
                return {todos};
            });
        }
    }

    deleteModeHandler = (id, enable = true)=>{
        this.setState(({todos})=>{
            if(enable){
                for(const todo of todos){
                    if(todo.deleteMode === true && todo.id !== id)
                        todo.deleteMode = false;
                }
            }
            todos[id].deleteMode = enable;
            return {todos};
        });
    }

    deleteTodoHandler = (id)=>{
        this.setState(({todos})=>{
            todos = todos.filter((_, i)=>{
                return i !== id;
            });

            return {todos};
        });
    }

    completeTodo = (id, complete)=>{
        this.setState(({todos})=>{
            todos[id].completed = complete;
            return {todos};
        });
    }

    render = ()=>{
        return (
            <View todos={this.state.todos}
                changeDescriptionHandler={this.changeDescriptionHandler}
                saveHandler={this.saveHandler}
                deleteModeHandler={this.deleteModeHandler}
                deleteTodoHandler={this.deleteTodoHandler}
                completeTodo={this.completeTodo}/>
        );
    }
}

export default TodoApp;