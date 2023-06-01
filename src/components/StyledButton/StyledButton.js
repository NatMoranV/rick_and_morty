import styled from "styled-components";

export const StyledButton = styled.button`

border: none;
border-radius: 24px;
padding: 8px 16px;
cursor: pointer;
color: ${props => props.theme.light.text};

transition: all 0.3s ease;
font-weight: 600;

:hover{

    transform: scale(1.1);
    font-weight: 800;
    
}

`