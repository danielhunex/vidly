import debug from 'debug';
import express from 'express';
import genreRoute from './resources/genre';
import customerRoute from './resources/customer';
import helmet from 'helmet';
import morgan from 'morgan';
import applyMiddlewares, { handleError } from '@Middlewares';

const tidlyDebug = debug('vidly:app');
const startupDebug = debug('vidly:startup');

tidlyDebug('Creating the App... from express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  startupDebug('Morgan tiny enabled ....');
}

app.use('/api/genres', genreRoute);
app.use('/api/customers', customerRoute);

applyMiddlewares(app);
app.use(handleError);

export default app;
