import styled from "styled-components";
import { StyledButton } from "../StyledButton/StyledButton";




export const DetailButton = styled(StyledButton)`
background-color: ${props => props.theme.primary};


:hover{
    background-color: ${props => props.theme.primary};
    box-shadow:-0 0 5px 1px ${props => props.theme.primary};


}
`