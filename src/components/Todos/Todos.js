import React from "react";
import Todo from "../Todo/Todo";
import style from "./style.css";

const Todos = ({todos, changeDescriptionHandler, saveHandler, deleteModeHandler, deleteTodoHandler, completeTodo})=>{
    const todosComponent = todos.map((todo, i)=>{
        return (
            <Todo key={i}
                id={i}
                todo={todo}
                changeDescriptionHandler={changeDescriptionHandler}
                saveHandler={saveHandler}
                deleteModeHandler={deleteModeHandler}
                deleteTodoHandler={deleteTodoHandler}
                completeTodo={completeTodo}/>
        )
    });

    return (
        <ul className={style.Todos}>
            {todosComponent}
        </ul>
    )
}

export default Todos;