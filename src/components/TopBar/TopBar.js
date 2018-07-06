import React from "react";
import {MdAdd} from 'react-icons/lib/md';
import style from "./style.css";

const TopBar = ({changeStateHandler})=>{
    return (
        <div className={style.TopBar}>
            <div className={style.title}>
                <h2>Todos</h2>
            </div>
            <div className={style['add-todo-wrapper']}>
                <div onClick={changeStateHandler}>
                    <MdAdd size={39} color="#99A0A6"/>
                </div>
            </div>
        </div>
    );
};

export default TopBar;