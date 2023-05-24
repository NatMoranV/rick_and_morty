import styled from "styled-components";

export const CloseButton = styled.div`
  display: none;
  position: absolute;
  top: 8px;
  right: 8px;

  align-items: center;
  justify-content: center;
  align-self: flex-end;
  width: 24px;
  height: 24px;
  background-color: red;
  /* position: relative; */
  z-index: 2;
  border-radius: 50%;
  cursor: pointer;
 
  :hover{
    transform: scale(1.1);
}

`;
