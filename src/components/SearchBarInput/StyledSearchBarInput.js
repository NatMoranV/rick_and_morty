import styled from "styled-components";

export const StyledSearchBarInput = styled.input`
  width: 15em;
  border: none;

  border-radius: 16px;
  background-color: white;

  color: black;
  font-weight: 900;
  padding-left: 16px;
  transition: all 0.3s ease;

  :focus,
  :hover {
    outline: none;
    transform: scale(1.03);
    box-shadow: -0 0 5px 1px white;
  }
`;
