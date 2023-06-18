const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = (res, id) => {
  axios(`${URL}/${id}`)
    .then(({ data }) => {
      const {
        name,
        gender,
        species,
        origin = origin.name,
        image,
        status,
      } = data;
      const character = {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,
      };
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(character));
      
    })
    .catch((error) => {
        res.writeHead(500, {'Content-type' : 'text/plain'})
        res.end(error.message)
    });
};

module.exports = getCharById