import { useEffect, useState } from "react";
import axios from "axios";

const Countries = ()=>{

const [countries, setCountries]= useState([]);
const [value, setValue] = useState("");

const getCountries = ()=>{
    return axios({
    url: "http://localhost:8080/countries",
    method: "GET"
})
};

const addCountry = (value)=>{
    return axios({
        url :"http://localhost:8080/countries",
        method : "POST",
        data :{
            name: value
        }
    })

}




const handleClick = ()=>{
    getCountries().then(res=>{
        setCountries(res.data)
    })
}

const handleAddCountry = (value)=>{
    addCountry(value).then(getCountries().then(res=>{
        setCountries(res.data);
    }))
}

return(
    <>
   <button onClick={handleClick}>Click Me</button>
   <h1>Countries</h1>
   <select name="countries" id="">
        {
            countries.map(country=>{
                return <option value={country.name} key={country.id}>{country.name}</option>
            })
        }
   </select>
   <input   type='text'
            value = {value}
            placeholder ="Enter new country name"
            onChange = {(e=>{
                setValue(e.target.value);
            })}
   ></input>
   <button onClick={()=>handleAddCountry(value)}>Add Country</button>
    </>
)

}

export default Countries;