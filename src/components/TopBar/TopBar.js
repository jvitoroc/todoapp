import React from "react";
import AddTodo from "../../containers/AddTodo";
import style from "./style.css";

const TopBar = ()=>{
    return (
        <div className={style.TopBar}>
            <div className={style.title}>
                <h2>Todos</h2>
            </div>
            <div className={style['add-todo-wrapper']}>
                <AddTodo/>
            </div>
        </div>
    );
};

export default TopBar;