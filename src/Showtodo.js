import React, { useState } from 'react';
import './Showtodo.css';

const Showtodo = ({todos,setTodos}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [currTodo, setCurrTodo] = useState('');
    const [todoID, setTodoID] = useState(-1);

    const handleEditing = (id) => {
        todos.forEach((todo) => {
            if(todo.id === id){
                if(currTodo.length){
                    todo.text = currTodo;
                } else{
                    alert('Please enter a valid ToDo');
                }
          
            }
        })
        setCurrTodo('');
        setTodoID(-1);
        setIsEditing(false);
    }

    const removetodo = (id) => {
        const remain = todos.filter((todo) => {
            return todo.id !== id;
        })
        setTodos(remain);
    }

    return (
        <div className="showtodo">
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <div className="todo_container">
                            {isEditing ? 
                                    (todo.id === todoID ? 
                                        <div className="mainbox">
                                            <input placeholder={todo.text} value={currTodo} onChange={event => setCurrTodo(event.target.value)}></input> 
                                            <div className="button_container">
                                                <button onClick={() => handleEditing(todo.id)} className="edit">Save</button>
                                                <button onClick={() => removetodo(todo.id)} className="delete">Delete</button>
                                            </div>                 
                                        </div> : 
                                        <div className="mainbox">
                                            <h4>{todo.text}</h4>
                                            <div className="button_container">
                                                <button onClick={() => {
                                                    setIsEditing(true);
                                                    setTodoID(todo.id);
                                                }} className="edit">Edit</button>
                                                <button onClick={() => removetodo(todo.id)} className="delete">Delete</button>
                                            </div>                        
                                        </div>
                                    ) 
                                        :
                                        <div className="mainbox">
                                            <h4>{todo.text}</h4>
                                            <div className="button_container">
                                                <button onClick={() => {
                                                    setIsEditing(true);
                                                    setTodoID(todo.id);
                                                }} className="edit">Edit</button>
                                                <button onClick={() => removetodo(todo.id)} className="delete">Delete</button>
                                            </div>
                                        </div>
                                
                            } 
                        </div>
                    </li>
                )
                )}
            </ul>
        </div>
    );
};

export default Showtodo;