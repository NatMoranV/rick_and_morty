import { SearchBar } from "../SearchBar/SearchBar";
import { StyledNavBarContainer } from "./StyledNavBarContainer";
import logo from "../../assets/img/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { StyledAboutButton } from "../AboutButton/StyledAboutButton";
import { StyledNavContainer } from "../NavContainer/StyledNavContainer";



export default function Nav({ onSearch, logout }) {
  const location = useLocation();
  const isHidden = location.pathname === "/";

  return (
    <StyledNavBarContainer className={isHidden ? "hidden" : ""}>
      <NavLink to="/home">
        <img id="logo" src={logo} />
      </NavLink>

      <SearchBar onSearch={onSearch} />

      <StyledNavContainer>
        <NavLink to="/home">
          <StyledAboutButton>Home</StyledAboutButton>
        </NavLink>
        <NavLink to="/about">
          <StyledAboutButton>About</StyledAboutButton>
        </NavLink>
        <NavLink to="/favorites">
          <StyledAboutButton>Favorites</StyledAboutButton>
        </NavLink>
          <StyledAboutButton onClick={logout}>Logout</StyledAboutButton>
      </StyledNavContainer>
    </StyledNavBarContainer>
  );
}
