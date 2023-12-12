import { useState } from "react";
import { GiBoomerangSun } from "react-icons/gi";
import { IoMdMenu } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa6";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SearchForm from "./SearchForm";
import CitiesList from "./CitiesList";
import CountryIcon from "./CountryIcon";
import { useGlobalContext } from "../../context";
import { breakpoints } from "../../utils/styledBreakpoints";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const { currentLocationData, setCurrentView } = useGlobalContext();

  const country =
    currentLocationData !== null ? currentLocationData.sys.country : null;
  const navigate = useNavigate();

  const handleClick = () => {
    setCurrentView("home");
    navigate("/");
  };

  return (
    <Aside style={{ left: `${showNav ? "0" : "-325px"}` }}>
      <div className="modalNav" onClick={() => setShowNav(!showNav)}>
        {!showNav ? (
          <IoMdMenu className="modalNav-icon" />
        ) : (
          <FaChevronLeft className="modalNav-icon" />
        )}
      </div>
      <div className="logo-container">
        <GiBoomerangSun className="logo" />
        <br />
        Hot as Hell
        <br />
        Forecast
      </div>
      <div
        className="currentLocation-container"
        onClick={handleClick}
        title="Show city forecast"
      >
        <CountryIcon small={false} country={country} />
        <div className="currentLocation-text">
          <h3>Current Location</h3>
          {currentLocationData !== null && (
            <p>
              {currentLocationData.sys.country} - {currentLocationData.name}
            </p>
          )}
        </div>
      </div>
      <SearchForm />
      <CitiesList />
    </Aside>
  );
};

const Aside = styled.aside`
  min-width: 325px;
  padding: 3.25rem 1.5rem 0;
  border-right: 1px solid #00000055;
  background-color: #fff;
  top: 0;
  transition: all 0.3s ease-in-out;
  z-index: 100;

  ${breakpoints("position", "", [{ 1000: "absolute" }])};

  .modalNav {
    display: none;
    position: absolute;
    top: 0;
    right: -50px;

    width: 50px;
    aspect-ratio: 1;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #11111155;
    }

    ${breakpoints("display", "", [{ 1000: "flex" }])}
  }

  .modalNav-icon {
    font-size: 35px;
  }

  .logo-container {
    margin-bottom: 4rem;
    font-size: 14px;
  }

  .logo {
    font-size: 60px;
    color: #c40808;
  }

  .currentLocation-container {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 3rem;
    cursor: pointer;
  }

  .currentLocation-text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export default Navbar;
