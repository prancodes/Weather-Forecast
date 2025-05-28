const weatherCode = {
  100: "https://t4.ftcdn.net/jpg/09/32/31/81/360_F_932318149_JzqsBT548EOzMNJbF18Nxx4mLfkNLbHc.jpg",
  200: "https://i.pinimg.com/originals/31/e3/e7/31e3e72a22783c2c771bace1ccf51969.gif",
  300: "https://www.icegif.com/wp-content/uploads/2024/09/rain-day-icegif-12.gif",
  500: "https://i.pinimg.com/originals/f0/d1/65/f0d16561ae98574833c1b62433277788.gif",
  600: "https://i.pinimg.com/originals/c2/6d/e1/c26de1ef5a9885a6a4c83039c8d09cd7.gif",
  700: "https://i.pinimg.com/originals/26/9d/c6/269dc648ad479c2c72436d06a4117762.gif",
  800: "https://media2.giphy.com/media/6dVav0AfQ0KRUQLxpb/giphy.gif?cid=6c09b9529pizsl3236dfygugd1byww2ku32246dpftf24rxq&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
  801: "https://i.makeagif.com/media/1-20-2017/Dcv7Ly.gif",
  802: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmE1ZjFlcm11OTM1bDZ4N3ExN3dkNjh3ZWRtNmRlYzA5bWVqcHYycCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lOkbL3MJnEtHi/giphy.gif",
  803: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmhsdHNwc3k2c3l3cGg0YWZvMnFjZDY1ZnZ4MDdnamZpb3h1a2RlcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AdwzrcftXDkZtu1hBF/giphy.gif",
  804: "https://i.pinimg.com/originals/40/49/c7/4049c772b15e443e8d7d68e91ef1cc66.gif",
};

const getWeatherGIF = (code, temp) => {
  if (temp < 0) {
    return weatherCode[600];
  }

  if (weatherCode[code]) {
    return weatherCode[code];
  }

  // INFO: Fallback to group 200-232, 300-332...
  const group = Math.floor(code / 100) * 100;

  if (weatherCode[group]) {
    return weatherCode[group];
  }

  return weatherCode[100];
};

export default getWeatherGIF;