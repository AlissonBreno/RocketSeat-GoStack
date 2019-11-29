const express = require('express');

const server = express();

server.use(express.json());

//const projects = ['Esses', 'São', 'Os Projetos'];
const projects = [{
  titlle: 'titulo 1' + 'titulo 2',
  tasks: 'fazer tal coisa' + 'fazer outra coisa'
}];

//Lista todos os projetos do sistema
server.get('/projects', (req, res) => {
  return res.json(projects);
});

//Altera um item da array
server.put('/projects/:index', (req, res) => {
  const { index } = req.params;
  const { titlle } = req.body;

  projects[index] = titlle;

  return res.json(users);
});


server.listen(3000);