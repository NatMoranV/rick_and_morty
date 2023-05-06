import Card from '../Card/Card';
import { Grid } from './StyledGrid';


export default function Cards({characters}) {
return (
   <Grid>
      {characters.map((character) =>{
         return <Card
            key = {character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
         />
      })}
   </Grid>
)

}
