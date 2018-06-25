import React from "react";
import style from "./style.css";
import {MdDone} from "react-icons/lib/md";
import classnames from "classnames";
import Pressed from "../../helpers/Pressed";
import DeleteTodo from "../DeleteTodo/DeleteTodo";

const Todo = ({todo, changeDescriptionHandler, id, saveHandler, deleteModeHandler})=>{
    const checkBoxColor = todo.active ? "#051A29":"#FBFBFB";
    let description = null;

    if(todo.editMode){
        const classes = `${style["description-input"]} ${style.description}`
        description = <input type="text" onKeyUp={(e)=>saveHandler(e, id)} autoFocus defaultValue={todo.description} className={classes}/>;
    }else{
        description = (
            <div onDoubleClick={()=>changeDescriptionHandler(id)} className={style.description}>
                {todo.description}
            </div>
        );
    }

    const editModeClasses = classnames(style['edit-mode'], {'active': todo.editMode});
    return (
        <React.Fragment>
            <Pressed time={500} handler={()=>deleteModeHandler(id)}>
                <li className={style.Todo}>
                    <div className={style.content}>
                        <div className={editModeClasses}></div>
                        {description}
                        <div className={style.checkButton}>
                            <MdDone size={29} color={checkBoxColor}/>
                        </div>
                    </div>
                </li>
            </Pressed>
            {todo.deleteMode 
                ? <DeleteTodo/>
                : null
            }
        </React.Fragment>
    );
};

export default Todo;