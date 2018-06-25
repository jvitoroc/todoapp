import React, {Component} from "react";
import style from "./style.css";
import {MdDone} from "react-icons/lib/md";
import classnames from "classnames";
import Pressed from "../../helpers/Pressed";
import DeleteTodo from "../DeleteTodo/DeleteTodo";

class Todo extends Component{

    completeTodoLocal = (id, complete)=>{
        if(!this.props.todo.deleteMode)
            this.props.completeTodo(id, complete)
    }
    
    render = ()=> {
        const {todo, changeDescriptionHandler, id, saveHandler, deleteModeHandler, deleteTodoHandler} = this.props;
        let description = null;
        const checkBoxColor = todo.completed ?  "#fbfbfb":"#051A29";

        if(todo.editMode){
            const classes = `${style["description-input"]} ${style.description}`
            description = <input type="text" onKeyUp={(e)=>saveHandler(e, id)} autoFocus defaultValue={todo.description} className={classes}/>;
        }else{
            description = (
                <div onDoubleClick={()=>changeDescriptionHandler(id)}
                    className={style.description}>
                    {todo.description}
                </div>
            );
        }
    
        const editModeClasses = classnames(style['edit-mode'], {'active': todo.editMode});
        const todoClasses = classnames(style.Todo, {'delete-mode': todo.deleteMode})
        return (
            <React.Fragment>
                <Pressed time={350}
                    handler={()=>deleteModeHandler(id, !todo.deleteMode)}>
                    <li className={todoClasses}>
                        <div className={style.content}>
                            <div className={editModeClasses}></div>
                            {description}
                            <div className={style.checkButton}
                                onClick={()=>{this.completeTodoLocal(id, !todo.completed)}}>
                                <MdDone size={29}
                                    state={'active'}
                                    color={checkBoxColor}/>
                            </div>
                        </div>
                    </li>
                </Pressed>
                <DeleteTodo deleteHandler={()=>deleteTodoHandler(id)}
                    cancelHandler={()=>deleteModeHandler(id, false)}
                    show={todo.deleteMode}/>
            </React.Fragment>
        );
    }
};

export default Todo;