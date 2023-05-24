import styled from "styled-components";

export const RandomButton = styled.button`

background-color: yellow;
width: 32px;
height: 32px;
border-radius: 50%;
border: none;
box-shadow: 0 0 15px 2px yellow;
cursor: pointer;

:hover{
    transform: scale(1.1);
}


& path{
    color: black;
}

`