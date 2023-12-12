export default function axiosRequestString(searchType, citySearch) {
  const baseWeatherURL = "https://api.openweathermap.org/data/2.5/weather?";
  const searchURL =
    searchType === "current"
      ? `lat=${citySearch[0]}&lon=${citySearch[1]}`
      : `q=${citySearch}`;
  const restURL = `&appid=${process.env.REACT_APP_API_KEY}&units=imperial`;

  return `${baseWeatherURL}${searchURL}${restURL}`;
}
