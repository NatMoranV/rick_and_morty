export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";





export const addFav = (character) => {
  return {
    type: ADD_FAV,
    payload: character 
  }
  };
export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id 
  }
  };
//   return function (dispatch){
//     axios(`https://rickandmortyapi.com/api/character/${id}`).then((data)=> dispatch({type: GET_CHARACTERS, payload: data.data}))
//   }


// export const addCharacter = (id) =>{
//     return {type: ADD_CHARACTER, payload: id}
// }


// export const removeCharacter = (id) =>{
//     return {type: REMOVE_CHARACTER, payload: id}
// }