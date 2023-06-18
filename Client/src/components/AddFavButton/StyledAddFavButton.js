import styled from "styled-components";
import { StyledButton } from "../StyledButton/StyledButton";

export const StyledFavButton = styled.button`
  all: unset;
  display: none;
  position: absolute;
  top: 8px;
  left: 16px;
  cursor: pointer;
  font-size: xx-large;


  & .isFav {
    display: block;
    path {
      color: red;
      
    }
    
  }
`;
