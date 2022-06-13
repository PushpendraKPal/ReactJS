import {useState, useEffect} from "react";
import axios from 'axios';
import CountrySelector from "./CountrySelector";


export default function Country({countries, handleAddCountry, setSelectedCountry}){

    const [value, setValue]=useState("")


return(
    <div>
        <div>
            <p>Please Select country</p>
            <CountrySelector countries={countries} setSelectedCountry={setSelectedCountry}/>
        </div>
        <div>
            <p>If country is not in list, Please add country</p>
            <input 
            value = {value}
            onChange={e=>{
                setValue(e.target.value)
            }}
            placeholder='Enter Country'
            type='text'></input>
            <button onClick={()=>handleAddCountry(value)}>Add</button>
        </div>
    </div>
)
}