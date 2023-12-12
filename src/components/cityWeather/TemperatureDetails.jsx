import styled from "styled-components";
import TemperatureCard from "./TemperatureCard";
import MainTemperatureCard from "./MainTemperatureCard";
import { breakpoints } from "../../utils/styledBreakpoints";

const TemperatureDetails = ({ cityData }) => {
  const { main, sys, weather, conditionImg } = cityData;
  const { feels_like, temp_max, temp_min } = main;
  const { description } = weather[0];

  return (
    <MainContent>
      <MainTemperatureCard cityData={cityData} />
      <div className="tempCards-container">
        <TemperatureCard
          text={"Feels Like"}
          temp={feels_like}
          description={description}
          conditionImg={conditionImg}
        />
        <TemperatureCard
          text={"Max Temp"}
          temp={temp_max}
          description={description}
          conditionImg={conditionImg}
        />
        <TemperatureCard
          text={"Min Temp"}
          temp={temp_min}
          description={description}
          conditionImg={conditionImg}
        />
        <TemperatureCard
          text={"Country"}
          country={sys.country}
          description={description}
          conditionImg={conditionImg}
        />
      </div>
    </MainContent>
  );
};

export default TemperatureDetails;

const MainContent = styled.div`
  flex: 1 1 70%;
  display: flex;
  flex-direction: column;
  padding-block: 6rem 1rem;
  padding-inline: 4rem;
  border-right: 1px solid #11111155;

  ${breakpoints("padding-inline", "rem", [{ 1500: 2 }])};
  ${breakpoints("padding-block", "rem", [{ 1500: 1 }])};

  .tempCards-container {
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;

    ${breakpoints("grid-template-columns", "", [{ 1500: "repeat(2, 1fr)" }])}
    ${breakpoints("column-gap", "rem", [{ 1500: 1.5 }])}
    ${breakpoints("row-gap", "rem", [{ 1500: 0.5 }])}
  }
`;
