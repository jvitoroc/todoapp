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
                    onToggle={()=>this.props.onTodoClick(todo.id)}
                    onEdit={this.props.onEditTodo(todo.id)}
                    toggleDeleteMode={this.props.toggleDeleteMode}
                    toggleEditMode={this.props.toggleEditMode}/>
            )
        });

        return (
            <ul className={style.Todos}>
                <ReactCSSTransitionGroup transitionName="todo-state"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                {todosComponents}
                </ReactCSSTransitionGroup>
            </ul>
        );
    }
}

export default Todos;