var http = require("http");
const getCharById  = require("./controllers/getCharById");
const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req; 
    let id = Number(url.split('/').at(-1));
    
    if (url.includes("/rickandmorty/character")) {
      getCharById(res, id)
    }
      

 else {
        res.writeHead(403, { "Content-Type": "application/json" });
        res.end(JSON.stringify({message: "Route not found"}));
      }
  })
  .listen(PORT, "localhost", () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
