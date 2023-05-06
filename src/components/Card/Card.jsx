import { CardContainer } from "../CardContainer/StyledCardContainer";
import { CardImg } from "../CardImg/StyledCardImg";
import { BgButton } from "../CloseButton/StyledBgButton";
import { CloseButton } from "../CloseButton/StyledCloseButton";

export default function Card(props) {
   return (
      <CardContainer>
          <CloseButton onClick={''}></CloseButton>
          <CardImg src={props.image} alt='' /> 
         <h6>Name: {props.name}</h6>
         <span>Status: {props.status}</span>
         <span>Species: {props.species}</span>
         <span>Gender: {props.gender}</span>
         <span>Origin: <a href={props.origin.url} target="_blank">{props.origin.name}</a> </span>
         <BgButton/>
      </CardContainer>
   );
}
