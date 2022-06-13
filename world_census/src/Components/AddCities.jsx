import {useState, useEffect} from "react";
import axios from 'axios';
import CountrySelector from "./CountrySelector";


export default function AddCities({countries, handleAddCity}){

    const [value, setValue]=useState("");
    const [population, setPopulation] = useState(0);
   const [country, setSelectedCountry] = useState({})
return(
    <div>
        <p>If country dosen't have the desired city list, Please add city.</p>
        <CountrySelector countries={countries}/>
        <input 
        value = {value}
        onChange = {(e)=>
        setValue(e.target.value)
        }
        type="text" />
        <input 
        value = {value}
        onChange = {(e)=>
        setValue(e.target.value)
        }
        type="number" />
        <button onClick={()=>handleAddCity(value, "India", 58, 25, population)}></button>
    </div>
)
    
}