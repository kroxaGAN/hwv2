import React, {KeyboardEvent, ChangeEvent, useState, ChangeEventHandler} from "react";
import {filterType, taskType} from "./App";
import './App.css';
import {AddItemForm} from "./Components/AddItemForm";
import {EditableSpan} from "./Components/EditableSpan";

type propsType = {
    title: string
    tasks: taskType[]
    removeTask:(id:string)=>void
    // setFilter:(filter:filterType)=>void
    addTask:(todolistId:string,value:string)=>void
    changeCheckBox:(id:string,status:boolean)=>void
    todolistId:string
    changeFilterTodolist:(todolistId:string,filter:filterType)=>void
    removeTodolist:(todolistId: string)=>void
    changeTodoTitle:(todolistId: string,newTitle:string)=>void
    changeTaskTitle:(todolistId: string, taskId:string, newTitle:string)=>void
}

export const Todolist: React.FC<propsType> = ({title, tasks,removeTask,...props}) => {
    const deleteButtonHandler=(id:string)=>{
        removeTask(id)
    }
    const filterButtonHandler=(filterValue:filterType)=>{
        props.changeFilterTodolist(props.todolistId,filterValue)
    }
    const changeCheckBoxHandler=(e:ChangeEvent<HTMLInputElement>,id:string)=>{
        props.changeCheckBox(id,e.currentTarget.checked)
    }
    const removeTodoHandler=()=>{
        props.removeTodolist(props.todolistId)
    }
    const addTaskHandler=(value:string)=>{
        props.addTask(props.todolistId,value)
    }
    const changeTodoTitleHandler=(newTitle:string)=>{
        props.changeTodoTitle(props.todolistId,newTitle)
    }
    const editTaskHandler=(taskId:string,newTitle:string)=>{
        props.changeTaskTitle(props.todolistId,taskId,newTitle)
    }

    return (
        <div>
            <EditableSpan title={title} callback={changeTodoTitleHandler}/>
            <button onClick={removeTodoHandler}>XXX</button>
            <AddItemForm callback={addTaskHandler}/>
            <ul>
                {
                    tasks.map(el => {
                            return <li key={el.id}>
                                <input type="checkbox" checked={el.isDone} onChange={(e)=>changeCheckBoxHandler(e,el.id)}/>
                                <EditableSpan title={el.titleTask} callback={(newTitle)=>editTaskHandler(el.id,newTitle)}/>
                                <button onClick={()=>deleteButtonHandler(el.id)}>DEL</button>
                            </li>
                        }
                    )
                }
            </ul>
            <div>
                <button onClick={()=>filterButtonHandler('all')}>All</button>
                <button onClick={()=>filterButtonHandler('active')}>Active</button>
                <button onClick={()=>filterButtonHandler('completed')}>Completed</button>
            </div>
        </div>
    )
}
