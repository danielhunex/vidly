import express from 'express';
import {
  deleteGenre,
  getGenreById,
  getGenres,
  postGenre,
  putGenre
} from './controller';

import asyncWrapper from '@Libs/asyncWrapper';

const route = express.Router();

route.get('/', asyncWrapper(getGenres));
route.get('/:id', asyncWrapper(getGenreById));
route.post('/', asyncWrapper(postGenre));
route.put('/:id', asyncWrapper(putGenre));
route.delete('/:id', asyncWrapper(deleteGenre));

export default route;
