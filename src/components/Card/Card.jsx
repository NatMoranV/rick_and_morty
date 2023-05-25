import { CardContainer } from "./StyledCardContainer";
import { CardImg } from "../CardImg/StyledCardImg";
import { CloseButton } from "../CloseButton/StyledCloseButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { DetailButton } from "../DetailButton/StyledDetailButton";


export default function Card({
  onClose,
  id,
  image,
  name,
  // status,
  // species,
  // gender,
  // origin,
}) {
  return (
    <CardContainer>
      <CloseButton className="closeButton" onClick={() => onClose(id)}>
        <FontAwesomeIcon icon={faXmark} />
      </CloseButton>
      <CardImg src={image} />
      <h6>{name}</h6>
      <NavLink style={{marginTop:'auto'}} to={`/detail/${id}`}><DetailButton>Ver más</DetailButton></NavLink>
      {/* <span>Status: {status}</span>
      <span>Species: {species}</span>
      <span>Gender: {gender}</span>
      <span>Origin:{origin.name}</span> */}
    </CardContainer>
  );
}
