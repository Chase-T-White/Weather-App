import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useGlobalContext } from "../../context";

const SearchForm = () => {
  const { setSearch, isLoading } = useGlobalContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target[0].value);
    navigate(`/city/${e.target[0].value}`);
    e.target[0].value = "";
  };

  return (
    <Form onSubmit={handleSubmit}>
      <AiOutlineSearch style={{ fontSize: "20px" }} />
      <input
        className="input"
        type="text"
        placeholder="Search location..."
        disabled={isLoading}
      />
    </Form>
  );
};

export default SearchForm;

const Form = styled.form`
  max-width: 250px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
  padding: 10px 8px;
  border-radius: 10px;
  background-color: #11111111;
  transition: 0.1s ease-in;

  &:focus-within {
    outline: 2px solid black;
    transform: translateX(20px) scale(1.05);
  }

  .input {
    background-color: transparent;
    border: none;
  }

  .input:focus-within {
    outline: none;
  }
`;
