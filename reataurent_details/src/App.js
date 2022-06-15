import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import data from './data.json';
import Restaurent from './Components/Restaurents';

function App() {

  const [resList, setResList]= useState(data);

  const [values, setValues] = useState({
    name:"",
    cost_of_one:"",
    total_vote:"",
});

const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setValues({...values,[name]:value})

    console.log(values);
};

const handleSubmit = (e)=>{
    e.preventDefault();
    //console.log(values)
     let obj=({...values, id:new Date().getTime().toString()});
     obj.payment_methods={'cash':true, 'card':true, 'upi':false};
     obj.url="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/o5uinugopgrpowjofyuh"
     obj.categories = ["veg"];

     console.log(obj);

     setResList([...resList, obj]);
     setValues({name :"", cost_of_one:"", total_vote:""})


}

  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
            <p>Add Resturent</p>
            <input type="text"
            value = {values.name}
            placeholder="Enter name"
            name = "name"
            onChange = {handleChange}
            />

            <input type="Number" 
            value = {values.cost_of_one}
            placeholder="Enter cost"
            name = "cost_of_one"
            onChange = {handleChange}
            />
            <input type="number" 
            value ={values.total_vote}
            placeholder="Enter toal_vote"
            name = "total_vote"
            onChange = {handleChange}
            />
            <input type="submit" value="Add"/>

        </form>

     {resList.map(res=>{
            return <Restaurent key={res.id} res={res}/>
        })}
    </div>
  );
}

export default App;
