import styled from "styled-components";
import { StyledButton } from "../StyledButton/StyledButton";


export const StyledAboutButton = styled(StyledButton)`

background-color: ${props => props.theme.light.extra};
color: black;

&:hover{
    box-shadow:-0 0 5px 1px ${props => props.theme.light.extra};
}
`