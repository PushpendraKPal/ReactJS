import {useState, useEffect} from "react";
import axios from 'axios';


export default function CountrySelector({countries,setSelectedCountry}){

const [value, setValue]= useState({hello:"singh"})
    return(
        <select>
            <option value={""}>Select Country</option>
            {
                countries.map(country=>{
                    return <option value={country} key={country.id}>{country.name}</option>
                })
            }
           
        </select>
    )

    
}