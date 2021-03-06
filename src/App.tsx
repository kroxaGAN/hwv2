import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {Todolist} from "./Todolist";
import {AddItemForm} from "./Components/AddItemForm";

export type taskType = {
    id: string, titleTask: string, isDone: boolean
}
export type filterType = 'all' | 'active' | 'completed'
export type todolistType = {
    todolistId: string, titleTodolist: string, filter: filterType
}
type assothiathionArray = {
    [key: string]: taskType[]
}

function App() {
    const todolistId1 = v1()
    const todolistId2 = v1()
    const [todolists, setTodolists] = useState<todolistType[]>([
        {todolistId: todolistId1, titleTodolist: 'What study', filter: 'all'},
        {todolistId: todolistId2, titleTodolist: 'What buy', filter: 'all'},
    ])
    const [tasks, setTasks] = useState<assothiathionArray>({
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
    const removeTask = (id: string) => {
        // setTasks(tasks.filter(el => el.id !== id))
    }

    const addTask = (todolistId: string, value: string) => {
        setTasks({...tasks, [todolistId]: [{id: v1(), titleTask: value, isDone: false}, ...tasks[todolistId]]})
    }
    const changeCheckBox = (id: string, status: boolean) => {
        // setTasks(tasks.map(el => el.id === id ? {...el, isDone: status} : el))
    }
    const changeFilterTodolist = (todolistId: string, filter: filterType) => {
        setTodolists(todolists.map(el => el.todolistId === todolistId ? {...el, filter: filter} : el))
    }
    const removeTodolist = (todolistId: string) => {
        setTodolists(todolists.filter(el => el.todolistId !== todolistId))
        delete tasks[todolistId]
    }
    const addTodoHandler=(value:string)=>{
        console.log(value)
        const todolistId=v1()
        setTodolists([{todolistId: todolistId, titleTodolist: value, filter: 'all'},...todolists])
        setTasks({[todolistId]:[],...tasks})
    }
    const changeTodoTitle=(todolistId: string, newTitle:string)=>{
        setTodolists(todolists.map(el=>el.todolistId===todolistId ?{...el,titleTodolist:newTitle}:el))
    }
    const changeTaskTitle=(todolistId: string, taskId:string, newTitle:string)=>{
        setTasks({...tasks,[todolistId]:tasks[todolistId].map(el=>el.id===taskId?{...el,titleTask:newTitle }:el)})
    }

    return (
        <div className="App">
            <AddItemForm callback={addTodoHandler}/>
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
                            changeTodoTitle={changeTodoTitle}
                            changeTaskTitle={changeTaskTitle}
                        />
                    }
                )
            }

        </div>
    );
}

export default App;
