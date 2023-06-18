import Card from "../Card/Card";
import { Grid } from "./StyledGrid";

export default function Cards({ onClose,  characters }) {
  return (
    <Grid>
      {characters.map(
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
