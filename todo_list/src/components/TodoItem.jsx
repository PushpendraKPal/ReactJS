import React from 'react';
import '../styles/TodoItem.css';


const TodoItem = ({todo})=>{

    const [chk, setChk] = React.useState(todo.status);

    const handleChange = ()=>{
    setChk(!chk);
    }


    return(
        <div className='item'>
            <div><input
            type='checkbox'
            checked = {chk}
            onChange = {handleChange}
            /></div>
            <div>{todo.text}</div>
            
        </div>
    )
}

export default TodoItem;