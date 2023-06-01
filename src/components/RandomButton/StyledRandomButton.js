import styled from "styled-components";
import { StyledCircleButton } from "../CircleButton/StyledCircleButton";


export const RandomButton = styled(StyledCircleButton)`

background-color: ${props => props.theme.light.secondary};


:hover{
    box-shadow: 0 0 5px 1px ${props => props.theme.light.secondary};
}



`