import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchButton.css";
import { getData } from "./getWeatherData.js";
import { DisplayCard } from "./DisplayCard";
import Alert from '@mui/material/Alert';

export const SearchButton = () => {
  let [city, setCity] = useState("");
  let [data, setData] = useState({
    city: "Delhi",
    temp: 10,
    humidity: 100,
    feels_like: 9.38,
    temp_min: 10,
    temp_max: 10,
    pressure: 15,
    weather: "mist",
  });
  let [err,setErr] = useState(false)

  let handleChange = (e) => {
    setCity(e.target.value);
  };
  

  let handleSubmit = async (e) => {
    try{
        e.preventDefault();
        console.log(city);
        let info = await getData(city);
        setData(info);
    }catch(e){
        setErr(true);
    }
  };

  return (
    <div className="SearchButton">
        {err && <Alert severity="error">the place doesnot exist!</Alert>}
      <form onSubmit={handleSubmit}>
        <h2>Weather App</h2>
        <TextField
          id="outlined-basic"
          label="Enter City name"
          variant="outlined"
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Seacrh
        </Button>
      </form>
      <br />
      <br />

      <DisplayCard data={data} />
    </div>
  );
};
