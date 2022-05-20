import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {Todolist} from "./Todolist";

export type taskType = {
    id: string, titleTask: string, isDone: boolean
}
export type filterType = 'all' | 'active' | 'completed'
export type todolistType = {
    todolistId: string, titleTodolist: string, filter: filterType
}

function App() {
    const todolistId1 = v1()
    const todolistId2 = v1()
    const [todolists, setTodolists] = useState<todolistType[]>([
        {todolistId: todolistId1, titleTodolist: 'What study', filter: 'all'},
        {todolistId: todolistId2, titleTodolist: 'What buy', filter: 'all'},
    ])
    const [tasks, setTasks] = useState({
        [todolistId1]: [
            {id: v1(), titleTask: 'HTML', isDone: false},
            {id: v1(), titleTask: 'HTML', isDone: true},
            {id: v1(), titleTask: 'CSS', isDone: false},
            {id: v1(), titleTask: 'REact', isDone: true},
            {id: v1(), titleTask: 'REact', isDone: true},
        ],
        [todolistId2]: [
            {id: v1(), titleTask: '222HTML', isDone: false},
            {id: v1(), titleTask: '2222HTML', isDone: true},
            {id: v1(), titleTask: '222CSS', isDone: false},
            {id: v1(), titleTask: 'REact222', isDone: true},
        ]
    })
    // const [filter, setFilter] = useState<filterType>('all')
    const removeTask = (id: string) => {
        // setTasks(tasks.filter(el => el.id !== id))
    }

    const addTask = (value: string) => {
        // setTasks([{id: v1(), titleTask: value, isDone: false}, ...tasks])
    }
    const changeCheckBox = (id: string, status: boolean) => {
        // setTasks(tasks.map(el => el.id === id ? {...el, isDone: status} : el))
    }
    const changeFilterTodolist = (todolistId: string, filter: filterType) => {
        setTodolists(todolists.map(el=>el.todolistId===todolistId ? {...el,filter:filter}:el))
    }
    const removeTodolist=(todolistId: string)=>{
        setTodolists(todolists.filter(el=>el.todolistId!==todolistId))
        delete tasks[todolistId]
    }

    return (
        <div className="App">
            {
                todolists.map(el => {
                        let filteredTasks = tasks[el.todolistId]
                        if (el.filter === 'active') {
                            filteredTasks = tasks[el.todolistId].filter(el => !el.isDone)
                        }
                        if (el.filter === 'completed') {
                            filteredTasks = tasks[el.todolistId].filter(el => el.isDone)
                        }

                        return <Todolist
                            key={el.todolistId}
                            todolistId={el.todolistId}
                            title={el.titleTodolist}
                            tasks={filteredTasks}
                            removeTask={removeTask}
                            // setFilter={setFilter}
                            addTask={addTask}
                            changeCheckBox={changeCheckBox}
                            changeFilterTodolist={changeFilterTodolist}
                            removeTodolist={removeTodolist}
                        />
                    }
                )
            }

        </div>
    );
}

export default App;
