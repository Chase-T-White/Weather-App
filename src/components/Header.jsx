import styled from "styled-components";
import { breakpoints } from "../utils/styledBreakpoints";

const Header = () => {
  return (
    <Heading>
      <div className="flex1">
        <h2>Here you can find a world wide weather forecast</h2>
      </div>
      <div className="flex2">
        <p>
          Your solution for worldwide weather forecasts! With our app, you can
          easily get accurate weather updates for any location around the globe.
          Our user-friendly interface and intuitive design make it easy to
          navigate and find the information you need.
        </p>
      </div>
    </Heading>
  );
};

export default Header;

const Heading = styled.header`
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 4.5rem;
  border-bottom: 1px solid #00000055;

  ${breakpoints("padding-inline", "rem", [{ 1500: 2 }])};
  ${breakpoints("height", "px", [{ 700: 125 }])};

  .flex1 {
    flex: 1 1 50%;
    margin-right: 0.5rem;

    ${breakpoints("text-align", "", [{ 1200: "center" }])}
    ${breakpoints("flex", "", [{ 1200: "1 1 100%" }])}
  }

  .flex2 {
    flex: 0 1.5 50%;

    ${breakpoints("display", "", [{ 1200: "none" }])};
  }

  h2 {
    max-width: 600px;
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.4;

    ${breakpoints("margin-inline", "", [{ 1200: "auto" }])};
    ${breakpoints("font-size", "", [{ 700: "clamp(1rem, 5vw , 2rem)" }])};
  }

  p {
    max-width: 450px;
    margin-left: auto;
    font-size: 14px;
    line-height: 1.6;
  }
`;
