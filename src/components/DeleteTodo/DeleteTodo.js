import React from "react";
import style from "./style.css";
import classnames from "classnames";

const DeleteTodo = ({onClick, id, show, cancelHandler})=>{
    const className = classnames(style.DeleteTodo, {active: show}, 'DeleteTodo');

    return (
        <li className={className}>
            <button onClick={cancelHandler}>CANCEL</button>
            <button onClick={()=>onClick(id)}>DELETE</button>
        </li>
    );
};

export default DeleteTodo;