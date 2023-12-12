import styled from "styled-components";
import { breakpoints } from "../../utils/styledBreakpoints";

const WeatherDetail = ({ icon, text, value }) => {
  return (
    <Li>
      {icon}
      <h5>
        <span>{text}</span>
        <span>{value}</span>
      </h5>
    </Li>
  );
};

export default WeatherDetail;

const Li = styled.li`
  flex: 1 1 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  border-left: 5px solid transparent;
  transition: 0.3s ease-in-out;

  ${breakpoints("align-items", "", [{ 1500: "center" }])};

  h5 {
    width: 100%;
    display: flex;
    justify-content: space-between;

    ${breakpoints("flex-direction", "", [{ 700: "column" }])};
    ${breakpoints("align-items", "", [{ 700: "center" }])};
    ${breakpoints("gap", "rem", [{ 700: 0.5 }])};
  }

  span {
    font-size: 18px;
    font-weight: 500;

    ${breakpoints("font-size", "px", [{ 700: 12 }])};
  }

  &:hover {
    background-color: #11111122;
    border-left-color: black;
  }
`;
