import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Article>
      <img
        src="https://i.imgur.com/00h26Sj_d.webp?maxwidth=520&shape=thumb&fidelity=high"
        alt="Not that road"
      />
      <p>
        Dawg, if the page you're looking for is not in our records then it
        doesn't exist.
      </p>
      <Link to="/" className="link">
        Home
      </Link>
    </Article>
  );
};

export default ErrorPage;

const Article = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 3rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .link {
    font-size: 1.5rem;
    color: white;
    padding: 0.5rem 1.5rem;
    text-decoration: none;
    background-color: #11111155;
    border-radius: 5px;
    box-shadow: 0 0 5px 0.25px #111111ff;
    transition: all 0.3s ease-out;

    &:hover {
      background-color: black;
    }
  }
`;
