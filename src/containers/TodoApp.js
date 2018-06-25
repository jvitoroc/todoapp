import React, {Component} from "react";
import View from "../components/TodoApp/TodoApp";

class TodoApp extends Component{
    state = {
        todos: [
            {description: "Comer pênis", active: true, editMode: false, deleteMode: false},
            {description: "Dar o cú", active: false, editMode: false, deleteMode: false},
            {description: "Se fuder", active: true, editMode: false, deleteMode: false},
            {description: "Xupar uma pica", active: false, editMode: false, deleteMode: false},
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
            todos[id].deleteMode = enable;
            return {todos};
        });
    }

    render = ()=>{
        return (
            <View todos={this.state.todos}
                changeDescriptionHandler={this.changeDescriptionHandler}
                saveHandler={this.saveHandler}
                deleteModeHandler={this.deleteModeHandler}/>
        );
    }
}

export default TodoApp;