import styled from "styled-components";
import { StyledCircleButton } from "../CircleButton/StyledCircleButton";



export const CloseButton = styled(StyledCircleButton)`

background-color: ${props => props.theme.light.red};
  display: none;
  position: absolute;
  top: 16px;
  right: 16px;

:hover{
    box-shadow: 0 0 5px 1px ${props => props.theme.light.red};
}


  /* align-items: center;
  justify-content: center;
  align-self: flex-end;
  width: 32px;
  height: 32px;
  background-color: red;
  /* position: relative; */
  /* z-index: 2; */
  /* border-radius: 50%;
  cursor: pointer;
 
  :hover{
    transform: scale(1.1);
    box-shadow:-0 0 5px 1px ${props => props.theme.light.red};
} */ 

`;
