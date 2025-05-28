import "../css/weather.css";
import WeatherDisplay from "./WeatherDisplay";
import WeatherSearch from "./WeatherSearch";

export const Weather = () => {
  return (
    <>
      <WeatherSearch />
      <WeatherDisplay />
    </>
  );
};
