import {MdAdd} from 'react-icons/lib/md';
import React from "react";
import style from "./style.css";

const AddTodo = ({onClick})=>{

    return (
        <div onClick={onClick} className={style.AddTodo}>
            <MdAdd size={39} color="#99A0A6"/>
        </div>
    )
}

export default AddTodo;