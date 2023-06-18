import styled from "styled-components";
import { StyledDiv } from "../StyledDiv/StyledDiv";

export const StyledFormContainer = styled.form`
  box-sizing: border-box;

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
  transition: all 0.3s ease;
  text-align: center;
  display: flex;
  margin: auto;
  width: 20%;
  flex-direction: column;
  position: relative;
  top: 400px;
  gap: 16px;
  align-items: center;

  div {
    display: flex;
    width: 300px;
    justify-content: space-between;
  }

  button {
    margin-top: 16px;
    width: 30%;
  }
`;
