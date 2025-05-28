import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import getWeatherEmoji from "../../js/getEmoji";
import getWeatherGIF from "../../js/getWeatherGIF";
import degToCompass from "../../js/getDirection";

const WeatherDisplay = ({ weatherInfo, error }) => {
  if (error) {
    return (
      <h3 style={{ color: "red" }}>Some error occured : {error.message}</h3>
    );
  }

  if (!weatherInfo) return null;
  const {
    weather: [{ id: code, description, icon }],
    main: { temp, humidity, feels_like, pressure, sea_level },
    wind: { speed, deg },
    sys: { sunrise, sunset },
  } = weatherInfo;

  return (
    <>
      <Card className="weather-card" sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          alt={description}
          height={200}
          image={getWeatherGIF(code, temp)}
          className="weather-icon"
        />
        <CardContent className="weather-card-content">
          <Typography gutterBottom variant="h5" component="div">
            <h2 className="weather-city">
              {weatherInfo.name
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")}
              <img
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="icon"
                height={42}
              />
            </h2>
            <span className="weather-description" style={{ fontWeight: 600 }}>
              {description}
            </span>
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component="span"
            className="weather-details"
          >
            <h2>🌡️ Temperature : {temp} &deg;C</h2>
            <h2>💧 Humidity : {humidity}%</h2>
            <h2>
              {getWeatherEmoji(feels_like)} Feels Like : {feels_like} &deg;C
            </h2>
            <h2>🌪️ Pressure : {pressure} hPa</h2>
            {sea_level && <h2>🌊 Sea Level : {sea_level} hPa</h2>}
            <h2>🍃 Wind : {speed} m/s</h2>
            <h2>🧭 Wind Direction : {deg}&deg;, {degToCompass(deg)}</h2>
            <h2>🌅 Sunrise : {new Date(sunrise * 1000).toLocaleTimeString()}</h2>
            <h2>🌇 Sunset : {new Date(sunset * 1000).toLocaleTimeString()}</h2>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default WeatherDisplay;
