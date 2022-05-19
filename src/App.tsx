import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type taskType={
    id:number,titleTask:string,isDone:boolean
}

function App() {
    const [tasks, setTasks]=useState([
        {id:1,titleTask:'HTML',isDone:false},
        {id:2,titleTask:'CSS',isDone:false},
        {id:3,titleTask:'REact',isDone:true},
    ])
    const removeTask=(id:number)=>{
        setTasks(tasks.filter(el=>el.id!==id))
    }

    return (
        <div className="App">
           <Todolist title={'What to learn'} tasks={tasks} removeTask={removeTask}/>
        </div>
    );
}

export default App;
