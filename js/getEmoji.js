const getWeatherEmoji = (temp) => {
  if (temp >= 45) return "🫠";
  if (temp >= 35) return "🥵";
  if (temp >= 28) return "😓";
  if (temp >= 20) return "😊";
  if (temp >= 10) return "🤧";
  if (temp >= 5) return "🌬️";
  if (temp >= 0) return "🥶";
  if (temp >= -10) return "🌨️";
  return "🧊";
};

export default getWeatherEmoji;