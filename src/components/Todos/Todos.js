import React, {Component} from "react";
import Todo from "../Todo/Todo";
import style from "./style.css";

class Todos extends Component{

    render = ()=>{
        console.log(this.props);
        const todosComponents = this.props.todos.map((todo, i)=>{
            return (
                <Todo key={i}
                    deleteMode={this.props.deleteMode === i}
                    editMode={this.props.editMode.includes(i)}
                    data={todo}
                    onToggle={()=>this.props.onTodoClick(i)}
                    onEdit={this.props.onEditTodo(i)}
                    onDelete={()=>this.props.onDeleteTodo(i)}
                    toggleDeleteMode={this.props.toggleDeleteMode}
                    toggleEditMode={this.props.toggleEditMode}/>
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