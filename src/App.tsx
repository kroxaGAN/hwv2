import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type taskType={
    id:number,titleTask:string,isDone:boolean
}
export type filterType='all'|'active'|'completed'

function App() {
    const [tasks, setTasks]=useState([
        {id:1,titleTask:'HTML',isDone:false},
        {id:2,titleTask:'CSS',isDone:false},
        {id:3,titleTask:'REact',isDone:true},
    ])
    const [filter,setFilter]=useState<filterType>('all')
    const removeTask=(id:number)=>{
        setTasks(tasks.filter(el=>el.id!==id))
    }
    let filteredTasks=tasks
    if (filter==='active'){
        filteredTasks=tasks.filter(el=>!el.isDone)
    }
    if (filter==='completed'){
        filteredTasks=tasks.filter(el=>el.isDone)
    }


    return (
        <div className="App">
           <Todolist
               title={'What to learn'}
               tasks={filteredTasks}
               removeTask={removeTask}
               setFilter={setFilter}
           />
        </div>
    );
}

export default App;
