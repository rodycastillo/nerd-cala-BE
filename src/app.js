const express = require('express');
const cors = require('cors');
const app_router = require('./routes');


class ServerApp {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.routes();
    this.listen();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({
      extended: true
    }));
  }

  routes() {
    this.app.use('/api/v1/', app_router);
  }


  listen() {
    this.app.listen(this.port, () => {
      console.log(`Listening on PORT: http://localhost:${this.port}/`);
    })
  }
}

module.exports = ServerApp;