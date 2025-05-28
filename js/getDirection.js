const degToCompass = (deg) => {
  const val = Math.floor((deg / 45) + 0.5) % 8;
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  return directions[val];
};

export default degToCompass;
