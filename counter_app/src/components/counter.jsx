import React, {useState} from 'react';
import '../styles/Counter.css'

const Counter = ({inetialVal})=>{

    const [count, setCount] = React.useState(inetialVal);

    return(
        <>
        <h1>Counter App</h1>
        <h2 className={count%2==0?'green':'red'}>{count}</h2>
        <button onClick={()=>{
            setCount(count+1);
        }}>Increment</button>
        <button onClick={()=>{
            (count>0)?setCount(count-1):setCount(0);
        }}>Decrement</button>
        <button onClick={()=>{
            setCount(count*2);
        }}>Double</button>
        </>
    );
}

export default Counter;