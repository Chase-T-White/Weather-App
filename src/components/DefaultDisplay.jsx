import styled from "styled-components";

export default function DefaultDisplay() {
  return (
    <Article>
      <h2>Search the forecast in your area or another city!</h2>
    </Article>
  );
}

const Article = styled.article`
  height: 100%;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 36px;
  }
`;
