const express = require('express');
const routes = require('./routes');

class App {
  constructor() {
    //Variável server
    this.server = express();

    //Chamar os métodos
    this.middleares();
    this.routes();
  }

  middleares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;