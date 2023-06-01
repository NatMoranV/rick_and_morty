import { CardContainer } from "./StyledCardContainer";
import { CloseButton } from "../CloseButton/StyledCloseButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { DetailButton } from "../DetailButton/StyledDetailButton";
import { LazyLoadImage } from "react-lazy-load-image-component";


export default function Card({
  onClose,
  id,
  image,
  name,

}) {
  return (
    <CardContainer>
      <CloseButton className="closeButton" onClick={() => onClose(id)}>
        <FontAwesomeIcon icon={faXmark} />
      </CloseButton>
      <LazyLoadImage src={image} height={300} widht={300} effect="blur" />
      <h6>{name}</h6>
      <NavLink style={{marginTop:'auto'}} to={`/detail/${id}`}><DetailButton>Ver más</DetailButton></NavLink>

    </CardContainer>
  );
}
