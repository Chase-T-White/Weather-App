import { useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import grabUserLocation from "../functions/grabUserLocation";
import selectWeatherIcon from "../functions/selectWeatherIcon";
import axiosRequestString from "../functions/axiosRequestString";
import CityWeather from "../components/cityWeather/CityWeather";

const Home = () => {
  const {
    isError,
    setIsError,
    setIsLoading,
    setCurrentView,
    currentLocationData,
    setCurrentLocationData,
    fetchWeatherBgImage,
  } = useGlobalContext();

  const fetchCurrentLocationData = async () => {
    if (currentLocationData) {
      return;
    }

    if (isError) {
      setIsError(false);
    }

    setIsLoading(true);

    try {
      const userLocation = await grabUserLocation();

      if (Array.isArray(userLocation)) {
        const requestString = axiosRequestString("current", userLocation);
        try {
          const { data } = await axios(requestString);

          const weatherIcon = selectWeatherIcon(data.weather[0].main);

          const conditionImg =
            (await fetchWeatherBgImage(data.weather[0].main)) ||
            "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

          const updatedWeatherData = { ...data, conditionImg, weatherIcon };

          setCurrentLocationData(updatedWeatherData);
          setCurrentView("home");
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          setIsError(true);
        }
      } else {
        setIsLoading(false);
      }
    } catch (e) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentLocationData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <CityWeather />
    </>
  );
};

export default Home;
