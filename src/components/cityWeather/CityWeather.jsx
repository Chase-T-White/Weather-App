import styled from "styled-components";
import { useGlobalContext } from "../../context";
import TemperatureDetails from "./TemperatureDetails";
import WeatherDetails from "./WeatherDetails";
import Loading from "../Loading";
import Error from "../Error";
import DefaultDisplay from "../DefaultDisplay";

const CityWeather = () => {
  const {
    isLoading,
    isError,
    currentLocationData,
    locationsList,
    currentView,
  } = useGlobalContext();

  let cityData;

  if (currentView === "home") {
    cityData = currentLocationData;
  } else if (currentView !== null) {
    const selectedCity = locationsList.filter(
      (location) => location.name.toLowerCase() === currentView.toLowerCase()
    );
    [cityData] = selectedCity;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  if (currentView === "home" && currentLocationData === null) {
    return (
      <Article>
        <h2>
          To get your current location forecast, refresh the page or press F5 on
          your keyboard. Then allow permissions to grab your location!
        </h2>
      </Article>
    );
  }

  return (
    <article className="city-weather">
      {currentView ? (
        <>
          <TemperatureDetails cityData={cityData} />
          <WeatherDetails cityData={cityData} />
        </>
      ) : (
        <DefaultDisplay />
      )}
    </article>
  );
};

export default CityWeather;

const Article = styled.article`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    max-width: 600px;
    font-size: 24px;
    text-align: center;
  }
`;
