import debug from 'debug';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { customerRoute } from '@Resources/customer';
import { genreRoute } from '@Resources/genre';
import { movieRoute } from '@Resources/movie';
import { rentalRoute } from '@Resources/rental';

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
app.use('/api/movies', movieRoute);
app.use('/api/rentals', rentalRoute);

applyMiddlewares(app);
app.use(handleError);

export default app;
