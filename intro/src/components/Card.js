import React from 'react';
import ReactDOM from 'react-dom/client';

function Card(props) {
    return (
      <div>
        <h1>{props.arr.name}</h1>
        <ul>
          {props.arr.type.map((e) => {
            return <li>{e}</li>;
          })}
        </ul>
      </div>
    );
  }

  export default Card;