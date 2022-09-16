import React from 'react';
import {BiTrash} from 'react-icons/bi';
import './Todo.css';

const Todo = (props)=>{
    const {title,dec} = props.todo;
    const {id} = props;
    const handleClick = (id)=>{
        props.onRemoveTodo(id);
    }
    return(
        
            
        <div className="col-md-4  p-5">
            <div className="todoApp bg-primary rounded" data-aos="zoom-in-up">
            <h3 className="bg-light rounded text-dark py-3">{title}</h3>
            <p className="bg-light rounded text-dark py-3">{dec}</p>
            <button className="btn btn-danger" onClick={()=>{handleClick(id)}}>  
            <BiTrash />
            </button>
            </div>
        </div>
        
    )
}
export default Todo;