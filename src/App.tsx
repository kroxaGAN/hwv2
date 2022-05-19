import React, {useState} from 'react';
import { v1 } from 'uuid';
import './App.css';
import {Todolist} from "./Todolist";

export type taskType={
    id:string,titleTask:string,isDone:boolean
}
export type filterType='all'|'active'|'completed'

function App() {
    const [tasks, setTasks]=useState([
        {id:v1(),titleTask:'HTML',isDone:false},
        {id:v1(),titleTask:'HTML',isDone:true},
        {id:v1(),titleTask:'CSS',isDone:false},
        {id:v1(),titleTask:'REact',isDone:true},
        {id:v1(),titleTask:'REact',isDone:true},
    ])
    const [filter,setFilter]=useState<filterType>('all')
    const removeTask=(id:string)=>{
        setTasks(tasks.filter(el=>el.id!==id))
    }
    let filteredTasks=tasks
    if (filter==='active'){
        filteredTasks=tasks.filter(el=>!el.isDone)
    }
    if (filter==='completed'){
        filteredTasks=tasks.filter(el=>el.isDone)
    }
    const addTask=(value:string)=>{
        setTasks([{id:v1(),titleTask:value,isDone:false},...tasks])
    }

    return (
        <div className="App">
           <Todolist
               title={'What to learn'}
               tasks={filteredTasks}
               removeTask={removeTask}
               setFilter={setFilter}
               addTask={addTask}
           />
        </div>
    );
}

export default App;
