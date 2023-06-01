import { StyledButton } from "../SearchBarButton/StyledSearchBarButton";
import { StyledInput } from "../StyledInput/StyledInput";
import { StyledSearchBar } from "./StyledSearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import { RandomButton } from "../RandomButton/StyledRandomButton";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";



export const SearchBar = ({ onSearch }) => {
  
  const getRandomID = () => {
    return Math.floor(Math.random() * (826 - 1 + 1) + 1);
  };

  
  const [id, setId] = useState(null);

   const empty = useRef(null);

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(id);
      empty.current.value = null
      setId(null)
    }
  };

  return (
    <StyledSearchBar>
          <RandomButton
        onClick={() => {
          onSearch(getRandomID());
        }}
      >
        <FontAwesomeIcon icon={faShuffle} />
      </RandomButton>
      <StyledInput
         ref={empty}
        placeholder="Ingresa un ID numérico"
        type="number"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <StyledButton
        onClick={() => {
          onSearch(id);
          empty.current.value = null
          setId(null)
        }}
      >
        <span><FontAwesomeIcon icon={faPlus} /></span>
      </StyledButton>
    </StyledSearchBar>
  );
};
