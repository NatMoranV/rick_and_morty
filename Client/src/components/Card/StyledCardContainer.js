import styled from "styled-components";
import { StyledDiv } from "../StyledDiv/StyledDiv";

export const CardContainer = styled(StyledDiv)`

  img{
      width: 100%;
  height: auto;
  border-radius: 50%;
  }

  &:hover {
    .closeButton{
    display: block;  }

    .favButton{
      display: block;
    }

    transform: scale(1.02);
    backdrop-filter: blur(15px);
    box-shadow: 20px 20px 50px ${props => props.theme.shadowHover};
  }

`;
