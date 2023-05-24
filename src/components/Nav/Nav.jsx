import {SearchBar} from "../SearchBar/SearchBar";
import { NavContainer } from "./StyledNav";
import logo from '../../assets/img/logo.png'
import { RandomButton } from "../RandomButton/StyledRandomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";


export default function Nav ({onSearch}){

    const getRandomID = () =>{
       return Math.floor(Math.random() * (826 - 1 + 1 ) + 1)
    }


    return (
        <NavContainer>
        <img id="logo" src={logo}/>
            <RandomButton onClick={()=>{onSearch(getRandomID())}}><FontAwesomeIcon icon={faShuffle} /></RandomButton>
            <SearchBar onSearch={onSearch}/>
        </NavContainer>
    )
}