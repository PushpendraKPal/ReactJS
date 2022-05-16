import logo from './logo.svg';
import './App.css';
import Card from './components/Card'

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

export default App;
