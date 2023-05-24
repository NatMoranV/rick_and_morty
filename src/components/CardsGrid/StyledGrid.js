import styled from "styled-components";

export const Grid = styled.section`
  padding: 2em;
  display: grid;
  gap: 5em;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
  margin-top: 10vh;
`;
