import React from 'react';
import Todo from './Todo';

const Todos = (props)=>{
    console.log(props.todos)
    return(
       <div className="todos mt-5" style={{background:'whitesmoke'}}>
          <div className="container">
           <div className="row">
           {props.todos.map((todo)=> (<Todo  todo={todo.todo}
            key={todo.id} id={todo.id} onRemoveTodo={props.onRemoveTodo}/>))}
           </div>
        </div>
       </div>
    )
}
export default Todos;