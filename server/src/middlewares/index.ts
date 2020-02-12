import middlewares from './middlewares';
import { Express } from 'express';

const applyMiddleWare = (app: Express): void =>
  middlewares.forEach(middleware => app.use(middleware));

export { default as handleError } from './errorHandler';
export default applyMiddleWare;
