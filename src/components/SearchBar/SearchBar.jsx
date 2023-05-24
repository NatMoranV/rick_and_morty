import { StyledButton } from "../SearchBarButton/StyledSearchBarButton";
import { StyledSearchBarInput } from "../SearchBarInput/StyledSearchBarInput";
import { StyledSearchBar } from "./StyledSearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";

export const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState(null);

   const empty = useRef(null);

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(id);
      empty.current.value = null
    }
  };

  return (
    <StyledSearchBar>
      <StyledSearchBarInput
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
        }}
      >
        <span><FontAwesomeIcon icon={faPlus} /></span>
      </StyledButton>
    </StyledSearchBar>
  );
};
