import styled from "styled-components";




export const DetailButton = styled.button`
background-color: ${props => props.theme.light.extra};
color: ${props => props.theme.light.third};
border-radius: 24px;
padding: 8px 16px;
border: none;
font-size: 1em;
cursor: pointer;
transition: all 0.3s ease;

:hover{
    transform: scale(1.1);
    background-color: ${props => props.theme.light.primary};
color: ${props => props.theme.light.third};
    box-shadow:-0 0 5px 1px ${props => props.theme.light.primary};
    font-weight: 800 ;

}
`