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
import { StyledFavButton } from "../AddFavButton/StyledAddFavButton";



const Card = ({ onClose, id, image, name, addFav, removeFav, myFavorites }) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (myFavorites && myFavorites.length) {
      myFavorites.forEach((fav) => {
        if (fav.id === id) {
          setIsFav(true);
        }
      });
    }
  }, [myFavorites]);

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav({ id, image, name });
    setIsFav(!isFav);
  };

  return (
    <CardContainer>
      {
        <StyledFavButton className="favButton" onClick={handleFavorite}>
          {isFav ? (<FontAwesomeIcon icon={faHeart} className="isFav" />
          ) : ( <FontAwesomeIcon icon={faHeart} />)}
        </StyledFavButton>
      }

      <CloseButton className="closeButton" onClick={() => onClose(id)}>
        <FontAwesomeIcon icon={faXmark} />
      </CloseButton>
      <LazyLoadImage src={image} height={300} width={300} effect="blur" />
      <h6>{name}</h6>
      <NavLink style={{ marginTop: "auto" }} to={`/detail/${id}`}>
        <DetailButton>Ver más</DetailButton>
      </NavLink>
    </CardContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(Card);
