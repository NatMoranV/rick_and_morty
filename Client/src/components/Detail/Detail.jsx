import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { CloseButton } from "../CloseButton/StyledCloseButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { StyledDetailContainer } from "./StyledDetail";

export const Detail = ({ onClose }) => {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledDetailContainer>
        {character.image && <img src={character.image} />}
        <div className="info">
          {character.name && <h6>Name: {character.name}</h6>}
          {character.status && <span>Status: {character.status}</span>}
          {character.species && <span>Species: {character.species}</span>}
          {character.gender && <span>Gender: {character.gender}</span>}
          {character.origin && <span>Origin: {character.origin.name}</span>}
        </div>
        <NavLink to={`/home`}>
          <CloseButton className="closeButton">
            <FontAwesomeIcon icon={faXmark} />
          </CloseButton>
        </NavLink>
      </StyledDetailContainer>
    </div>
  );
};
