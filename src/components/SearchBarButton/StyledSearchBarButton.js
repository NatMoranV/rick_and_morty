import styled from "styled-components";

export const StyledButton = styled.button`

height: 32px;
width: 32px;
border-radius: 50%;
border: none;
border-left: none;
background-color: ${props => props.theme.light.primary};
font-size: 1em;

cursor: pointer;
transition: all 0.3s ease;

 :hover{
    transform: scale(1.1);
    box-shadow:-0 0 5px 1px ${props => props.theme.light.primary};
}

& path{
    color: black;
}

`