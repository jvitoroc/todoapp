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