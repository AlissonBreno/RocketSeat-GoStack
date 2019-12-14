import express from 'express';
import routes from './routes';

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

export default new App().server;