import logo from './logo.svg';
import './App.css';
import data from './data.json';
import Restaurent from './Components/Restaurents';

function App() {
  return (
    <div className="App">
     {data.map(res=>{
            return <Restaurent key={res.id} res={res}/>
        })}
    </div>
  );
}

export default App;
