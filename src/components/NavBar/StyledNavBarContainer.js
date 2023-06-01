import styled from "styled-components";

export const StyledNavBarContainer = styled.nav`
  display: flex;
  height: 7vh;
  width: 99.15%;
  position: fixed;
  top: 0;
  z-index: 10;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);

  &.hidden{
    display: none;
  }
`;
