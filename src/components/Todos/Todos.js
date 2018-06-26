import React, {Component} from "react";
import Todo from "../Todo/Todo";
import style from "./style.css";

class Todos extends Component{
    // I didn't put this state in the store because it's all about UI.
    state = {
        deleteMode: null,
        editMode: []
    }

    editModeHandler = (id, enable = true)=>{
        this.setState(({editMode})=>{
            if(enable)
                editMode = [...editMode, id];
            else
                editMode.splice(editMode.indexOf(id), 1);

            return {editMode};
        });
    }

    deleteModeHandler = (id, cancel = false)=>{
        this.setState(({deleteMode})=>{
            if(cancel)
                deleteMode = null;
            else
                deleteMode = id;

            return {deleteMode}
        });
    }

    render = ()=>{
        const todosComponents = this.todos.map((todo, i)=>{
            return (
                <Todo key={i}
                    id={i}
                    deleteMode={this.state.deleteMode === i}
                    editMode={this.state.editMode.contains(i)}
                    data={todo}
                    onToggle={()=>this.onTodoClick(i)}
                    onEdit={this.onEditTodo(i)}
                    onDelete={()=>this.onDeleteTodo(i)}
                    deleteModeHandler={this.deleteModeHandler}
                    editModeHandler={this.editModeHandler}/>
            )
        });

        return (
            <ul className={style.Todos}>
                {todosComponents}
            </ul>
        );
    }
}

export default Todos;