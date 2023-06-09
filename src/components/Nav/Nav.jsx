import {SearchBar} from "../SearchBar/SearchBar";
import { NavContainer } from "./StyledNav";
import logo from '../../assets/img/logo.png'
import logo2 from '../../assets/img/logo2.png'
import { RandomButton } from "../RandomButton/StyledRandomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";


export default function Nav ({onSearch}){

    const getRandomID = () =>{
       return Math.floor(Math.random() * (826 - 1 + 1 ) + 1)
    }


    return (
        <NavContainer>
        <picture>
        <source media="(max-width: 480px)" srcset={logo2}></source>
        <img id="logo" src={logo}/>
        </picture>
        
            <RandomButton onClick={()=>{onSearch(getRandomID())}}><FontAwesomeIcon icon={faShuffle} /></RandomButton>
            <SearchBar onSearch={onSearch}/>
        </NavContainer>
    )
}