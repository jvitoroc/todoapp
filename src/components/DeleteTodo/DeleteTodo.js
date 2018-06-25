import React from "react";
import style from "./style.css";
import classnames from "classnames";

const DeleteTodo = ({show, deleteHandler, cancelHandler})=>{
    const className = classnames(style.DeleteTodo, {active: show});

    return (
        <li className={className}>
            <button onClick={cancelHandler}>CANCEL</button>
            <button onClick={deleteHandler}>DELETE</button>
        </li>
    );
};

export default DeleteTodo;