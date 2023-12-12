export default function selectWeatherIcon(condition) {
  let iconLink;
  switch (condition) {
    case "Thunderstorm":
    case "Drizzle":
    case "Rain":
      iconLink = "https://cdn-icons-mp4.flaticon.com/512/6455/6455055.mp4";
      break;
    case "Snow":
      iconLink = "https://cdn-icons-mp4.flaticon.com/512/6455/6455058.mp4";
      break;
    case "Mist":
    case "Fog":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Sand":
    case "Ash":
      iconLink = "https://cdn-icons-mp4.flaticon.com/512/6454/6454995.mp4";
      break;
    case "Squall":
      iconLink = "https://cdn-icons-mp4.flaticon.com/512/8793/8793355.mp4";
      break;
    case "Tornado":
      iconLink = "https://cdn-icons-mp4.flaticon.com/512/11688/11688571.mp4";
      break;
    case "Clouds":
      iconLink = "https://cdn-icons-mp4.flaticon.com/512/6455/6455024.mp4";
      break;
    default:
      iconLink = "https://cdn-icons-mp4.flaticon.com/512/6455/6455017.mp4";
  }

  return iconLink;
}
