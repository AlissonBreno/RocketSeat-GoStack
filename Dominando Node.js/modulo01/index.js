const express = require('express');

const server = express();

//Mostrar para o servidor que deve-ser ler por json
server.use(express.json());

//Query params = ?teste=1
//Route params = teste/1
//Request body = { "name": "Alisson" }


const users = ['Alisson', 'Diego', 'Bruno'];

//Isso é uma Middleware Global
server.use((req, res, next) => {
  //Pega o tempo 
  console.time('Request');

  //Passa o método que será executado e a url requisitada
  console.log(`Método: ${req.method}; URL: ${req.url};`);

  //Permite que a rota seja executada
  next();

  console.timeEnd('Request');
});

//Middleware local para criar e editar
function checkUsersExists(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: 'User name is required.' });
  }
  return next();
}

function checkUserInArray(req, res, next) {
  const user = users[req.params.index];

  if (!user) {
    return res.status(400).json({ error: 'User does not exists!' });
  }

  req.user = user;

  return next();
}

server.get('/users', (req, res) => {
  return res.json(users);
})

server.get('/users/:index', checkUserInArray, (req, res) => {
  return res.json(req.user);
});

server.post('/users', checkUsersExists, (req, res) => {
  const { name } = req.body;
  users.push(name);

  return res.json(users);
});

server.put('/users/:index', checkUserInArray, checkUsersExists, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
});

server.delete('/users/:index', checkUserInArray, (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.send();
});

server.listen(3000);