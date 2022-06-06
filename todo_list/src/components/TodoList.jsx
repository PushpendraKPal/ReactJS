import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos})=>{
    return(
        <div>
            
            
        {
             todos.map(todo=>{
                 return <TodoItem todo = {todo}/>
             })
        }
       
        </div>
    );
}

export default TodoList;