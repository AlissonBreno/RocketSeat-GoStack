const express = require('express');

const server = express();


//Query Params = ?teste=1
//Route Params = /users/1
//Request Body = {"name": "Alisson", "email": "alissonbrenoemp@gmail.com" }

server.get('/users/:id', (req, res) => {
  const { id } = req.params;
  //return res.json({ message: `Hello ${nome}` }); <- Caso Query
  return res.json({ Message: `Buscando o usuário ${id}` });
})

server.listen(3000);