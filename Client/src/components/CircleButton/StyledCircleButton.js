import styled from "styled-components";
import { StyledButton } from "../StyledButton/StyledButton";


export const StyledCircleButton = styled(StyledButton)`
width: 32px;
height: 32px;
border-radius: 50%;
padding: 0;
align-items: center;
  justify-content: center;
  align-self: flex-end;
  width: 32px;
  height: 32px;
  position: relative;
  z-index: 2;
 border-radius: 50%;
  cursor: pointer; 


path{
    color: black;
}
`