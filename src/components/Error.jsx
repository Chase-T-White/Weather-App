import styled from "styled-components";

export default Error = () => {
  return (
    <Article>
      <img src="https://imgur.com/HNpdON2.jpg" alt="Error butthole" />
      <h2>
        O geez man looks like something's wrong yo...
        <br />
        uhh try again maybe?
      </h2>
    </Article>
  );
};

const Article = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  h2 {
    font-size: 36px;
    max-width: 900px;
  }
`;
