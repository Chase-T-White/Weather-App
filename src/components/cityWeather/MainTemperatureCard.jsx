import styled from "styled-components";

const MainTemperatureCard = ({ cityData }) => {
  const { main, name, weather, conditionImg, weatherIcon } = cityData;
  const { temp } = main;
  const { main: condition } = weather[0];
  return (
    <MainTempCard style={{ backgroundImage: `url(${conditionImg})` }}>
      <div className="animatedIcon-container">
        <video className="video" src={`${weatherIcon}`} autoPlay loop></video>
        <div>{condition}</div>
      </div>
      <h1 className="temperature">
        {temp.toFixed(0)} <sup style={{ fontSize: "30px" }}>o</sup>F
      </h1>
      <p style={{ fontSize: "30px" }}>{name}</p>
    </MainTempCard>
  );
};

export default MainTemperatureCard;

const MainTempCard = styled.div`
  margin-bottom: 2rem;
  padding: 3rem;
  color: white;
  background-size: cover;
  background-position: center;

  .animatedIcon-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .video {
    width: 4rem;
    border-radius: 50vw;
  }

  .temperature {
    margin-bottom: 0.75rem;
    font-size: 60px;
  }
`;
