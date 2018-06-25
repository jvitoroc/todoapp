import React from "react";
import AddTodo from "../AddTodo/AddTodo";
import style from "./style.css";

const TopBar = ({addTodoHandler})=>{

    return (
        <div className={style.TopBar}>
            <div className={style.title}>
                <h2>Todos</h2>
            </div>
            <div className={style['add-todo-wrapper']}>
                <AddTodo onClick={addTodoHandler}/>
            </div>
        </div>
    );
};

export default TopBar;