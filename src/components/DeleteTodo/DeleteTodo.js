import React from "react";
import style from "./style.css";

const DeleteTodo = ({})=>{
    return (
        <li className={style.DeleteTodo}>
            <button>CANCEL</button>
            <button>DELETE</button>
        </li>
    );
};

export default DeleteTodo;