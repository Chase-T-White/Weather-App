import { useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import { updateStorage } from "../functions/storageFunctions";
import selectWeatherIcon from "../functions/selectWeatherIcon";
import axiosRequestString from "../functions/axiosRequestString";
import duplicatesCheck from "../functions/duplicatesCheck";
import CityWeather from "../components/cityWeather/CityWeather";

const City = () => {
  const {
    isError,
    setIsError,
    setIsLoading,
    search,
    setCurrentView,
    locationsList,
    setLocationsList,
    fetchWeatherBgImage,
  } = useGlobalContext();

  const fetchSearchedLocationData = async () => {
    const searchingFor = !search
      ? window.location.href.split("/").pop()
      : search;

    if (isError) {
      setIsError(false);
    }

    if (
      locationsList.length > 1 &&
      duplicatesCheck(locationsList, searchingFor)
    ) {
      return;
    }

    setIsLoading(true);

    const requestString = axiosRequestString("", searchingFor);

    try {
      const { data } = await axios(requestString);

      const weatherIcon = selectWeatherIcon(data.weather[0].main);

      const conditionImg =
        (await fetchWeatherBgImage(data.weather[0].main)) ||
        "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

      const updatedWeatherData = { ...data, conditionImg, weatherIcon };

      setLocationsList([...locationsList, updatedWeatherData]);
      setCurrentView(searchingFor);
      updateStorage([...locationsList, updatedWeatherData]);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchedLocationData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <>
      <CityWeather />
    </>
  );
};

export default City;
