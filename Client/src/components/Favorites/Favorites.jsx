import { connect } from "react-redux"
import { Grid } from "../CardsGrid/StyledGrid";
import Card from "../Card/Card";

const Favorites = ({ myFavorites, onClose }) =>{
    return (
        <Grid>
          {myFavorites.map(
            ({  id, image, name, status, species, gender, origin }) => (
                <Card
                onClose={onClose}
                  key={id}
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  origin={origin}
                  image={image}
                />
              )
            
          )}
        </Grid>
      );

}

const mapStateToProps =(state) =>{
    return {
      myFavorites: state.myFavorites
    }
    }

    export default connect(mapStateToProps)(Favorites)

