import logo from './logo.svg';
import './App.css';

var data = [
  {
    name: "Mobile operating operatingSystem",
    type: ["Android", "Blackberry", "iPhone", "Window Phone"]
  },
  {
    name: "Mobile Manufacturer",
    type: ["Samsung", "HTC", "Micromex", "Apple"]
  }
];

function App() {
  return (
    <div className="App">
      {data.map((e) => {
        return <Card arr={e} />;
      })}
    </div>
  );
}

// component

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

export default App;
