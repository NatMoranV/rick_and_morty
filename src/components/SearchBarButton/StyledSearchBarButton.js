import styled from "styled-components";

export const StyledButton = styled.button`

height: 32px;
width: 32px;
border-radius: 50%;
border: none;
border-left: none;
background-color: #0095C8;
font-size: 1em;
box-shadow:-0 0 5px 1px #0095C8;
cursor: pointer;

 :hover{
    transform: scale(1.1);
}

& path{
    color: black;
}

`