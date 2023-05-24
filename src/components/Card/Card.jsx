import { CardContainer } from "./StyledCardContainer";
import { CardImg } from "../CardImg/StyledCardImg";
import { CloseButton } from "../CloseButton/StyledCloseButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Card({onClose, id, image, name, status, species, gender, origin}) {
  return (
    <CardContainer>
      <CloseButton className="closeButton" onClick={() => onClose(id)}><FontAwesomeIcon icon={faXmark} /></CloseButton>
      <CardImg src={image} />
      <h6>Name: {name}</h6>
      <span>Status: {status}</span>
      <span>Species: {species}</span>
      <span>Gender: {gender}</span>
      <span>
        Origin:{" "}
        <a href={origin.url} target="_blank">
          {origin.name}
        </a>{" "}
      </span>
    </CardContainer>
  );
}
