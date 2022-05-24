import React, {KeyboardEvent, ChangeEvent, useState, ChangeEventHandler} from "react";
import {filterType, taskType} from "./App";
import './App.css';
import {AddItemForm} from "./Components/AddItemForm";
import {EditableSpan} from "./Components/EditableSpan";

type propsType = {
    title: string
    tasks: taskType[]
    removeTask: (todolistId: string,id: string) => void
    addTask: (todolistId: string, value: string) => void
    changeCheckBox: (todolistId: string,id: string, status: boolean) => void
    todolistId: string
    changeFilterTodolist: (todolistId: string, filter: filterType) => void
    removeTodolist: (todolistId: string) => void
    changeTaskTitle:(todolistId: string,id: string,title:string)=>void
    changeTodoTitle:(todolistId: string,title:string)=>void
}

export const Todolist: React.FC<propsType> = ({title, tasks, removeTask, ...props}) => {
    const deleteButtonHandler = (id: string) => {
        removeTask(props.todolistId,id)
    }
    const filterButtonHandler = (filterValue: filterType) => {
        props.changeFilterTodolist(props.todolistId, filterValue)
    }
    const changeCheckBoxHandler = (e: ChangeEvent<HTMLInputElement>, id: string) => {
        props.changeCheckBox(props.todolistId,id, e.currentTarget.checked)
    }
    const removeTodoHandler = () => {
        props.removeTodolist(props.todolistId)
    }
    const addTaskHandler = (value: string) => {
        props.addTask(props.todolistId, value)
    }
    const changeTitleHandler = (title:string) => {
        props.changeTodoTitle(props.todolistId,title)
    }
    const changeTaskTitleHandler=(title:string,taskId:string)=>{
        props.changeTaskTitle(props.todolistId,taskId,title)
    }

    return (
        <div>
            <EditableSpan title={title} callback={changeTitleHandler}/>
            <button onClick={removeTodoHandler}>del todo</button>
            <AddItemForm callback={addTaskHandler}/>
            <ul>
                {
                    tasks.map(el => {
                            return <li key={el.id}>
                                <input type="checkbox" checked={el.isDone}
                                       onChange={(e) => changeCheckBoxHandler(e, el.id)}/>
                                <EditableSpan title={el.titleTask} callback={(title)=>changeTaskTitleHandler(title,el.id)}/>
                                <button onClick={() => deleteButtonHandler(el.id)}>DEL</button>
                            </li>
                        }
                    )
                }
            </ul>
            <div>
                <button onClick={() => filterButtonHandler('all')}>All</button>
                <button onClick={() => filterButtonHandler('active')}>Active</button>
                <button onClick={() => filterButtonHandler('completed')}>Completed</button>
            </div>
        </div>
    )
}
