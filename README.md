# Weather Forecast

## Overview
The Weather App is a React-based application built with [Vite](https://vitejs.dev) that provides real-time weather information for cities worldwide. 
It features a clean, responsive design using [Material UI](https://mui.com/) components to enhance user experience on both desktop and mobile devices.

## Live Demo
Experience the live demo here: [Live Demo URL](https://live-demo-url.com)

## Features
- **City Weather Search:** Type the name of any city to fetch current weather details.

- **Real-time Data:** Uses the [OpenWeatherMap API](https://openweathermap.org/api) to provide live updates.

- **Detailed Weather Information:** Displays temperature, humidity, wind speed and direction, pressure, sea level (if available), sunrise, and sunset times.

- **Visual Enhancements:** Displays weather-specific GIFs and emoji based on temperature and weather conditions.

- **Responsive Design:** Ensures optimal layout and usability across different screen sizes.

## Folder Structure
```
Weather-App/
├── public/
│   └── favicon/
├── src/
│   ├── components/
│   │   ├── Weather.jsx
│   │   ├── WeatherSearch.jsx
│   │   └── WeatherDisplay.jsx
│   ├── css/
│   │   └── weather.css
│   ├── js/
│   │   ├── getWeatherGIF.js
│   │   ├── getEmoji.js
│   │   └── getDirection.js
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## End Note
Thank you for exploring the Weather App. We welcome your feedback and suggestions. Happy coding!
