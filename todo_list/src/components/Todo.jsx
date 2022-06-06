import React from 'react';
import TodoList from './TodoList';
import '../styles/TodoItem.css';


const Todo = ()=>{

    const [query, setQuery] = React.useState("");

    const [todos, setTodos] = React.useState([]);

    const handleChange = (e)=>{
        let value = e.target.value;
        setQuery(value);
    } 

    const handleAdd = ()=>{
        if(query){
            let payload = {
                text : query,
                status : false
            }
            
            setTodos([...todos, payload]);
            
            setQuery("");
        }
    }

    return(
        <div>
        <h1>Todo List</h1>
        <div className='add'>
            <input  type="text"
                    placeholder='Enter new Todo'
                    onChange={handleChange}
                    value = {query}
                    />
            <button onClick={handleAdd}>Add</button>
        </div>
        <TodoList todos={todos}/>
        </div>

    )
}

export default Todo;