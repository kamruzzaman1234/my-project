import React,{useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import './Todo.css';

const NewTodo = (props)=>{
    const [todo, setTodo] = useState({title: "", dec: ""});
    const {title,dec} = todo;

    const changeHandle = (e)=>{
        const name = e.target.name;
        setTodo((oldTodo)=>{
            return{...oldTodo, [name]: e.target.value}
        })
       }

    const handleSubmit = (e)=>{
        e.preventDefault();
        props.onChangeTodo(todo);
        setTodo({title: "", dec: ""});
    }
  
    return(
        <div cclassName="py-5 newTodo">
            <div className="container">
                <h4 className="text-center hi">Tell Your Deteals</h4>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="notification">
                        <h4>Notification details</h4>
                        <p>Welcome to our page.If you don't find what you like
                         on our side,
                         then the right side is where you can write your comments</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="" className="display-6 text-dark">Product Quality :</label>
                        <input type="text" id="title" className="form-control" placeholder="Your comments"
                        value={title} name="title" onChange={changeHandle}/>
                    </div>

                    <div>
                        <label htmlFor="" className="display-6 text-dark">How is our side :</label>
                        <textarea type="text" id="dec" className="form-control" placeholder="Your comments"
                        value={dec} name="dec" onChange={changeHandle}/>
                    </div>
                    <button type="submit" className="btn btn-success mt-3">
                        Your Comments</button>
                </form>
                    </div>
                </div>
              
            </div>
        </div>
    )
}
export default NewTodo;