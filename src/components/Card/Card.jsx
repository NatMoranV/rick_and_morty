import { CardContainer } from "./StyledCardContainer";
import { CloseButton } from "../CloseButton/StyledCloseButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faHeart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { DetailButton } from "../DetailButton/StyledDetailButton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { removeFav, addFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";


const Card =  ({
  onClose,
  id,
  image,
  name,
  addFav,
  removeFav,
  myFavorites,

}) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

  const handleFavorite = () =>{
    isFav ? removeFav(id) : addFav({id,
      image,
      name,})
      setIsFav(!isFav)
  };

  return (
    <CardContainer>
    {/* <button className="favButton" onClick={() => onClose(id)}>
        <FontAwesomeIcon icon={faHeart} />
      </button> */}
      {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}

      <CloseButton className="closeButton" onClick={() => onClose(id)}>
        <FontAwesomeIcon icon={faXmark} />
      </CloseButton>
      <LazyLoadImage src={image} height={300} widht={300} effect="blur" />
      <h6>{name}</h6>
      <NavLink style={{marginTop:'auto'}} to={`/detail/${id}`}><DetailButton>Ver más</DetailButton></NavLink>

    </CardContainer>
  );
}

const mapStateToProps =(state) =>{
return {
  myFavorites: state.myFavorites
}
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addFav: (character) =>{
      dispatch(addFav(character))
    },
    removeFav: (id) =>{
      dispatch(removeFav(id))
    }
  }
}

export default connect(null, mapDispatchToProps)(Card)
