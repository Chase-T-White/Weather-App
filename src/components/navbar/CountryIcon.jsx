import styled from "styled-components";

export default function CountryIcon({ isSmall, country }) {
  return (
    <Div small={isSmall}>
      {country !== null && (
        <img
          src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`}
          alt="Country flag"
        />
      )}
    </Div>
  );
}

const Div = styled.div`
  width: ${(props) => (props.small ? "1.85rem" : "2.5rem")};
  height: ${(props) => (props.small ? "1.85rem" : "2.5rem")};
  padding: ${(props) => (props.small ? "5px" : "8px")};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #11111111;
`;
