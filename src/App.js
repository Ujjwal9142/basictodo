import React, { useState } from 'react';
import './App.css';
import Showtodo from './Showtodo';

function App() {
  const [todolist, setTodolist] = useState([]);
  const [input, setInput] = useState('');
  const addTodo = () => {
    if(input.length){
      setTodolist([...todolist, {id: todolist.length + 1, text: input.trim()}]);
      setInput('');
    } else{
      alert('Please enter a valid ToDo');
    }
  }
  return (
    <div className="app">
      <h1 className="header">My ToDos</h1>
      <input className="input" value={input} onChange={event => setInput(event.target.value)} placeholder="Enter your ToDo here"></input>
      <button className="add" onClick={addTodo}>ADD NEW</button>   
      {
        (todolist.length ? <Showtodo todos={todolist} setTodos={setTodolist}/>: <h5>You have no todos left!</h5>)
      }    
    </div>
  );
}

export default App;
