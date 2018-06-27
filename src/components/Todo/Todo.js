import React, {Component} from "react";
import style from "./style.css";
import {MdDone} from "react-icons/lib/md";
import classnames from "classnames";
import Pressed from "../../helpers/Pressed";
import DeleteTodo from "../../containers/DeleteTodo";

class Todo extends Component{
    
    render = ()=> {
        const {data, onToggle, toggleEditMode, toggleDeleteMode, onEdit} = this.props;
        let description = null;
        const checkBoxColor = data.completed ?  "#fbfbfb":"#051A29";

        if(data.editMode){
            const classes = `${style["description-input"]} ${style.description}`
            description = <input type="text"
                            onKeyUp={(e)=>{
                                if(e.keyCode !== 13)
                                    return;
                                e.persist();
                                onEdit(e.target.value)
                            }}
                            autoFocus
                            defaultValue={data.description}
                            className={classes}/>;
        }else{
            description = (
                <div onDoubleClick={()=>toggleEditMode(data.id)}
                    className={style.description}>
                    {data.description}
                </div>
            );
        };

        const editModeClasses = classnames(style['edit-mode'], {'active': data.editMode});
        const todoClasses = classnames(style.Todo, {'delete-mode': data.deleteMode})
        return (
            <React.Fragment>
                <Pressed time={350}
                    handler={()=>toggleDeleteMode(data.id)}>
                    <li className={todoClasses}>
                        <div className={style.content}>
                            <div className={editModeClasses}></div>
                            {description}
                            <div className={style.checkButton}
                                onClick={()=>{onToggle(data.id)}}>
                                <MdDone size={29}
                                    color={checkBoxColor}/>
                            </div>
                        </div>
                    </li>
                </Pressed>
                <DeleteTodo cancelHandler={()=>toggleDeleteMode(data.id)}
                    id={data.id}
                    show={data.deleteMode}/>
            </React.Fragment>
        );
    }
};

export default Todo;