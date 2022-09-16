import React,{ useState } from 'react';
import Todos from './Todos';
import NewTodo from './NewTodo';
import {v4 as uuidv4} from 'uuid';
const dummyTodo = [
    {
        id:1,
        title:'Todo App',
        dec:'Our App is good',
    },
    {
        id:2,
        title:'React app',
        dec:'Our App is good',
    },
    {
        id:3,
        title:'Angular Js',
        dec:'Our App is good',
    }
]
const TodoApp = ()=>{
    const [todos, setTodos] = useState([]);
    
    const handleChange = (todo)=>{
       setTodos((prevTodo)=>{
        return [...prevTodo, {id: uuidv4(),todo}]
       })
    }
    const handleRemove = (id)=>{
        const filterTodo = todos.filter((todo)=> todo.id !== id);
        setTodos(filterTodo);
    }


    return(
        <div className="todo py-5">
         
            <NewTodo onChangeTodo={handleChange}/>
            <Todos todos={todos} onRemoveTodo={handleRemove}/>
        </div>
    )
}
export default TodoApp;