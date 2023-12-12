import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { checkStorage, updateStorage } from "./functions/storageFunctions";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState("");
  const [currentLocationData, setCurrentLocationData] = useState(null);
  const [locationsList, setLocationsList] = useState([]);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [currentView, setCurrentView] = useState("home");

  if (isFirstLoad) {
    checkStorage(setLocationsList);
    setIsFirstLoad(false);
  }

  // Fetching appropriate image that matches the weather conditions

  const fetchWeatherBgImage = (condition) => {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const { data } = await axios(
            `https://api.unsplash.com/search/photos?query=weather-outside-${condition}&page=1&per_page=1&client_id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`
          );
          const imgURL = data.results[0].urls.regular;
          resolve(imgURL);
        } catch (error) {
          reject(false);
        }
      })();
    });
  };

  const removeCityData = (city) => {
    const updatedList = locationsList.filter(
      (location) => location.name !== city
    );

    if (currentView.toLowerCase() === city.toLowerCase()) {
      navigate("/");
      setCurrentView("home");
    }

    updateStorage(updatedList);
    setLocationsList(updatedList);
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        isError,
        setIsError,
        currentLocationData,
        setCurrentLocationData,
        setSearch,
        search,
        locationsList,
        setLocationsList,
        currentView,
        setCurrentView,
        isFirstLoad,
        setIsFirstLoad,
        fetchWeatherBgImage,
        removeCityData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
