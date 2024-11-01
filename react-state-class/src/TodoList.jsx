import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

 const TodoList = () => {

    const[todos,setTodos]=useState([{text : "sample task" , id : uuidv4()}])
    const[newTodo,setNewTodo]=useState("");

    const  addTodo = () => {
        if (newTodo.trim() === "") return; 
        setTodos((prevTodos)=>{
           return  [...prevTodos,{text : newTodo , id : uuidv4()}]
    })

        setNewTodo("")
    }

    function updateTodoValue(event){
        setNewTodo(event.target.value);
    }

  return (
    <div>
        <input type="text" placeholder="Add Task" value={newTodo} onChange={updateTodoValue} />
        <button onClick={addTodo}>Add</button>
        <br /><br /><br /><br /><br /><br />
        <hr />
        <h4>Todo List</h4>
        <ul>
            {
                todos.map((todo)=>(
                <li key={todo.id}>{todo.text}</li>)  )
            }

        </ul>
    </div>
  )
}

export default  TodoList;
