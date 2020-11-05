import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import Routes from './routes';
export class Server {
  private server: Application;

  constructor(private port?: number | string) {
    this.server = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.server.set('port', process.env.PORT || this.port);
  }
  middlewares() {
    //const corsOptions = { origin: 'https://pricing-cards.herokuapp.com', optionsSuccessStatus: 200 }
    this.server.use(cors());
    this.server.use(morgan('dev'));
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
    this.server.use(express.static(path.resolve(__dirname, 'public')))
  }
  routes() {
    this.server.use(Routes)
  }
  listen() {
    this.server.listen(this.server.get('port'));
    if (process.env.NODE_ENV != 'pro') {
      console.log('server listen on port', this.server.get('port'));
    }
  }
}