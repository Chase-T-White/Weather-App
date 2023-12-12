import styled from "styled-components";
import CityNav from "./CityNav";
import { useGlobalContext } from "../../context";

const CitiesList = () => {
  const { locationsList, currentView, setCurrentView, removeCityData } =
    useGlobalContext();

  return (
    <Ul>
      {locationsList.map((location) => {
        const { name, main, sys } = location;
        const temp = main.temp.toFixed(0);
        const country = sys.country;

        return (
          <CityNav
            key={location.id}
            city={name}
            temp={temp}
            country={country}
            currentView={currentView}
            setCurrentView={setCurrentView}
            removeCityData={removeCityData}
          />
        );
      })}
    </Ul>
  );
};

export default CitiesList;

const Ul = styled.ul`
  height: calc(100vh - 400px);
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: scroll;
  scrollbar-width: none;
  scrollbar-gutter: stable;
`;
