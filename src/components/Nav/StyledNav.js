import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  height: 7vh;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 10;
  align-items: center;
  justify-content: space-between;
  padding: 5px 1vw;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
`;
