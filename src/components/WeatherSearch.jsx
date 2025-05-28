import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import CardMedia from "@mui/material/CardMedia";
import WeatherDisplay from "./WeatherDisplay";

const WeatherSearch = () => {
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const URL = `${`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`}`;

  const getWeatherData = async (city) => {
    if (!city) return;
    try {
      let res = await fetch(URL);
      if (!res.ok) {
        throw new Error("City not found");
      }

      let data = await res.json();
      // console.log(data);
      setWeatherInfo(data);
      setError(null);
    } catch (err) {
      setError(err);
      setWeatherInfo(null);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getWeatherData(city);
    setCity("");
  };

  return (
    <>
      <WeatherForm
        city={city}
        setCity={setCity}
        handleSearch={handleSearch}
        weatherInfo={weatherInfo}
        error={error}
      />
    </>
  );
};

const WeatherForm = ({ city, setCity, handleSearch, weatherInfo, error }) => {
  return (
    <>
      <div className="weather-container">
        <h2 className="weather-title">Weather Forecast</h2>
        <Box
          component="form"
          onSubmit={handleSearch}
          className="weather-form"
          sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="on"
        >
          <TextField
            id="outlined-basic"
            label="Enter City"
            variant="outlined"
            name="city-name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="weather-input"
          />
          <CardMedia
            component="img"
            alt="theme-logo"
            style={{ borderRadius: "10px", position: "top" }}
            height="56"
            image="https://t4.ftcdn.net/jpg/09/32/31/81/360_F_932318149_JzqsBT548EOzMNJbF18Nxx4mLfkNLbHc.jpg"
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          startIcon={<SearchIcon />}
          disabled={city.trim() === ""}
          onClick={handleSearch}
          className="weather-search-btn"
        >
          Search
        </Button>

        <WeatherDisplay weatherInfo={weatherInfo} error={error} />
      </div>
    </>
  );
};

export default WeatherSearch;
