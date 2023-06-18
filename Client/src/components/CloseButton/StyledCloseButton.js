import styled from "styled-components";
import { StyledCircleButton } from "../CircleButton/StyledCircleButton";



export const CloseButton = styled(StyledCircleButton)`

background-color: ${props => props.theme.red};
  display: none;
  position: absolute;
  top: 16px;
  right: 16px;

:hover{
    box-shadow: 0 0 5px 1px ${props => props.theme.red};
}
`;
