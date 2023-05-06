import styled from "styled-components";

export const CardContainer = styled.div`
  box-sizing: border-box;
  width: 360px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;

  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.1);
  gap: 16px;
  border-radius: 16px;
  z-index: 1;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  transition: all .3s ease;

  &:hover{
    transform: scale(1.02);
    backdrop-filter: blur(15px);
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  }
`;
