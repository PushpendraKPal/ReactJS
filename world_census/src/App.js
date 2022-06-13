import axios from 'axios';
import {useEffect, useState} from "react";
import './App.css';
import Country from './Components/Country';
import AddCities from './Components/AddCities';

function App() {

  const [cities, setCities]=useState([]);
  const [countries, setCountries]=useState([]);
  const [selectedCountry, setSelectedCountry ]= useState({});

  const getCountries = ()=>{
    return axios({
      url: "http://localhost:8080/countries",
      method: "GET"
    })
  };

  const getCities = ()=>{
    return axios({
      url: "http://localhost:8080/cities",
      method: "GET"
    })
  };

  const addCountry =(countryName)=>{
    return axios({
      url: "http://localhost:8080/countries",
      method: "POST",
      data:{
        name:countryName,
      }
    })
  };

  const addCity = ({cityName, country="India", country_id, id=null, population})=>{
    return axios({
      url: "http://localhost:8080/cities",
      method: "POST",
      data:{
        name:cityName,
        country,
        country_id,
        id,
        population
      }
    })
  };
/*
  const deleteCity = (id)=>{
    return axios({
      url: `http://localhost:8080/cities/${id}`,
      method: "DELETE"
    })
  }

  const editCity = (id)=>{
    return axios({
      url: `http://localhost:8080/cities/${id}`,
      method: "PUT",
      data:{
        name:cityName,
        country,
        country_id,
        id,
        population
      }
    })
  }
 */
  const handleGetCountries = ()=>{
    getCountries().then(res=>{
      setCountries(res.data)
    })
  };

  const handleAddCountry = (countryName)=>{
    addCountry(countryName)
    .then(res=>{
      handleGetCountries()
    })
  };

  const handleAddCity = (cityName, country, country_id, id, population)=>{
    addCity(cityName, country, country_id, id, population).then(res=>{
      getCities();
      console.log(res.data);
    })
  }

  useEffect(()=>{
    handleGetCountries()
  }, []);


  return (
    <div className="App">
     "hello react"
     <Country 
     countries = {countries} 
     handleAddCountry={handleAddCountry} 
     setSelectedCountry={setSelectedCountry}
     />
     <AddCities countries={countries} handleAddCity={handleAddCity}/>
    </div>
  );
}

export default App;
