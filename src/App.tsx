import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type taskType={
    id:number,titleTask:string,isDone:boolean
}

function App() {
    const tasks1=[
        {id:1,titleTask:'HTML',isDone:false},
        {id:2,titleTask:'CSS',isDone:false},
        {id:3,titleTask:'REact',isDone:true},
    ]
    const tasks2=[
        {id:1,titleTask:'222HTML',isDone:true},
        {id:2,titleTask:'222CSS',isDone:false},
        {id:3,titleTask:'222REact',isDone:false},
    ]

    return (
        <div className="App">
           <Todolist title={'What to learn'} tasks={tasks1}/>
           <Todolist title={'What to buy'} tasks={tasks2}/>
        </div>
    );
}

export default App;
