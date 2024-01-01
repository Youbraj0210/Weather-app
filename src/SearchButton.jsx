import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchButton.css";
import {getData} from "./getWeatherData.js"

export const SearchButton = () => {
  let [city, setCity] = useState("");

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(city);
    getData(city);
    setCity("");
  };
 

  return (
    <div className="SearchButton">
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
    </div>
  );
};
