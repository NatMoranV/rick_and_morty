import styled from "styled-components";


export const StyledDiv = styled.div`
  box-sizing: border-box;
  width: 360px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  box-shadow: 20px 20px 50px ${props => props.theme.shadow};
  background: ${props => props.theme.background};
  gap: 16px;
  border-radius: 16px;
  z-index: 1;
  border-top: 1px solid ${props => props.theme.border};
  border-left: 1px solid ${props => props.theme.border};
  backdrop-filter: blur(5px);
  transition: all 0.3s linear;
  text-align: center;
`