import styled from "styled-components";

const TemperatureCard = ({
  text,
  temp = null,
  description,
  conditionImg,
  country = null,
}) => {
  return (
    <TempCard style={{ backgroundImage: `url(${conditionImg})` }}>
      <p>{text}</p>
      {temp ? (
        <h2 style={{ fontSize: "48px" }}>
          {temp.toFixed(0)}
          <sup style={{ fontSize: "30px" }}>o</sup>
        </h2>
      ) : (
        <h2 style={{ fontSize: "48px" }}>{country}</h2>
      )}

      <small>{description}</small>
    </TempCard>
  );
};

export default TemperatureCard;

const TempCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  background-position: center;
  background-size: cover;

  p {
    margin-bottom: 0.5rem;
  }

  h2 {
    margin-bottom: 0.5rem;
  }
`;
