import styled from "styled-components";

export const StyledDetailContainer = styled.div`
  box-sizing: border-box;
  margin: auto;
  width: 50vw;
  height: auto;
  padding: 2em;
  display: grid;
  gap: 5em;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
  align-items: center;
  padding: 16px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.1);
  gap: 16px;
  border-radius: 16px;
  z-index: 1;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;


  & .info{
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 1em;
  }

  &:hover {
    .closeButton{
    display: flex;
  }
    transform: scale(1.02);
    backdrop-filter: blur(15px);
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  }
`