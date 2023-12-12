import styled from "styled-components";
import { FaRegEye } from "react-icons/fa";
import { BiWind } from "react-icons/bi";
import { BsClouds } from "react-icons/bs";
import { LuDroplets } from "react-icons/lu";
import WeatherDetail from "./WeatherDetail";
import { breakpoints } from "../../utils/styledBreakpoints";

const WeatherDetails = ({ cityData }) => {
  const { clouds, main, visibility, wind } = cityData;
  const { humidity } = main;

  return (
    <Ul>
      <WeatherDetail
        icon={<FaRegEye className="icon" />}
        text={"Visibility"}
        value={`${visibility}ft`}
      />
      <WeatherDetail
        icon={<BiWind className="icon" />}
        text={"Wind"}
        value={`${wind.speed} mi/h`}
      />
      <WeatherDetail
        icon={<BsClouds className="icon" />}
        text={"Clouds"}
        value={`${clouds.all}%`}
      />
      <WeatherDetail
        icon={<LuDroplets className="icon" />}
        text={"Humidity"}
        value={`${humidity}%`}
      />
    </Ul>
  );
};

export default WeatherDetails;

const Ul = styled.ul`
  min-width: 300px;
  flex-basis: 30%;
  display: flex;
  flex-direction: column;

  ${breakpoints("flex-direction", "", [{ 700: "row" }])};
  ${breakpoints("border-top", "", [{ 700: "1px solid #11111155" }])};

  .icon {
    font-size: 4rem;
    margin-bottom: 1.5rem;

    ${breakpoints("font-size", "rem", [{ 1500: 2.5 }])};
  }

  li {
    border-bottom: 1px solid #11111155;

    ${breakpoints("border-right", "", [{ 700: "1px solid #11111155" }])};
  }

  li:last-child {
    border-bottom: none;

    ${breakpoints("border-right", "", [{ 700: "none" }])};
  }
`;
