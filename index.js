const express = require('express');

const server = express();

server.use(express.json());

const users = ['Rubens', 'Eliete', 'Marina'];//começa com zero: 0,1,2...

server.get('/users', (req, res) => {
  return res.json(users);
});

server.get('/users/:index', (req, res) => {
  const { index } = req.params;

  return res.json({message : `Exibindo o índice ${index} ` + users[index]});
});
//Create
server.post ('/users', (req, res) => {
  const { name } = req.body;
  users.push(name);
  return res.json(users);
});
//Update ou edit
server.put( '/users/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;
  return res.json(users);
});
//Delete
server.delete("/users/:index", (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);
  return res.send(); //para mostrar na tela usar 'json(users);'
});

server.listen(3000)