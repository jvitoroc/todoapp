import React, {Component} from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Todo from "../Todo/Todo";
import style from "./style.css";

class Todos extends Component{

    render = ()=>{
        const todosComponents = this.props.todos.map((todo, i)=>{
            return (
                <Todo key={i}
                    data={todo}
                    deleteMode={this.props.deleteMode === todo.id}
                    editMode={this.props.editMode.includes(todo.id)}
                    onToggle={()=>this.props.onTodoClick(todo.id)}
                    onEdit={this.props.onEditTodo(todo.id)}
                    toggleDeleteMode={this.props.toggleDeleteMode}
                    toggleEditMode={this.props.toggleEditMode}/>
            )
        });

        return (
            <ul className={style.Todos}>
                <ReactCSSTransitionGroup transitionName="todo-state"
                    transitionEnterTimeout={200}
                    transitionLeaveTimeout={200}>
                {todosComponents}
                </ReactCSSTransitionGroup>
            </ul>
        );
    }
}

export default Todos;