import { BsArrowRight } from "react-icons/bs";
import { IoTrashOutline } from "react-icons/io5";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CountryIcon from "./CountryIcon";

const CityNav = ({
  city,
  temp,
  country,
  currentView,
  setCurrentView,
  removeCityData,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setCurrentView(city);
    navigate(`/city/${city}`);
  };

  return (
    <Li title="Show city forecast">
      <IoTrashOutline
        className="icon"
        title="Delete"
        onClick={() => removeCityData(city)}
      />
      <div className="clickable" onClick={handleClick}>
        <div className="container">
          <CountryIcon isSmall={true} country={country} />
          <p>{city}</p>
        </div>
        <div className="tempArrow">
          <p>
            {temp} <sup style={{ fontSize: "8px" }}>o</sup>F
          </p>
          {currentView !== null &&
            currentView.toLowerCase() === city.toLowerCase() && (
              <BsArrowRight className="activeIcon" />
            )}
        </div>
      </div>
    </Li>
  );
};

export default CityNav;

const Li = styled.li`
  font-size: 14px;
  cursor: pointer;
  position: relative;
  overflow-x: hidden;

  .icon {
    position: absolute;
    font-size: 25px;
    top: 50%;
    left: -20%;
    transform: translateY(-50%);
    transition: 0.3s ease-in-out;
  }

  .clickable {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: 0.3s ease-in-out;
  }

  &:hover {
    .icon {
      left: 0%;
    }

    .container {
      padding-left: 1.75rem;
    }
  }

  .container p {
    max-width: 150px;
    text-overflow: clip ellipsis;
  }

  .tempArrow {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .activeIcon {
    font-size: 1rem;
    color: #c40808;
  }
`;
