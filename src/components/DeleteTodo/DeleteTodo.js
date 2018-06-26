import React from "react";
import style from "./style.css";
import classnames from "classnames";

const DeleteTodo = ({onClick, id, show})=>{
    const className = classnames(style.DeleteTodo, {active: show});

    return (
        <li className={className}>
            <button>CANCEL</button>
            <button onClick={()=>onClick(id)}>DELETE</button>
        </li>
    );
};

export default DeleteTodo;